<style lang='scss'>
@import './common/myStyle/mixin.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .module-list {
    display: flex;
    width: 100%;
    height: 40px;

    @include border-1px(rgba(7, 17, 27, 0.1));

    .module-item {
      flex-grow: 1;
      line-height: 40px;
      text-align: center;

      a {
        font-size: 14px;
        color: rgb(77, 85, 93);
        text-decoration: none;
      }

      .router-link-active {
        color: rgb(240, 20, 20);
      }
    }
  }
}
</style>
<template>
  <div id="app">
    <header-component></header-component>
    <div class="module-list border-1px">
      <div class="module-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="module-item">
        <router-link to="/assess">评价</router-link>
      </div>
      <div class="module-item">
        <router-link to="/store">商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
  import Header from './view/components/common/header.vue';
  export default {
    name: 'app',
    components: {
      headerComponent: Header
    }
  };
</script>

