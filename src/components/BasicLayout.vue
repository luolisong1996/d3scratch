<template>
  <div id="BasicLayout">
    <!-- <p>hello world</p>
    <p>hello world</p>
    <p>hello world</p> -->
    <div id="rectangle">
      <!-- <svg>
        <rect></rect>
        <rect></rect>
      </svg> -->
    </div>
    <!-- <div><span>lls</span></div> -->
    <div></div>
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
    let height = 120
    d3.select("#rectangle").append("span").text("简单图表").attr("width",30)
    // 序数比例尺

    let svg = d3.select('#rectangle').append("svg").attr("width",width).attr("height", height)
    let dataset = [250,210,170,130,90]

    let min = d3.min(dataset)
    let max = d3.max(dataset)
    let linear = d3.scaleLinear()             // 设定比例尺的定义域
    .domain([min,max])                         // 设定比例尺的值域
    .range([0,300])

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

    let index = [0, 1, 2, 3, 4]
    let color = ["red", "blue", "green", "yellow", "black"]
    let ordinal = d3.scaleOrdinal().domain(index).range(color)
    console.log(ordinal(3))

    // 在SVG画布预定义的元素里，有六种基本图形：矩形 圆形 椭圆 线段 折线 多边性  还有一种特殊也是功能最强的元素 路径
  },

  watch:{

  },
  methods:{

  }
}
</script>

<style>
#rectangle{
  width: 300px;
  float: left;
}
#rectangle span{
  height: 30px;
  line-height: 30px;
}
</style>

