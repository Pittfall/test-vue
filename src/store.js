import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        exerciseSet: [] // id, name, weight, sets
    },
    getters: {
        exercise: (state) => (id) => {
            return state.exerciseSet.find( e => {
                return e.id = id;
            });
        },
        exercises(state) {
            return state.exerciseSet;
        }
    }
});