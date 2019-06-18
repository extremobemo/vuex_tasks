import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'Vuex! Tasks',
    tasks: [
    ],
    completed_tasks: [
    ],
    completed: 0,
  },
  getters: {
    countTasks: state => state.tasks.length,
    countCompletedTasks: state => state.completed,
    chartData: state => [state.tasks.length, state.completed],
  },
  mutations: {
    ADD_TASK: (state, task) => {
      state.tasks.push(task);
    },
    REMOVE_TASK: (state, index) => {
      state.completed_tasks.push(state.tasks[index]);
      state.tasks.splice(index, 1);
      // eslint-disable-next-line no-param-reassign
      state.completed += 1;
    },
  },
  actions: {

  },
});
