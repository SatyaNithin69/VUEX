<template>
  <div class="hello">
    <h1>Adapt any animal.</h1>
    <p>Total no of animals : {{ animalsCount }}</p>
    <button class="btn btn-primary" @click="togglePetForm">Adopt Animal</button>
    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group id="exampleInputGroup2" label="Pet's Name:" label-for="exampleInput2">
        <b-form-input
          id="exampleInput2"
          type="text"
          v-model="formData.name"
          required
          placeholder="Enter name"
        />
      </b-form-group>

      <b-form-group id="exampleInputGroup3" label="Species:" label-for="exampleInput3">
        <b-form-select
          id="exampleInput3"
          :options="['cats', 'dogs']"
          required
          v-model="formData.species"
        />
      </b-form-group>

      <b-form-group id="exampleInputGroup2" label="Pet's Age:" label-for="exampleInput2">
        <b-form-input
          id="exampleInput2"
          type="number"
          v-model="formData.age"
          required
          placeholder="Enter age"
        />
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      showPetForm: false,
      Animals_count: 0,
      formData: {
        name: "",
        age: 0,
        species: null
      }
    };
  },
  computed: {
    ...mapGetters(["animalsCount"])
  },
  methods: {
    ...mapActions(["ADD_PET"]),
    togglePetForm: function() {
      this.showPetForm = !this.showPetForm;
    },
    handleSubmit: function() {
      const { name, age, species } = this.formData;
      const payload = {
        species,
        pet: {
          name,
          age
        }
      };
      this.ADD_PET(payload);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
