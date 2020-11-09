<template>
  Station Page
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios
      .get("https://cybersoft-vexere-api.herokuapp.com/api/stations")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style></style>
