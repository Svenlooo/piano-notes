<template>
  <div class="gameDetailPage">
    <h1>
      {{ parseDay(game.startDate) }} | {{ parseTime(game.startDate) }} Uhr
    </h1>
    <div id="chart">
      <ClientOnly>
        <apexchart
          type="heatmap"
          height="350"
          :options="heatmapChartData.chartOptions"
          :series="heatmapChartData.series"
        ></apexchart>

        <apexchart
          type="bar"
          height="350"
          :options="barChartData.chartOptions"
          :series="barChartData.series"
        ></apexchart>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup>
import { useGamesStore } from "~/store/games";
import { parseDay, parseTime } from "~/utils/dates";

const gamesStore = useGamesStore();

const props = defineProps({
  game: {
    required: true,
  },
});

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

const heatmapChartData = reactive({
  series: [
    {
      name: "Octave 1",
      data: generateData(21, {
        min: 0,
        max: 100,
      }),
    },
    {
      name: "Octave 2",
      data: generateData(21, {
        min: 0,
        max: 100,
      }),
    },
    {
      name: "Octave 3",
      data: generateData(21, {
        min: 0,
        max: 100,
      }),
    },
    {
      name: "Octave 4",
      data: generateData(21, {
        min: 0,
        max: 100,
      }),
    },
    {
      name: "Octave 5",
      data: generateData(21, {
        min: 0,
        max: 100,
      }),
    },
  ],
  chartOptions: {
    chart: {
      height: 350,
      type: "heatmap",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#008FFB"],
    title: {
      text: "HeatMap Chart (Single color)",
    },
  },
});

const barChartData = reactive({
  series: [
    {
      data: [
        0, 100, 80, 40, 90, 40, 50, 70, 0, 90, 40, 10, 100, 20, 56, 22, 0, 100,
        0, 80, 10,
      ],
    },
  ],
  chartOptions: {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
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
      ],
    },
  },
});
</script>
