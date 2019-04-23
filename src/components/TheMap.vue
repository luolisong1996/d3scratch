<template>
  <div>
    <div style="width:100% ">
      <div class="box">
      <div class="content">少量文字</div>
    </div>
    <div class="box">
      <div class="content">许多文字许多文字许多文字许多文字</div>
    </div>
    </div>

    <div class="f_box">
      <span class="box_a">我是A元素</span>
      <span class="box_b">我是B元素我是B元素</span>
    </div>

    <div class="father">
      <div class="son">1</div>
      <div class="son">2</div>
      <div class="son">3</div>
      <div class="son">4</div>
      <div class="son">5</div>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3'
export default {
  data () {
    return {
     
    }
  },
  mounted(){
    this.textone()
  },

  watch:{

  },
  methods:{
    textone () {
        
    }
  }
}
</script>

<style>
.box{
	width: 200px;
	text-align: center;
	background: green;
}
.box>.content{ 
	margin:20px 0;
	display: inline-block;
	text-align: left;
	background: red;
}
.f_box{
	display: inline-block;
	height: 100px;
	background: blue;
	white-space: nowrap;
}	
.box_a{
	width:50%;
	background: red;
	display: inline-block;
}
.box_b{
	width:50%;
	background: green;
	display: inline-block;
}
.box_b{
    /* min-height:0px; */
    transtion:min-height .36s;
}
.box_b:hover{
    min-height:300px;
}

.father{
  max-height: 20px;
  overflow: hidden;
  transition: 0.5s linear;
  /*background: green;*/
}
.father:hover{
  max-height: 200px;
  /*background: red;*/
}
.son{
  height: 20px
}

</style>

