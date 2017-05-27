<template>
  <div id="landing">
    <div class="overlay"></div>
    <div class="content">
      <b-button variant="success" size="lg" to="app">Survive!</b-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'landing'
  }
</script>

<style lang="scss" scoped>
  #landing {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background: black;

    & .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background: url('../assets/zombie-bg.jpg') no-repeat center center fixed;
      background-size: cover;
      animation: shadow1 2s linear 3s infinite, shadow2 5s ease-in-out 2s 3, pulsate 7s ease-in 10s 1;
      animation-fill-mode: forwards;
    }

    & .content {
      z-index: 1;
    }
  }

  @keyframes shadow1 {
    0%   {opacity: 0.9}
    10%  {opacity: 0.8}
    15%  {opacity: 0}
    17%  {opacity: 1}
    18%  {opacity: 0.1}
    25%  {opacity: 1}
    89%  {opacity: 1}
    90%  {opacity: 0.2}
    100% {opacity: 1}
  }

  @keyframes shadow2 {
    0%   {filter: grayscale(30%)}
    60%  {filter: grayscale(70%)}
    100% {filter: grayscale(0%)}
  }
  @keyframes pulsate{
    0%{
      transform: scale(1);
    }
    100%{
      transform: scale(1.2);
    }
  }
</style>
