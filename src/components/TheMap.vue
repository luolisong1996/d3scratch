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

</style>

