<template>
  <div class="card">
    <div class="row">
      <div class="column">
        <img :src="image_link" alt="Weather Condition" srcset />
      </div>
    </div>
    <div class="row">
      <div class="column">
        <div class="info-card">
          <div class="info-card-temp">{{ temperature }}</div>
        </div>
      </div>
      <div class="column">
        <div class="info-card">
          <div class="location">{{ location }}</div>
        </div>
        <div class="info-card">
          <div class="date">{{ date }}</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <div class="info-card">
          <p>{{ main_weather }}</p>
        </div>
        <div class="info-card">
          <p>{{ sunrise }}</p>
        </div>
        <div class="info-card">
          <p>{{ sunset }}</p>
        </div>
      </div>
      <div class="column">
        <div class="info-card">
          <p>Humidity: {{ humidity }}%</p>
        </div>
        <div class="info-card">
          <p v-if="low_temp">Low: {{ low_temp }}</p>
          <p v-else>Low: -</p>
        </div>
        <div class="info-card">
          <p v-if="high_temp">High: {{ high_temp }}</p>
          <p v-else>High: -</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    location: String,
    temperature: String,
    date: String,
    humidity: Number,
    low_temp: String,
    high_temp: String,
    sunrise: String,
    sunset: String,
    main_weather: String,
    image_link: String
  }
};
</script>

<style lang="scss">
.card {
  display: flex;
  flex-wrap: wrap;
  background-color: #e9f6fe;
  border: 1px solid #054f7d;
  border-radius: 10px;
  box-shadow: 1px 2px 20px #054f7d;
  max-width: 400px;
  margin: 0 auto;
  margin-bottom: 20px;
  color: #054f7d;

  @media screen and(max-width: 768px) {
    max-width: 370px;
  }

  @media screen and(max-width: 576px) {
    max-width: 340px;
  }

  @media screen and(max-width: 320px) {
    max-width: 310px;
  }

  .row {
    width: 100%;
    display: flex;
    max-height: 50%;

    .column {
      flex: 1;
      justify-content: center;
      flex-direction: column;
      text-align: center;

      img {
        height: 180px;
        width: 180px;
        padding: 5px;
        margin-top: 10px;
        margin-bottom: -20px;

        @media screen and(max-width: 320px) {
          height: 160px;
          width: 160px;
        }
      }

      .info-card {
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        justify-content: center;
        margin-bottom: 10px;
        margin-top: 10px;

        p {
          padding: 5px;
          color: rgba(5, 79, 125, 0.85);
        }

        .location {
          font-size: 36px;
          margin-top: 20px;
          margin-right: 20px;
          margin-left: 10px;
        }

        .date {
          color: rgba(5, 79, 125, 0.5);
        }

        .info-card-temp {
          padding: 5px;
          font-size: 100px;
        }
      }
    }
  }
}
</style>
