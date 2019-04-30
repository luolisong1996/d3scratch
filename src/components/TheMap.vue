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


    <div style="margin-top:20px;width:305px;height:120px">
        <div class="box-right-same">
            <div class="full">
                <p>DOM文档流中，图片定宽在右侧，视觉呈现也在右侧，顺便表现此时一致。</p>
            </div>
            <img src="1.jpg" class="img">
        </div>
    </div>

    <div class="fatherone">
      <div class="sonone">

      </div>
    </div>

    <!-- <div class="fathertwo">
      <div class="sontwo">

      </div>
    </div> -->
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
  .fatherone{
		width: 300px;
		height: 200px;
		background: red;
	}
	.sonone{
		margin: 0 -100px;
		height: 100px;
		background: yellow;
	}
  .fathertwo{
    background: green;
    height: 200px;

    overflow: hidden;
    width: 200px;
  }
  .sontwo{
    margin-top: 100px;
    width: 100px;
    height: 100px;
    background: red;
  }

.box-right-same{
  width: 305px;
}
.box-right-same > .full {
    width: 100%;
    float: left;
}
.box-right-same > .full > p {
    margin-right: 140px;
}
.box-right-same > img {
    float: left;
    margin-left: -128px;
    width: 128px;
    height: 90px;
}

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

