<<template>
  <v-form v-model="valid">
    <v-text-field
      label="Name"
      v-model="name"
      @input="changeInput"
      required
    ></v-text-field>
    <v-text-field
      label="Weight"
      v-model="weight"
      @input="changeInput"
      required
    ></v-text-field>
    <v-text-field
      label="Sets"
      v-model="sets"
      @input="changeInput"
      required
    ></v-text-field>
  </v-form>
</template>

<script>
export default {
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
  }
}
</script>

<style>

</style>
