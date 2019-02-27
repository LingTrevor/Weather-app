<template>
  <div class="card">
    <div class="row">
      <div class="column">
        <img
          src="https://qvcc.edu/wp-content/uploads/2017/03/Sun-PNG-Image.png"
          alt="Weather Condition"
          srcset
        >
      </div>
      <div class="column">
        <div class="info-card">
          <div class="info-card-temp">{{temperature}}°</div>
        </div>
      </div>
      <div class="column">
        <div class="info-card">
          <div class="location">{{location}}</div>
        </div>
        <div class="info-card">
          <div class="date">{{date}}</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <div class="info-card">
          <p>{{main_weather}}</p>
        </div>
        <div class="info-card">
          <p>Sunrise: {{sunrise}}</p>
        </div>
        <div class="info-card">
          <p>Sunset: {{sunset}}</p>
        </div>
      </div>
      <div class="column">
        <div class="info-card">
          <p>Humidity: {{humidity}}%</p>
        </div>
        <div class="info-card">
          <p>Low: {{low_temp}}°</p>
        </div>
        <div class="info-card">
          <p>High: {{high_temp}}°</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    location: String,
    temperature: Number,
    date: String,
    humidity: Number,
    low_temp: Number,
    high_temp: Number,
    sunrise: String,
    sunset: String,
    main_weather: String
  }
};
</script>

<style lang="scss">
.card {
  display: flex;
  flex-wrap: wrap;
  background-color: #e9f6fe;
  border: 2px solid #054f7d;
  box-shadow: 1px 2px 5px #054f7d;
  height: 320px;
  max-width: 550px;
  margin: 0 auto;
  border-radius: 10px;
  color: #054f7d;

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
        margin-left: 25px;
        margin-top: 15px;
      }
      span {
        font-size: 80px;
      }
    }
  }
}

.info-card {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 20px;
  // padding: 20px;
  p {
    margin-right: 40px;
  }

  .location {
    font-size: 36px;
    margin-top: 40px;
  }

  .date {
    color: rgba(5, 79, 125, 0.5);
  }

  .info-card-temp {
    margin-top: 20px;
    font-size: 100px;
  }
}
</style>
