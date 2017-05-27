<template>
  <div class="avatar" v-bind:class="getAvatarClass()"></div>
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

  function hash (username) {
    return username.charCodeAt(0) + username.length + username.charCodeAt(1)
  }

  export default {
    name: 'user-avatar',
    props: ['user'],
    methods: {
      getAvatarClass: function () {
        switch (this.user.userType) {
          case 'zombie':
            return zombieAvatars[hash(this.user.username) % zombieAvatars.length]
          case 'human':
            return humanAvatars[hash(this.user.username) % humanAvatars.length]
          default:
            return unknownAvatar
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .avatar {
    display: block;
    min-width: 32px;
    min-height: 32px;
    margin-right: 10px;

    background-image: url('../../assets/unknown-avatar.png');
    background-size: 32px 32px;
    background-repeat: no-repeat;
    background-position: center center;

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

</style>
