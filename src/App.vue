<template>
  <div id="init">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px" id="aside">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            unique-opened
            router
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu v-for="item in menu" :index="item.id" :key='item.id'>
              <template slot="title">
                <i :class='item.i'></i>
                <span>{{item.name}}</span>
              </template>
              <el-menu-item-group v-for="sub in item.sub" :key='sub.componentName'>
                <el-menu-item :index="sub.componentName">{{sub.name}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>

  
</template>

<script>
  import menu from '@/config/menu-config'

  export default {
    data(){
      return {
        menu: menu,
        clientHeight:''
      }
    },
    mounted(){
      // 获取浏览器可视化区域高度
      this.clientHeight = `${document.documentElement.clientHeight}`
      window.onresize = function temp() {
        this.clientHeight = `${document.documentElement.clientHeight}`;
      }
    },
    watch:{
      // 如果clientHeight发生改变，这个函数就会运行
      clientHeight: function () {
        this.changeFixed(this.clientHeight)
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      changeFixed(clientHeight){                        //动态修改样式
        // this.$refs.homePage.style.height = clientHeight+'px';
        document.getElementById('aside').style.height = clientHeight - 60 +'px'
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
#init{
  /* background: #545c64 */
}
.el-header, .el-footer {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color:#545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /* line-height: 160px; */
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
