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
                return e.id == id;
            });
        },
        exercises(state) {
            return state.exerciseSet;
        }
    },
    mutations: {
        addExercise(state, exercise) {
            state.exerciseSet.push(exercise);
        },
        updateExercise(state, newExercise) {
            const i = state.exerciseSet.findIndex(e => {
                return e.id == newExercise.id;
            });

            state.exerciseSet[i] = newExercise;
        }
    },
    actions : {
        addExercise({ commit, state}, exercise) {
            commit('addExercise', exercise);
        },
        updateExercise({ commit, state}, newExercise) {
            commit('updateExercise', newExercise);
        }
    }
});