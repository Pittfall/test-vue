<<template>
  <v-form v-model="valid">
    <v-text-field
      label="Name"
      v-model="name"
      required
    ></v-text-field>
    <v-text-field
      label="Weight"
      v-model="weight"
      required
    ></v-text-field>
    <v-text-field
      label="Sets"
      v-model="sets"
      required
    ></v-text-field>
  </v-form>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: [
    'item'
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
    changeInput(event) {
      this.$emit('changeData', {name: this.name, weight: this.weight, sets: this.sets});
    }
  },
  computed : mapGetters( {
    exercise : 'exercise'
  })
}
</script>

<style>

</style>
