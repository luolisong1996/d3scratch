<template>
  <div id="BasicLayout">
    <div id="rectangle">
    </div>
    <div id="graph">
    </div>
    <div id="dynamic">
    </div>
    <div id="enter">
      <div id="enterone">
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div id="entertwo">
        <p></p>
        <p></p>
        <p></p>
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
    this.rectangleecharts()
    this.graphecharts()
    this.dynamicecharts()
    this.entercharts()
  },

  watch:{

  },
  methods:{
    rectangleecharts () {
      // let p = d3.select("div").selectAll('p').text('lls')
      // p.style('color','red')

      // 先将选中的元素赋值给p，然后通过变量p来改变样式，这样可以使代码更简洁
      // 选择集：使用d3.select或d3.selectAll()选择元素后返回的对象，就是选择集
      // d3.select().selectAll().text() 这种不断调用函数的形式称为链式语法

      // d3通过两个函数来绑定数据的：
      // datum（）:绑定一个数组到选择集上
      // data（）：绑定一个数组到选择集上，数组的各项值分别于选择集的各元素绑定
      // let str = 'llsnb'
      // let div = d3.select('div')
      // let p = div.selectAll('p')
      // p.datum(str)
      // p.text(function(d,i){
      //   return '第'+i+'个元素绑定的数据是'+d
      // })

      // 调用data绑定数据，并替换三个段落元素的字符串为被绑定的字符串
      // let database = ['i like dog','i love liling','i like base']
      // let div = d3.select('div')
      // let p = div.selectAll('p')
      // p.data(database)
      //  .text(function(d,i){
      //    return d
      //  })

      // 选择第一个元素
      // let p1 =d3.select('p')
      // p1.style("color","red")

      // 选择所有元素
      // let p2 = d3.selectAll('p')
      // p2.style("color","red")

      // 选择其中一个给id名，选择其中多个给class名
      // let p3 = d3.select("#myid")
      // let p4 = d3.select(".myclass")

      // 插入元素   append（）在元素集末尾插入元素  insert（）在选择集前面插入元素
      // let div = d3.select('div')
      // d3.select('div').append("p").text('append p element')
      // d3.select('#BasicLayout').insert('p').text('insert p')

      // 删除元素 remove（）
      // d3.select('#BasicLayout').remove()

      // svg:指可缩放矢量图形，是用于描述二维矢量图形的一种图形格式，是由万维网联盟制订的开放标准，SVG使用xml格式来定义图形。特点：SVG绘制的是矢量图，因此对图像进行放大不会失真
      // 2.基于xml,可以为每个元素添加JavaScript事件处理器，3.每个图形均视为对象，更改对象的属性，图形也会改变

      let width = 300
      let height = 150
      d3.select("#rectangle").append("span").text("简单图表").attr("width",30)

      let svg = d3.select('#rectangle').append("svg").attr("width",width).attr("height", height)
      let dataset = [250,210,170,130,90]

      let min = d3.min(dataset)
      let max = d3.max(dataset)
      let linear = d3.scaleLinear()             // 设定比例尺的定义域
      .domain([min,max])                        // 设定比例尺的值域
      .range([0,300])

      let axis = d3.axisBottom("bottom")                // D3升级版本后将SVG.axis改成了更加规范的axisBottom() 
      .scale(linear)                            // 指定比例尺
      .ticks(7)                                 // 指定刻度的数量

      let rectHeight = 25
      svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("x",20)
      .attr("y",function(d,i){
        return i*rectHeight;
      })
      .attr("width",function(d){
        return d
      })
      .attr("height",rectHeight-2)
      .attr("fill","steelblue")
      // 这段代码添加了与dataset数组的长度相同数量的矩形，所使用的语句是
      // SVG.selectAll() 选择SVG内的所有矩形
      //    .data(dataset)  绑定数组
      //    .enter()        指定足够数量的矩形元素
      //    .append("rect") 添加足够数量的矩形元素          牢记：有数据，而没有足够图形元素的时候，使用此方法可以添加足够的元素

      // 序数比例尺
      // let index = [0, 1, 2, 3, 4]
      // let color = ["red", "blue", "green", "yellow", "black"]
      // let ordinal = d3.scaleOrdinal().domain(index).range(color)
      // console.log(ordinal(3))

      // 在SVG画布预定义的元素里，有六种基本图形：矩形 圆形 椭圆 线段 折线 多边性  还有一种特殊也是功能最强的元素 路径
      // svg.append("g")
      // .call(axis)                        // call函数调用以后，将当前的选择集作为参数传递给此函数

      svg.append("g")
      .attr("class","axis")
      .attr("transform","translate(20,130)")
      .call(axis);
    },
    graphecharts () {
      d3.select("#graph").append("span").text("完整柱图").attr("width",30)
      const width = 400
      const height = 400
      let svg = d3.select("#graph").append("svg").attr("width",400).attr("height",400)
      let padding = {left:30,right:30,top:30,bottom:30}
      let dataset = [10,20,30,40,50,24,12,5]
      const rectPadding = 4
      let xScale = d3.scaleBand().domain(d3.range(dataset.length)).rangeRound([0, 400 - padding.left - padding.right])   // x轴使用序数比例尺
      let yScale = d3.scaleLinear().domain([0,d3.max(dataset)]).range([400-padding.top-padding.bottom,0])                // y轴使用线性比例尺

      let xAxis = d3.axisBottom(xScale)
      let yAxis = d3.axisLeft(yScale)

      svg.selectAll('rect').data(dataset).enter().append('rect').attr("transform","translate("+padding.left+","+padding.top+")")
      .attr('x',(d,i) => {
        return (xScale.bandwidth()+xScale.paddingInner())*i
      })
      .attr('y',(d,i) => {
        let min = yScale.domain()[0]
        return yScale(min)
      }).transition().delay((d,i)=>{return i*200}).duration(1000).ease(d3.easeCircle)
      .attr('y',(d,i) => {
        return yScale(d)
      })


      .attr('height',(d,i)=>{
        return 400-padding.top - padding.bottom - yScale(d)
      })
      
      .attr('width',xScale.bandwidth() - rectPadding)
      .attr('fill','steelblue')

      // 添加文字元素
      svg.selectAll('text').data(dataset).enter().append('text').attr("transform","translate("+padding.left + ","+ padding.top +")")
      .attr('x',(d,i)=>{
        return (xScale.bandwidth() + xScale.paddingInner()) * i
      })

      .attr('y',(d,i)=>{
        return yScale(d)
      })
      .attr('dx',function(){
        return xScale.bandwidth()/2 - rectPadding
      })
      .attr('dy',20)
      .text((d)=>d)

      svg.append('g').attr("class","axis").attr("transform",`translate(${padding.left},${400 - padding.bottom})`).call(xAxis)

      svg.append('g').attr("class","axis").attr("transform",`translate(${padding.left},${400 - padding.bottom})`).call(yAxis)
      svg.selectAll('rect').on("mouseover",function(d,i){
        d3.select(this).transition().duration(100).attr("fill","yellow")
      }).on("mouseout",function(d,i){
        d3.select(this)
        .transition()                                     // 启动过渡
        .duration(500)                                    // 指定过渡的时间
        .attr("fill","steelblue")
      })
    },
    dynamicecharts () {
      // 实现动态的四个方法 transition()启动过渡效果 duration()指定过渡的持续时间 
      // ease()指定过渡的方式，linear：普通的线性变化  circle：慢慢的到达变换的最终状态  elastic：带有弹跳的到达最终状态 bounce：在最终状态出弹跳几次
      // dalay()指定延迟时间
      let svg = d3.select("#dynamic").append("svg").attr("width",500).attr("height",300)
      let circle = svg.append('circle').attr('cx',0).attr('cy',100).attr('r',45).style('fill',"green")
      circle.transition().duration(1000).attr("cx",400).style("fill","steelblue")
      
      let circle1 = svg.append('circle').attr('cx',0).attr('cy',200).attr('r',45).style('fill','steeblue')
      circle1.transition().duration(1000).ease(d3.easeBounce).attr('cx',300).style('fill','green').attr('r',25)
    },
    entercharts () {
      let dataset = [3,6,7,12,15]
      let p =d3.select("#enterone").selectAll('p')
      let update = p.data(dataset)
      let enter = update.enter()
      update.text(function(d){
        return "update" + d
      })
      enter.append("p")
           .text(function(d){
             return "enter" + d
           })
      // update部分的处理办法一般是：更新属性值
      // enter部分的处理办法一般是：添加元素后赋予属性值

      let datasetone = [3]
      let p1 =d3.select("#entertwo").selectAll('p')
      let updateone = p1.data(datasetone)
      let exit = updateone.exit()
      updateone.text(function(d){
        return "update" + d
      })
      exit.append("p")
           .text(function(d){
             return "exit"
           })
      // exit.move() exit部分的处理通常是删除元素
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

