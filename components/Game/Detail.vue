<template>
  <div class="gameDetailPage">
    <h1>
      {{ parseDay(game.startDate) }} | {{ parseTime(game.startDate) }} Uhr
    </h1>
    <div id="chart">
      <ClientOnly>
        <apexchart
          type="bar"
          height="350"
          :options="chartData.chartOptions"
          :series="chartData.series"
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

const chartData = reactive({
  series: [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ],
  chartOptions: {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
    },
  },
});
</script>
