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
          :options="scatterChartData.chartOptions"
          :series="scatterChartData.series"
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

const adjacentIndexes = computed(() => {
  return [
    props.game.originalIndex > 0 ? props.game.originalIndex : 0,
    props.game.originalIndex + 1,
  ];
});

const generateData = (count, yrange) => {
  let i = 0;
  let series = [];
  const letters = [
    "Cb",
    "C",
    "C#",
    "Db",
    "D",
    "D#",
    "Eb",
    "E",
    "E#",
    "Fb",
    "F",
    "F#",
    "Gb",
    "G",
    "G#",
    "Ab",
    "A",
    "A#",
    "Bb",
    "B",
    "B#",
  ];
  while (i < count) {
    let x = (i + 1).toString();
    let y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: letters[i],
      y: y,
    });
    i++;
  }

  return series;
};

/**
 * Data needed:
 *
 * - Total Notes which were asked (X axis)
 *    - formatted for octaves
 *    - sorted
 */
const scatterData = computed(() => {
  const gameMetric = props.game.metrics.notesCorrectPercentage;

  // Octaves & Notes
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

  return {
    notes: notes,
    notesMeta: noteOctaveScore,
  };
});

const chartData = computed(() => {
  const series = [];
  const data = [];
  scatterData.value.notesMeta.forEach((note) => {
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

const scatterChartData = reactive({
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
      },
    },
    yaxis: {
      tickAmount: 10,
    },
    colors: ["#fff"],
  },
});
</script>
