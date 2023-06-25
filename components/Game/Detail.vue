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
      <div id="chart">
        <apexchart
          type="bar"
          :height="`${chartHeight}px`"
          :options="chartConfig.chartOptions"
          :series="chartConfig.series"
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

/**
 * Calculates the chart height, depending on the amount of rows.
 * @return {number} - height px value
 */
const chartHeight = computed(() => {
  const chartMinHeight = 400;
  const rowHeight = 35;
  const rowCount = gameMetricNotes.value.length;
  const chartTotalHeight = rowCount * rowHeight;

  return chartTotalHeight > chartMinHeight ? chartTotalHeight : chartMinHeight;
});

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
const chartConfig = reactive({
  series: chartData,
  chartOptions: {
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
  },
});
</script>
