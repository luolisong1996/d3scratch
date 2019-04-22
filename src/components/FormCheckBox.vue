<template>
  <div id="FormCheckBox">
    <div id="ThePie">
    </div>
    <div id="thepieone">
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
    // this.text()
    this.textone()

  },

  watch:{

  },
  methods:{
    text () {
      // let svg = d3.select("#ThePie").append("svg").attr("width",600).attr("height",600)
      // let width = svg.attr("width")
      // let height = svg.attr("height")

      let color = d3.scaleOrdinal(d3.schemeCategory10)

      let simulation = d3.forceSimulation()
                         .force("link",d3.forceLink().id(d=>d.id))
                         .force("charge",d3.forceManyBody())
                         .force("center",d3.forceCenter(width/2,height/2))
      // 绘制连线和节点
      let link = svg.append("g")
                    .attr("class","links")
                    .selectAll("line")
                    .data(graph.links)
                    .enter().append("line")
                    .attr("stroke-width",d=>Math.sqrt(d.value))
      let node = svg.append("g")
                    .attr("class","nodes")
                    .selectAll("circle")
                    .data(graph.nodes)
                    .enter().append("circle")
                    .attr("r",5)
                    .attr("fill",d=>color(d.group))
                    .call(d3.drag().on("start",dragstarted).on("drag",dragged).on("end",dragended))
      // 调用模拟器
      simulation.nodes(graph.nodes)
                .on("tick",ticked)
                .force("link")
                .links(graph.links)
      // 拖动节点的三个过程
     function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();  //restart是重新恢复模拟
        d.fx = d.x;    //d.x是当前位置，d.fx是固定位置
        d.fy = d.y;
      }

      function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
      }

      function dragended(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;       //解除dragged中固定的坐标
        d.fy = null;
      }
    },
    textone () {
      var nodes = [ { name: "北京"    }, { name: "厦门" },
                    { name: "西安"    }, { name: "杭州"   },
                    { name: "上海"   }, { name: "青岛"    },
                    { name: "满井"    } ];
                    
      var links = [  { source : 0  , target: 1 } , { source : 0  , target: 2 } ,
                      { source : 0  , target: 3 } , { source : 1  , target: 4 } ,
                      { source : 1  , target: 5 } , { source : 1  , target: 6 }  ];   
        
      var width = 800;
      var height = 400;
      var svg = d3.select("#ThePie")
                  .append("svg")
                  .attr("width",width)
                  .attr("height",height);
      console.log(d3.forceManyBody());
      // 通过布局来转换数据，然后进行绘制
      var simulation = d3.forceSimulation(nodes)
            .force("link", d3.forceLink(links).distance(150))//指定连线长度
            .force("charge",d3.forceManyBody())//创建多体力
            .force("center",d3.forceCenter(width/2, height/2));//中心位置

      simulation.nodes(nodes)//设置力模拟的节点
                .on("tick", ticked);

      simulation.force("link")//添加或移除力
            .links(links);//设置连接数组
      var color = d3.scaleOrdinal(d3.schemeCategory10); 
      // 绘制
      var svg_links = svg.selectAll("line")
          .data(links)
          .enter()
          .append("line")
          .style("stroke","#ccc")
          .style("stroke-width",3)
          .call(d3.zoom()//创建缩放行为
              .scaleExtent([-5, 2])//设置缩放范围
          );
    
          var svg_nodes = svg.selectAll("circle")
          .data(nodes)
          .enter()
          .append("circle")
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; })
            .attr("r", '15')
            .attr("fill", function(d,i){
              return color(i);
          }).call(d3.drag().on("start", dragstarted)//d3.drag() 创建一个拖曳行为
                .on("drag", dragged)
                .on("end", dragended));
                console.log(nodes);
            //添加描述节点的文字
            var svg_texts = svg.selectAll("text")
                .data(nodes)
                .enter()
                .append("text")
                .style("fill", "black")
                .attr("dx", 20)
                .attr("dy", 8)
                .text(function(d){
                  return d.name;
                });
          function dragstarted(d) {
            if (!d3.event.active) simulation.alphaTarget(0.3).restart();//设置目标α
            d.fx = d.x;
            d.fy = d.y;
          }

          function dragged(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
          }

          function dragended(d) {
            if (!d3.event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          }
          function ticked() {
            svg_links.attr("x1", function(d) { return d.source.x; })
                .attr("y1", function(d) { return d.source.y; })
                .attr("x2", function(d) { return d.target.x; })
                .attr("y2", function(d) { return d.target.y; });

            svg_nodes.attr("cx", function(d) { return d.x; })
                .attr("cy", function(d) { return d.y; });
              
            svg_texts.attr("x", function(d){ return d.x; })
                .attr("y", function(d){ return d.y; });
          }
    }
  }
}
</script>

<style>
#ThePie{
  width: 800px;
  height: 400px;
  float: left;
}
#thepieone{
  width: 400px;
  height: 400px;
  float: left;
  margin-left: 50px;
  /* background-color: red; */
}
</style>

