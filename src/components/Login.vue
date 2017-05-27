<template>
    <div class="login-form">
      <p>{{ isLoginForm ? 'Login' : 'Registration'}}</p>
      <b-form-input type="text" placeholder="Enter your name" v-model="username"></b-form-input>
      <br>
      <b-form-input type="password" placeholder="Enter your password" v-model="password"></b-form-input>
      <br>
      <div class="secret-question-container">
        <p>Select your favourite meal:</p>

        <div class="row">
          <div class="row option-container">
            <input type="radio" id="brain" value="brain" v-model="selectedSecret">
            <label for="brain" class="label brain-label">Brains</label>
          </div>

          <div class="row option-container">
            <input type="radio" id="other" value="other" v-model="selectedSecret">
            <label for="other" class="label other-label">Other</label>
          </div>
        </div>

        <b-form-input v-if="displayCustomSecretField" type="text" placeholder="Enter your favourite meal" v-model="customSecret"></b-form-input>
        <br>

        <b-button variant="success" :block="true" :disabled="!loginEnabled" @click="login">{{ isLoginForm ? 'LOG IN' : 'SIGN UP'}}</b-button>
        <br>

        <a href="#" @click="switchFormType">{{ isLoginForm ? 'Don\'t have an account? Sign up for free' : 'Have account? Login!'}}</a>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        type: 'login',

        username: '',
        password: '',
        selectedSecret: null,
        customSecret: null,

        secretOptions: [{
          text: 'Brains',
          value: 'brains'
        }, {
          text: 'Something else',
          value: 'other'
        }]
      }
    },
    computed: {
      isLoginForm: function () {
        return this.type === 'login'
      },
      isSignupForm: function () {
        return this.type === 'signup'
      },
      displayCustomSecretField: function () {
        return this.selectedSecret === 'other'
      },
      secret: function () {
        return this.displayCustomSecretField ? this.customSecret : this.selectedSecret
      },
      loginEnabled: function () {
        return this.username && this.password && this.secret
      }
    },
    methods: {
      switchFormType () {
        this.type = (this.type === 'login') ? 'signup' : 'login'
      },

      login () {
        const {username, password, secret} = this
        const options = {username, password, secret}
        const action = this.isLoginForm ? 'login' : 'signup'

        this.$http.post(action, options).then(({body}) => {
          localStorage.setItem('token', body.jwt)
        }).catch(() => {
          alert('something went wrong')
        }).finally(() => {
          console.log('finally')
        })
      }
    },
    created: function () {
      const isLoggedIn = localStorage.getItem('token')
      if (isLoggedIn) {
        this.$router.push('app')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-form {
    min-width: 350px;
    padding: 40px;
    color: white;
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
</style>
