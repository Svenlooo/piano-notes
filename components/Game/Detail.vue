<template>
  <div class="gameDetailPage">
    <h1>
      {{ parseDay(game.startDate) }} | {{ parseTime(game.startDate) }} Uhr
    </h1>
    <div id="chart">
      <ClientOnly>
        <apexchart
          type="scatter"
          height="350px"
          :options="chartConfig.chartOptions"
          :series="chartConfig.series"
        ></apexchart>
      </ClientOnly>
    </div>
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
 * See: https://apexcharts.com/vue-chart-demos/scatter-charts/basic/
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
    },
    xaxis: {
      tickAmount: 10,
      labels: {
        show: true,
        style: {
          colors: "#fff",
        },
      },
    },
    yaxis: {
      tickAmount: 10,
      max: 100,
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
    colors: ["#fff"],
  },
});
</script>