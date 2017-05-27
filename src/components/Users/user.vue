<template>

  <div class="user-list-item" v-bind:class="isZombie ? 'danger' : isUnknown ? 'warning' : ''">
    <div class="avatar" v-bind:class="getAvatarClass()"></div>
    <div>
      <span class="username">{{user.username}} <span v-if="user.online" class="online">○</span></span>
      <br>
      <small v-if="isZombie">This user is zombie. Be careful!</small>
      <small v-if="isUnknown">We are not sure that this user is human.</small>
      <small v-if="isHuman"><span class="check-success">✔</span> This contact passed our security check. Is ts safe to communicate with him</small>
    </div>
  </div>

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
