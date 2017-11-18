<template>
  <div>
    <v-expansion-panel>
      <v-expansion-panel-content v-for="(item,i) in exerciseSet" :key="i">
        <div slot="header">
          <div v-if="!expanded">{{ item.name }}</div>
        </div>
        <excercise @changeData='changeExercise($event, item.id)'></excercise>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-btn color="primary" v-on:click="addExercise">Add Exercise</v-btn>
  </div>
</template>

<script>
import Excercise from './Exercise.vue'

export default {
  data() {
    return {
      expanded: false,
      exerciseSet: [], // id, name, weight, sets
      componentId: 0
    }
  },
  components: {
    'excercise' : Excercise
  },
  methods: {
    changeExercise(newData, id) {
      var updatedName = 'New Exercise';

      if (newData.name.trim())
      {
        updatedName = newData.name;
      }

      this.exerciseSet.find(e => e.id === id).name = updatedName;
      this.exerciseSet.find(e => e.id === id).weight = newData.weight;
      this.exerciseSet.find(e => e.id === id).sets = newData.sets;
    },
    addExercise() {
      this.exerciseSet.push({ id: ++this.componentId, name: 'New Exercise', weight: '', sets: ''});
    }
  }
}
</script>