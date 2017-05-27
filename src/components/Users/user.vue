<template>

  <b-card class="mb-2" :variant="isZombie ? 'danger' : isUnknown ? 'warning' : ''">
    <div class="user-list-item">
      <div class="avatar" v-bind:class="getAvatarClass()"></div>
      <div>
        <p class="username">{{user.username}} <span v-if="user.online" class="online">○</span></p>
        <small v-if="isZombie">This user is zombie. Be careful!</small>
        <small v-if="isUnknown">We are not sure that this user is human.</small>
        <small v-if="isHuman"><span class="check-success">✔</span> This contact passed our security check. Is ts safe to communicate with him</small>
      </div>
    </div>
  </b-card>

</template>

<script>
  const zombieAvatars = [
    'zombie-avatar-1',
    'zombie-avatar-2',
    'zombie-avatar-3'
  ]

  const humanAvatars = [
    'human-avatar-1',
    'human-avatar-2',
    'human-avatar-3',
    'human-avatar-4'
  ]

  const unknownAvatar = '../../assets/unknown-avatar.png'

  function randomArrayElement (arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  export default {
    name: 'user',
    props: ['user'],
    computed: {
      isZombie: function () {
        return this.user.type === 'zombie'
      },
      isHuman: function () {
        return this.user.type === 'human'
      },
      isUnknown: function () {
        return !this.isHuman && !this.isZombie;
      }
    },
    methods: {
      getAvatarClass: function () {
        switch (this.user.type) {
          case 'zombie':
            return randomArrayElement(zombieAvatars)
          case 'human':
            return randomArrayElement(humanAvatars)
          default:
            return unknownAvatar
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

  .user-list-item {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .avatar {
    display: block;
    width: 32px;
    height: 32px;
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

  .online {
    font-size: 8px;
    vertical-align: middle;
    color: forestgreen;
    animation: blinking 2s ease-in-out 0s infinite;
  }

  .username {
    margin: 0;
    font-size: 26px;
    font-weight: bold;
  }
  .check-success {
    color: forestgreen;
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
