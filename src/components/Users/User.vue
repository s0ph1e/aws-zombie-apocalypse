<template>

  <div class="user-list-item" v-bind:class="isZombie ? 'danger' : isUnknown ? 'warning' : ''">
    <UserAvatar v-bind:user="user" />
    <div class="main-block" @click="openConversation">
      <span class="username">{{user.username}} <span v-if="user.online" class="online">○</span></span>
      <br>
      <small v-if="isZombie">This user is zombie. Be careful!</small>
      <small v-if="isUnknown">We are not sure that this user is human.</small>
      <small v-if="isHuman" class="text-muted"><span class="check-success">✔</span> This contact passed our security check. Is is safe to communicate with him</small>
    </div>
    <span v-if="user.distance < Infinity" class="has-location" @click="openMap">
      {{Math.ceil(user.distance)}}km
    </span>
  </div>

</template>

<script>
  import UserAvatar from './UserAvatar.vue'

  export default {
    name: 'user',
    props: ['user'],
    computed: {
      isZombie: function () {
        return this.user.userType === 'zombie'
      },
      isHuman: function () {
        return this.user.userType === 'human'
      },
      isUnknown: function () {
        return !this.isHuman && !this.isZombie
      }
    },
    methods: {
      openConversation: function () {
        if (this.isZombie) {
          alert('Be careful, don\'t speak with zombies!')
        } else if (this.isUnknown) {
          if (confirm('We can\'t guarantee he is human, be careful')) {
            this.$router.push(`/app/chat-with/${this.user.id}`)
          }
        } else {
          this.$router.push(`/app/chat-with/${this.user.id}`)
        }
      },
      openMap: function () {
        this.$router.push('/app/map')
      }
    },
    components: { UserAvatar }
  }
</script>

<style lang="scss" scoped>

  .user-list-item {
    cursor: pointer;
    border: 1px solid #ccc;

    margin-bottom: 5px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;

    &.danger {
      color: rgba(255, 255, 255, 0.7);
      background: lighten(#d9534f, 4%);
    }
    &.warning {
      color: rgba(255, 255, 255, 0.7);
      background: lighten(#f0ad4e, 4%);
    }

    .status {
      font-size: 70%;
    }

    .online {
      font-size: 8px;
      vertical-align: middle;
      color: forestgreen;
      animation: blinking 2s ease-in-out 0s infinite;
    }

    .username {
      margin: 0;
      font-size: 120%;
      font-weight: bold;
    }
    .check-success {
      color: forestgreen;
    }
    .has-location {
      display: block;
      min-width: 20px;
      min-height: 20px;
      background-image: url('../../assets/map.png');
      background-size: 20px 20px;
      background-repeat: no-repeat;
      background-position: top center;
      opacity: 0.5;
      font-size: 70%;
      padding-top: 23px;
    }
    .main-block {
      flex-grow: 1;
    }
  }

  .avatar {
    display: block;
    min-width: 32px;
    min-height: 32px;
    margin-right: 10px;

    background-image: url('../../assets/unknown-avatar.png');
    background-size: 32px 32px;

    &.zombie-avatar-1 {
      background-image: url('../../assets/zombie-avatar-1.png');
    }
    &.zombie-avatar-2 {
      background-image: url('../../assets/zombie-avatar-2.png');
    }
    &.zombie-avatar-3 {
      background-image: url('../../assets/zombie-avatar-3.png');
    }
    &.human-avatar-1 {
      background-image: url('../../assets/human-avatar-1.png');
    }
    &.human-avatar-2{
      background-image: url('../../assets/human-avatar-2.png');
    }
    &.human-avatar-3 {
      background-image: url('../../assets/human-avatar-3.png');
    }
    &.human-avatar-4 {
      background-image: url('../../assets/human-avatar-4.png');
    }
  }


  @keyframes blinking {
    0% {
      opacity: 0
    }
    50% {
      opacity: 1
    }
    100% {
      opacity: 0
    }
  }

</style>
