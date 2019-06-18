<template>
  <div class="completed">
     <div class='left'>
        <h1> Completed Tasks </h1>
        <ul>
          <li v-for="(task, index) in completed_tasks" v-bind:key='index'>
            {{ task }}
          </li>
        </ul>
     </div>
    <stats />
  </div>
</template>

<script>
import Stats from '@/components/Stats.vue';
import { mapState } from 'vuex';

export default {
  name: 'Computed',
  components: {
    Stats,
  },
  computed: {
    ...mapState([
      'title',
      'tasks',
      'completed_tasks',
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
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
