<template>
  <div>
    <PetTable :pets="cats" species="cats"/>
  </div>
</template>
<script>
import { mapState } from "vuex";
import PetTable from "@/components/PetTable.vue";
export default {
  data() {
    return {};
  },
  components: {
    PetTable
  },
  computed: {
    ...mapState(["cats"])
  }
};
</script>
