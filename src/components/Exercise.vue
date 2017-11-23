<<template>
  <v-form v-model="valid">
    <v-text-field
      label="Name"
      v-model="name"
      @input="updateExercise"
      required
    ></v-text-field>
    <v-text-field
      label="Weight"
      v-model="weight"
      @input="updateExercise"
      required
    ></v-text-field>
    <v-text-field
      label="Sets"
      v-model="sets"
      @input="updateExercise"
      required
    ></v-text-field>
  </v-form>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: [
    'exercise'
  ],
  data () {
    return {
      valid: false,
      name: '',
      weight: '',
      sets: ''
    }
  },
  methods: {
    updateExercise(event) {
      const updatedExercise = { id: this.id, name: this.name, weight: this.weight, sets: this.sets };

      this.$store.dispatch('updateExercise', updatedExercise);
    }
  },
  computed: {
  }
}
</script>

<style>

</style>
