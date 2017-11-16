<<template>
  <v-form v-model="valid">
    <v-text-field
      label="Name"
      v-model="name"
      :rules="nameRules"
      :counter="10"
      required
    ></v-text-field>
    <v-text-field
      label="E-mail"
      v-model="email"
      :rules="emailRules"
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
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }
  }
}
</script>

<style>
.primary {
 background-color:#2196F3 !important;
 border-color:#2196F3 !important;
}
.primary--text {
 color:#2196F3 !important;
}
.secondary {
 background-color:#424242 !important;
 border-color:#424242 !important;
}
.secondary--text {
 color:#424242 !important;
}
.accent {
 background-color:#82B1FF !important;
 border-color:#82B1FF !important;
}
.accent--text {
 color:#82B1FF !important;
}
.error {
 background-color:#FF5252 !important;
 border-color:#FF5252 !important;
}
.error--text {
 color:#FF5252 !important;
}
.info {
 background-color:#2196F3 !important;
 border-color:#2196F3 !important;
}
.info--text {
 color:#2196F3 !important;
}
.success {
 background-color:#4CAF50 !important;
 border-color:#4CAF50 !important;
}
.success--text {
 color:#4CAF50 !important;
}
.warning {
 background-color:#FFC107 !important;
 border-color:#FFC107 !important;
}
.warning--text {
 color:#FFC107 !important;
}
</style>
