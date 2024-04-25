<template>
  <div class="bar-chart">
    <Bar :data="data" :options="options" />
  </div>
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";
import * as chartConfig from "./countries.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default {
  components: {
    Bar,
  },
  data () {
    return chartConfig;
  },
};
</script>

<style lang="scss">
.bar-chart {
  height: 400px;
  width: 100%;
  background-color: #ffffff;
}
</style>
