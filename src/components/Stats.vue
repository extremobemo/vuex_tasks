<template>
  <div class="stats">
     <h1>Stats component</h1>
     <p>You have completed {{ countCompletedTasks }} tasks</p>
     <center><doughnut-chart :data="chartData" :options='chartOptions'></doughnut-chart></center>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DoughnutChart from '../DoughnutChart';

export default {
  name: 'Stats',
  components: {
    DoughnutChart,
  },
  data() {
    return {
      chartData: {
        labels: ['Need to be finished', 'Completed'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['#E46651', '#41B883', '#00D8FF'],
            data: [this.$store.getters.countTasks, this.$store.getters.countCompletedTasks],
          },
        ],
      },
      chartOptions: {
        responsive: false,
      },
    };
  },
  computed: {
    ...mapGetters([
      'countTasks',
      'countCompletedTasks',
    ]),
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
