<template>
  <div id="landing">
    <div class="overlay"></div>
    <div class="content">
      <b-button variant="success" size="lg" v-if="!displayLoginForm" @click="toggleShowForm">Survive!</b-button>
      <Login v-if="displayLoginForm"/>
    </div>
  </div>
</template>

<script>
  import Login from './Login'
  export default {
    name: 'landing',
    data () {
      return {
        displayLoginForm: false
      }
    },
    methods: {
      toggleShowForm () {
        this.displayLoginForm = !this.displayLoginForm
      }
    },
    components: { Login }
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
      color: white;

      .login-form {
        padding: 40px;
        background: black;
        opacity: 0.8;
      }

      .secret-question-container {
        .row {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        .option-container {
          width: 150px;
        }

        .label {
          display: block;
          min-height: 60px;
          width: 50px;
          margin-left: 10px;
          padding-top: 45px;
          text-align: center;
        }

        .brain-label {
          background: url('../assets/brain.png') top center;
          background-size: 40px 40px;
          background-repeat: no-repeat;
        }

        .other-label {
          background: url('../assets/meal.png') top center;
          background-size: 40px 40px;
          background-repeat: no-repeat;
        }
      }

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
