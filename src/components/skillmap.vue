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
        var w = 960,
            h = 500,
            start = Date.now();

        var rings = [
          {radius: 65 * 1, width: 16, speed: -3e-2},
          {radius: 65 * 2, width: 16, speed: -2e-2},
          {radius: 65 * 3, width: 16, speed: -1e-2},
          {radius: 65 * 4, width: 16, speed: 1e-2},
          {radius: 65 * 5, width: 16, speed: 2e-2},
          {radius: 65 * 6, width: 16, speed: 3e-2}
        ];

        var svg = d3.select("#body").append("svg")
            .attr("width", w)
            .attr("height", h)
          .append("g")
            .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")scale(.6)");

        var ring = svg.selectAll("g")
            .data(rings)
          .enter().append("g")
            .attr("class", "ring")
            .each(ringEnter);

        d3.timer(function() {
          var elapsed = Date.now() - start,
              rotate = function(d) { return "rotate(" + d.speed * elapsed + ")"; };

          ring
              .attr("transform", rotate)
            .selectAll("rect")
              .attr("transform", rotate);
        });

        function ringEnter(d, i) {
          var n = Math.floor(2 * Math.PI * d.radius / d.width * Math.SQRT1_2),
              k = 360 / n;

          d3.select(this).selectAll("g")
              .data(d3.range(n).map(function() { return d; }))
            .enter().append("g")
              .attr("class", "square")
              .attr("transform", function(_, i) { return "rotate(" + i * k + ")translate(" + d.radius + ")"; })
            .append("rect")
              .attr("x", -d.width / 2)
              .attr("y", -d.width / 2)
              .attr("width", d.width)
              .attr("height", d.width);
        }
    }
  }
}
</script>

<style>
#body {
  background: #888;
  /* width: 600px;
  height: 500px; */
}

rect {
  fill: none;
  stroke: #000;
  stroke-width: 2.5px;
}

.square:nth-child(2n + 1) rect {
  stroke: #fff;
}

</style>

