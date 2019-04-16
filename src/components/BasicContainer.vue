<template>
  <div id="BasicContainer">
    
  </div>
</template>
<script src='http://d3js.org/d3.v3.min.js'>

</script>

<script>
import * as d3 from 'd3'
export default {
  data () {
    return {

    }
  },
  mounted(){
    this.text()
  },

  watch:{

  },
  methods:{
    text () {
      let dataset = [30,10,43,55,13]
      let pie = d3.layout.pie()
      let piedata = pie(dataset)
      console.log(piedata)
    }
  }
}
</script>

<style>
#rectangle{
  width: 300px;
  float: left;
}
#graph{
  float: left;
  height: 400px;
  width: 400px;
  /* background-color: #fff; */
  margin-left: 200px;
}
#dynamic{
  float: left;
  width: 500px;
  height: 300px;
  /* background-color: #fff; */
  margin-left: 200px;
}
#rectangle span{
  height: 30px;
  line-height: 30px;
}
.axis path,
.axis line{
    fill: none;
    stroke: black;
    shape-rendering: crispEdges;
}

.axis text {
    font-family: sans-serif;
    font-size: 11px;
}
#enter{
  width: 800px;
  height: 300px;
  position: absolute;
  /* background-color: red; */
  top: 550px;
  left: calc((70%-200px)/2);
}
#enter div{
  width: 400px;
  height: 300px;
  /* background-color: blueviolet; */
  float: left;
}
</style>

