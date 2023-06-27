<template>
  <div class="gameDetailPage">
    <ClientOnly>
      <h2>
        {{ parseDay(game.startDate) }} | {{ parseTime(game.startDate) }} Uhr
      </h2>
      <ul>
        <li>
          <strong>{{ game.notes.length }}</strong> Played notes in
        </li>
      </ul>
      <div :class="$style.clefWrapper">
        <Clef
          type="violin"
          :class="$style.clef"
          @click="setChartClef('violin')"
        />
        <Clef type="bass" :class="$style.clef" @click="setChartClef('bass')" />
      </div>
      <div id="chart">
        <apexchart
          type="bar"
          width="100%"
          :height="`${chartHeight}px`"
          :options="chartOptions"
          :series="chartData"
        ></apexchart>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>
import { parseDay, parseTime } from "~/utils/dates";
import noteOctaveSpelling from "~/utils/noteOctaveSpelling";

const props = defineProps({
  game: {
    required: true,
  },
});

const chartClef = ref("violin");
const chartHeight = ref(400);

const setChartClef = (value) => {
  chartClef.value = value;
};

/**
 * Calculates the chart height, depending on the amount of rows.
 * @return {number} - height px value
 */
const calculateChartHeight = (chartData) => {
  const chartMinHeight = 400;
  const rowHeight = 35;
  const rowCount = chartData.length;
  const chartTotalHeight = rowCount * rowHeight;

  if (process.client) {
    nextTick(() => {
      chartHeight.value =
        chartTotalHeight > chartMinHeight ? chartTotalHeight : chartMinHeight;
    });
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
        colors: "#FBF7F5",
      },
    },
  },
  yaxis: {
    tickAmount: 10,
    max: 100,
    labels: {
      style: {
        colors: "#FBF7F5",
      },
    },
  },
  colors: ["#F6E8E1"],
  dataLabels: {
    formatter: function (val) {
      return val + " %";
    },
    offsetX: 16,
    style: {
      colors: ["#2b2b2b"],
    },
  },
  tooltip: {
    enabled: false,
  },
});

watch(gameMetricNotes, (newVal) => {
  calculateChartHeight(newVal);
});
</script>

<style lang="scss" module>
.clefWrapper {
  display: flex;
  flex-flow: row nowrap;

  .clef {
    height: 24px;
    margin-right: 24px;

    & svg {
      height: 100%;
    }
  }
}
</style>
