<template>

  <b-card class="mb-2" :variant="isZombie ? 'danger' : ''">
    <div class="user-list-item">
      <div class="avatar" v-bind:class="getAvatarClass()"></div>
      <div>
        <h4>{{user.username}}</h4>
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

</style>
