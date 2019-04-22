<template>
  <div id="BasicContainer">
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
    this.text()
    this.textone()

  },

  watch:{

  },
  methods:{
    text () {
      let marge = {top:10,bottom:30,left:10,right:60}
    	let svg = d3.select('#ThePie').append("svg").attr("width",400).attr("height", 400)
    	let width = svg.attr("width")
    	let height = svg.attr("height")
    	let g = svg.append("g")
    		.attr("transform","translate("+marge.top+","+marge.left+")");
    		
      let dataset = [ 30 , 10 , 43 , 55 , 13 ]

      //设置一个color的颜色比例尺，为了让不同的扇形呈现不同的颜色
    	let colorScale = d3.scaleOrdinal()
    		.domain(d3.range(dataset.length))
        .range(d3.schemeCategory10);
      //新建一个饼状图
      let pie = d3.pie();
      
      //新建一个弧形生成器
    	let innerRadius = 0;//内半径
    	let outerRadius = 100;//外半径
    	let arc_generator = d3.arc()
    		.innerRadius(30)
        .outerRadius(100);
        
      //将原始数据变成可以绘制饼状图的数据，
    	let pieData = pie(dataset);
    	
    	//在浏览器的控制台打印pieData
      console.log(pieData);
      let gs = g.selectAll(".g")
    		.data(pieData)
    		.enter()
    		.append("g")
        .attr("transform","translate("+width/2+","+height/2+")")//位置信息
        
      //绘制饼状图的各个扇形
    	gs.append("path")
    		.attr("d",(d)=>{
    			return arc_generator(d);//往弧形生成器中出入数据
    		})
    		.attr("fill",(d,i)=>{
    			return colorScale(i);//设置颜色
        });
        
      //绘制饼状图上面的文字信息
    	gs.append("text")
    		.attr("transform",(d)=>{//位置设在中心处
    			return "translate("+arc_generator.centroid(d)+")";
    		})
    		.attr("text-anchor","middle")
    		.text((d)=>{
    			return d.data;
    		})
    },
    textone () {
      let svg = d3.select("#thepieone").append("svg").attr("width",400).attr("height",400)
      let width = svg.attr("width")
      let height = svg.attr("height")
      let g = svg.append("g").attr("transform","translate("+10+","+10+")")
      let dataset = [30,10,43,55,13]
      let colorScale = d3.scaleOrdinal().domain(d3.range(dataset.length)).range(d3.schemeCategory10)
      let pie = d3.pie()
      let arc_generator = d3.arc().innerRadius(30).outerRadius(100)
      let pieData = pie(dataset)
      let gs = g.selectAll("g").data(pieData).enter().append("g").attr("transform","translate("+width/2+","+height/2+")")
      gs.append("path")
        // .transition().delay((d,i)=>{return i*200}).duration(1000).ease(d3.easeCircle)
        .attr("d",(d)=>{
          return arc_generator(d)
        })
        .attr("fill",(d,i)=>{
          return colorScale(i)
        })

      gs.append("line")
        .attr("stroke", "black")
        .attr("x1", d=> arc_generator.centroid(d)[0] * 1.5)
        .attr("y1", d=> arc_generator.centroid(d)[1] * 1.5)
        .attr("x2", d=> arc_generator.centroid(d)[0] * 2)
        .attr("y2", d=> arc_generator.centroid(d)[1] * 2)
      
      gs.append("text")
        .attr("transform",d=>{
          let x = arc_generator.centroid(d)[0] * 2; //文字的x坐标
          let y = arc_generator.centroid(d)[1] * 2; //文字的y坐标
          return `translate(${x},${y})`
        })
        .attr("fill", "black")
        .attr("text-anchor", "middle")
        .text(d=>d.data)
      
      // let tooltip = d3.select('#thepieone').append('div').style('left', 200)
			// 	.style('top',200).style('opacity', 1.0)
      gs.on('mouseover', function() {
          let label = ''
          d3.select(this).select('path').transition().attr('transform', (d)=> {
            let x = arc_generator.centroid(d)[0] * 0.1; //文字的x坐标
            let y = arc_generator.centroid(d)[1] * 0.1; //文字的y坐标
            label = d.data
            // tooltip.html(label).transition().duration(500)
            return `translate(${x},${y})` 
          });
       }
      ).on('mouseout', function() {
        d3.select(this).select('path').transition().attr('transform', (d)=> {
          return `translate(0,0)` 
        });
       }
      )
    }
  }
}
</script>

<style>
#ThePie{
  width: 400px;
  height: 400px;
  float: left;
  /* background-color: red; */
}
#thepieone{
  width: 400px;
  height: 400px;
  float: left;
  margin-left: 50px;
  /* background-color: red; */
}
</style>

