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

    @media screen and(max-width: 768px) {
      font-size: 42px;
    }

    @media screen and(max-width: 576px) {
      font-size: 36px;
    }

    @media screen and(max-width: 320px) {
      font-size: 30px;
    }
  }
}
</style>
