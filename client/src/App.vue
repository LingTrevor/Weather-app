<template>
  <div>
    <WeatherNav navTitle="Weather"/>
    <Weather weatherLabel="Search Location"/>
    <WeatherData/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import WeatherNav from "./components/WeatherNav.vue";
import Weather from "./components/Weather.vue";
import WeatherData from "./components/WeatherData.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    WeatherNav,
    Weather,
    WeatherData
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  // font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

body {
  background-color: #c8e9fd;
}
</style>
