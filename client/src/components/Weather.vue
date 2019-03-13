<template>
  <main>
    <div class="search">
      <form @submit.prevent="getWeather">
        <h3>{{ weatherLabel }}</h3>
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
      :main_weather="weather.weather[0].main"
      :image_link="weather.weather[0].icon"
    />
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
    letter-spacing: 1px;

    @media screen and(max-width: 768px) {
      font-size: 30px;
    }

    @media screen and(max-width: 576px) {
      font-size: 24px;
    }

    @media screen and(max-width: 320px) {
      font-size: 18px;
    }
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

    @media screen and(max-width: 576px) {
      min-width: 250px;
      font-size: 14px;
    }

    @media screen and(max-width: 320px) {
      min-width: 220px;
      font-size: 14px;
    }

    &:focus {
      outline: none;
      box-shadow: 1px 2px 20px #054f7d;
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
      box-shadow: 1px 2px 20px #054f7d;
    }
    @media screen and(max-width: 576px) {
      padding-top: 6px;
    }
  }

  .error {
    color: red;
    margin-bottom: 20px;
  }
}
</style>
