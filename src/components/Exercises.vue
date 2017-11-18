<template>
  <div>
    <v-expansion-panel>
      <v-expansion-panel-content v-model="expanded" v-for="(item,i) in exerciseSet" :key="i">
        <div slot="header">
          <div v-if="!expanded">{{ item.name }}</div>
        </div>
        <excercise @theName='changeName($event, item.id)'></excercise>
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
      exerciseSet: [],
      componentId: 0
    }
  },
  components: {
    'excercise' : Excercise
  },
  methods: {
    changeName(newValue, id) {
      var updateValue = 'New Exercise';

      if (newValue.trim())
      {
        updateValue = newValue;
      }

      this.exerciseSet.find(e => e.id === id).name = updateValue;
    },
    addExercise() {
      this.exerciseSet.push({ id: ++this.componentId, name: 'New Exercise'});
    }
  }
}
</script>