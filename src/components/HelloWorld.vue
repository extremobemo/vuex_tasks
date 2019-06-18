<template>
  <div class="hello">
     <div class='left'>
        <h1> {{ title }} </h1>
        <form @submit.prevent="addTask">
          <input class="task-input" type='text' placeholder='Get crackin!' v-model='newTask' />
        </form>
        <h2 v-if="tasks.length < 1"> No work? Lucky you!</h2>
        <ul>
          <li v-for="(task, index) in tasks" v-bind:key='index'>
            <button class="btn" v-on:click="removeTask(index)">{{ task }}</button>
          </li>
        </ul>
     </div>
     <div class='right'>
     </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'HelloWorld',
  data() {
    return {
      newTask: '',
    };
  },
  computed: {
    ...mapState([
      'title',
      'tasks',
    ]),
  },
  methods: {
    ...mapMutations([
      'ADD_TASK',
      'REMOVE_TASK',
    ]),
    addTask() {
      this.ADD_TASK(this.newTask);
      this.newTask = '';
    },
    removeTask(x) {
      this.REMOVE_TASK(x);
    },
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
  padding: 10;
  display: block;
  margin-bottom: 100 200px;
}
a {
  color: #42b983;
}

.btn {
  border: none;
  background-color: inherit;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
}

/* On mouse-over */
.btn:hover {background: #eee;}


</style>
