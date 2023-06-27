<template>
  <div class="gameDetailPage">
    <ClientOnly>
      <h2>{{ parseDay(game.startDate) }}</h2>
      <ul>
        <li>
          You played <strong>{{ game.notes.length }} notes</strong> in
          <strong>{{ secondsToHMS(game.metrics.durationInSeconds) }}</strong
          >!
        </li>
      </ul>
      <div :class="$style.clefWrapper">
        <UIComponentsButton
          @click="setChartClef('violin')"
          :active="chartClef === 'violin'"
          :class="$style.button"
          icon="game-icons:g-clef"
          >Violin notes
        </UIComponentsButton>
        <UIComponentsButton
          @click="setChartClef('bass')"
          :active="chartClef === 'bass'"
          :class="$style.button"
          icon="game-icons:f-clef"
          >Bass notes</UIComponentsButton
        >
      </div>
      <div :class="$style.chart">
        <apexchart
          type="bar"
          :height="`${chartHeight}px`"
          :options="chartOptions"
          :series="chartData"
        ></apexchart>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>
import { parseDay, secondsToHMS } from "~/utils/dateTime";
import noteOctaveSpelling from "~/utils/noteOctaveSpelling";

const props = defineProps({
  game: {
    required: true,
  },
  chartMinHeight: {
    type: Number,
    default: 400,
  },
  chartRowHeight: {
    type: Number,
    default: 35,
  },
});

const chartClef = ref("violin");
const chartHeight = ref(props.chartMinHeight);
const chartHeightCalculated = ref(false);

const setChartClef = (value) => {
  chartClef.value = value;
};

/**
 * Calculates the chart height, depending on the amount of rows.
 * @param {object} - The chart's data (must be gameMetricNotes)
 * @return {number} - height px value
 */
const calculateChartHeight = (chartData) => {
  const rowCount = chartData.length;
  const chartTotalHeight = rowCount * props.chartRowHeight;

  // Fix incorrect chart width issue
  const calculation = () => {
    chartHeight.value = Math.max(chartTotalHeight, props.chartMinHeight);
  };

  // Use nextTick only after the initial calculation
  // ensuring that the ApexChart instance is initialized.
  if (process.client && chartHeightCalculated.value) {
    nextTick(calculation);
  } else {
    calculation();
    chartHeightCalculated.value = true;
  }
};

/**
 * Index of adjacent games.
 * Used for prev and next arrows.
 * @TODO: add the arrows
 */
const adjacentIndexes = computed(() => {
  return [
    props.game.originalIndex > 0 ? props.game.originalIndex : 0,
    props.game.originalIndex + 1,
  ];
});

/**
 * Builds a collection of Notes, together with their octave and the player's score,
 * ccording to the selected Clef.
 * @return {Array<[number, string, number]>} - octave, note letter, score
 */
const gameMetricNotes = computed(() => {
  const gameMetric = props.game.metrics.notesCorrectPercentage;

  const notes = [];
  const noteOctaveScore = [];
  gameMetric.forEach((note) => {
    if (note.clef === chartClef.value) {
      const fullNote = noteOctaveSpelling(note.note + note.scale, note.octave);
      if (!notes.includes(fullNote)) {
        notes.push(fullNote);
        noteOctaveScore.push([note.octave, fullNote, note.score]);
      }
    }
  });

  return noteOctaveScore;
});

/**
 * Formats the data to be usable for the chart.
 * @return {object} - chart data
 */
const chartData = computed(() => {
  const series = [];
  const data = [];
  gameMetricNotes.value.forEach((note) => {
    data.push({
      x: note[1],
      y: note[2],
    });
  });

  series.push({
    name: chartClef.value,
    data: data,
  });

  return series;
});

// CSS Variables for chart
// TODO: Refactor to make properly reactive on theme change
const style = getComputedStyle(document.body);
const colorAxis = ref(style.getPropertyValue("--color-light").trim());
const colorBars = ref(style.getPropertyValue("--color-light2").trim());
const colorDataLabels = ref(
  style.getPropertyValue("--color-piano-black-key").trim()
);

/**
 * Configuration for the chart.
 * See: https://apexcharts.com/docs/series/
 */
const chartOptions = reactive({
  chart: {
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 300,
      animateGradually: {
        enabled: true,
        delay: 150,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 300,
      },
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        position: "bottom",
      },
    },
  },
  xaxis: {
    tickAmount: 10,
    labels: {
      show: true,
      style: {
        colors: colorAxis.value,
      },
    },
  },
  yaxis: {
    tickAmount: 10,
    max: 100,
    labels: {
      style: {
        colors: colorAxis.value,
      },
    },
  },
  colors: [colorBars.value],
  dataLabels: {
    formatter: function (val) {
      return val + " %";
    },
    offsetX: 16,
    style: {
      colors: [colorDataLabels.value],
    },
  },
  tooltip: {
    enabled: false,
  },
});

watch(
  gameMetricNotes,
  (newVal) => {
    calculateChartHeight(newVal);
  },
  { immediate: true }
);
</script>

<style lang="scss" module>
.clefWrapper {
  display: flex;
  flex-flow: row wrap;
  gap: 16px;

  @media screen and (min-width: #{map-get($breakpoints, 'xs')}) {
    flex-flow: row nowrap;
  }

  & .button {
    width: 100%;

    @media screen and (min-width: #{map-get($breakpoints, 'xs')}) {
      width: 50%;
    }
    @media screen and (min-width: #{map-get($breakpoints, 'md')}) {
      width: auto;
    }
  }
}
.chart {
  width: 100%;

  & .apexcharts-canvas {
    width: 100% !important;
  }
}
</style>
