<template>
   <div>
      <input type="text" :value="msg" @input="ChangeMessage"/>
      <p>{{ message }}</p>
   </div>
</template>

<script>
   export default {
      props: ['msg'],
      data() {
         return {
            message: ''
         }
      },
      methods: {
        ChangeMessage(event) {
          this.message = event.target.value;
          this.$emit('MessageChanged', this.message);
        }
      }
   }
</script>
