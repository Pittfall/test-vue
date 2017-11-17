<template>
  <v-expansion-panel>
    <v-expansion-panel-content v-model="expanded" v-for="(item,i) in 1" :key="i">
      <div slot="header"><div v-if="!expanded">{{ theOnlyName }}</div></div>
      <excercise @theName='ChangeName'></excercise>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import Excercise from './Exercise.vue'

export default {
  data() {
    return {
      theOnlyName: 'New Exercise',
      expanded: false
    }
  },
  components: {
    'excercise' : Excercise
  },
  methods: {
    ChangeName(value) {
      if (value.trim() == '')
      {
        this.theOnlyName = 'New Exercise';
      }
      else
      {
        this.theOnlyName = value;
      }
    }
  }
}
</script>