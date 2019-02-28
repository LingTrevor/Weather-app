<template>
  <header class="weather-head">
    <h1>{{ navTitle }}</h1>
  </header>
</template>

<script>
export default {
  name: "WeatherNav",
  props: {
    navTitle: String
  }
};
</script>

<style lang="scss">
.weather-head {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  padding: 20px;

  h1 {
    font-size: 48px;
    color: #054f7d;
  }
}
</style>
