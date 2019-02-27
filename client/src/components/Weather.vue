<template>
  <main>
    <div class="search">
      <form @submit.prevent="getWeather">
        <h3>{{weatherLabel}}</h3>
        <div class="error" v-html="error"/>
        <input type="text" v-model="city">
        <button>-></button>
      </form>
    </div>
    <WeatherData
    v-if="this.weather"
    :location="weather.name"
    :temperature="weather.main.temp"
    :date="weather.dt"
    :humidity="weather.main.humidity"
    :low_temp="weather.main.temp_min"
    :high_temp="weather.main.temp_max"
    :sunrise="weather.sys.sunrise"
    :sunset="weather.sys.sunset"
    :main_weather="weather.weather[0].main"/>
  </main>
</template>

<script>
import WeatherService from "@/services/WeatherService";
import WeatherData from "@/components/WeatherData.vue";
export default {
  name: "Weather",
  props: {
    weatherLabel: String
  },
  data() {
    return {
      city: "",
      error: "",
      weather: ""
    };
  },
  components: {
    WeatherData
  },
  watch: {
    city(value) {
      if (value) {
        this.error = "";
      }
    }
  },
  methods: {
    async getWeather() {
      // console.log(this.city)
      try {
        const weather = (await WeatherService.post({ city: this.city })).data;
        this.weather = weather;
        this.city = "";
        // console.log(this.weather);
      } catch (err) {
        this.error = err.response.data.error;
        if (this.error === `${this.city} not found!`) {
          this.city = "";
        }
        // console.log("Err : " + err);
      }
    }
  }
};
</script>

<style lang="scss">
.search {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  padding: 20px;

  h3 {
    font-size: 36px;
    color: #054f7d;
    padding: 10px;
  }

  input {
    min-width: 300px;
    padding: 12px;
    padding-right: 50px;
    border-radius: 10px 0 0 10px;
    border: 2px solid #054f7d;
    margin-bottom: 30px;
    background-color: #e9f6fe;
    font-size: 16px;
    letter-spacing: 2px;
    text-transform: uppercase;

    &:focus {
      outline: none;
      box-shadow: 1px 2px 5px #054f7d;
    }
  }

  button {
    padding: 11px;
    padding-top: 8px;
    border: 2px solid #054f7d;
    border-left: 0;
    border-radius: 0 10px 10px 0;
    background-color: #c8e9fd;
    font-size: 20px;
    font-weight: bold;
    &:focus {
      outline: none;
      box-shadow: 1px 2px 5px #054f7d;
    }
  }

  .error {
    color: red;
    margin-bottom: 20px;
  }
}
</style>
