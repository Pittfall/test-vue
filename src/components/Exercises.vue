<template>
  <div>
    <v-expansion-panel>
      <v-expansion-panel-content v-for="(item,index) in exerciseSet" :key="index">
        <div slot="header">{{ item.name }}</div>
        <excercise :id="item.id"></excercise>
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
      componentId: 0
    }
  },
  components: {
    'excercise' : Excercise
  },
  methods: {
    addExercise() {
      this.$store.state.exerciseSet.push({ id: ++this.componentId, name: 'New Exercise', weight: '', sets: ''});
    }
  },
  computed: {
    exerciseSet() {
      return this.$store.state.exerciseSet;
    }
  }
}
</script>