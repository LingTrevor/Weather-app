<template>
  <div class="search">
    <form>
      <h3>{{weatherLabel}}</h3>
      <input type="text">
      <button>-></button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Weather",
  props: {
    weatherLabel: String
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
    background-color: #E9F6FE;
    font-size: 16px;

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
}
</style>
