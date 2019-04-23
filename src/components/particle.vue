<template>
  <div id="body">
    
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
        var width = Math.max(500, innerWidth),
            height = Math.max(300, innerHeight);

        var i = 0;

        var svg = d3.select("#body").append("svg")
            .attr("width", width)
            .attr("height", height);

        svg.append("rect")
            .attr("width", width)
            .attr("height", height)
            .on("ontouchstart" in document ? "touchmove" : "mousemove", particle);

        function particle() {
          var m = d3.mouse(this);

          svg.insert("circle", "rect")
              .attr("cx", m[0])
              .attr("cy", m[1])
              .attr("r", 1e-6)
              .style("stroke", d3.hsl((i = (i + 1) % 360), 1, .5))
              .style("stroke-opacity", 1)
            .transition()
              .duration(2000)
              .ease(Math.sqrt)
              .attr("r", 100)
              .style("stroke-opacity", 1e-6)
              .remove();

          d3.event.preventDefault();
        }

    }
  }
}
</script>

<style>
#body {
  margin: 0;
  background: #222;
  min-width: 500px;
  overflow: hidden;
  height: 600px;
}

rect {
  fill: none;
  pointer-events: all;
}

circle {
  fill: none;
  stroke-width: 2.5px;
}

</style>

