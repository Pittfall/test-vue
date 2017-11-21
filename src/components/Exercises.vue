<template>
  <div>
    <v-expansion-panel>
      <v-expansion-panel-content v-for="(item,index) in exerciseSet" :key="index">
        <div slot="header">{{ item.name }}</div>
        <excercise :item="item"></excercise>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-btn color="primary" v-on:click="addExercise">Add Exercise</v-btn>
  </div>
</template>

<script>
import Excercise from './Exercise.vue'
import { mapGetters } from 'vuex'

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
      const exercise = { id: ++this.componentId, name: 'New Exercise', weight: '', sets: '' };
      const exerciseUpdate = { id: 1, name: 'Updated Exercise', weight: '', sets: '' };

      this.$store.dispatch('addExercise', exercise);
      this.$store.dispatch('updateExercise', exerciseUpdate);
    }
  },
  computed: mapGetters({
    exerciseSet : 'exercises'
  })
}
</script>