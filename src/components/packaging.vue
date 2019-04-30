<template>
  <div id='svgContainer' style="">
    <div class="every">
      <h3>打包图</h3>
      <div class="svg" id="pack"></div>
    </div>
  </div>
</template>
<script>
import * as d3 from 'd3'
export default {
  methods: {
    pack () {
      let width = 400
      let height = 400
      let data = {
        'name': '中国',
        'value': '800',
        'children': [
          {
            'name': '浙江',
            'value': '450',
            'children':
            [
              {'name': '杭州', 'value': '40'},
              {'name': '宁波', 'value': '30'},
              {'name': '温州', 'value': '20'},
              {'name': '绍兴', 'value': '20'}
            ]
          },
          {
            'name': '广西',
            'value': '200',
            'children': [
              {
                'name': '桂林',
                'value': '100',
                'children':
                [
                  {'name': '秀峰区', 'value': '10'},
                  {'name': '叠彩区', 'value': '30'},
                  {'name': '象山区', 'value': '20'},
                  {'name': '七星区', 'value': '10'}
                ]
              },
              {'name': '南宁', 'value': '30'},
              {'name': '柳州', 'value': '10'},
              {'name': '防城港', 'value': '10'}
            ]
          },
          {
            'name': '黑龙江',
            'value': '200',
            'children': [
              {'name': '哈尔滨', 'value': '50'},
              {'name': '齐齐哈尔', 'value': '40'},
              {'name': '牡丹江', 'value': '10'},
              {'name': '大庆', 'value': '30'}
            ]
          },
          {
            'name': '新疆',
            'value': '100',
            'children':
              [
                {'name': '乌鲁木齐', 'value': '40'},
                {'name': '克拉玛依', 'value': '20'},
                {'name': '吐鲁番', 'value': '10'},
                {'name': '哈密', 'value': '10'}
              ]
          }
        ]
      }
      var color = d3.scaleSequential(d3.interpolateMagma)
        .domain([-4, 4])
      let svg = d3.select('#pack')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
      var pack = d3.pack()
        .size([width - 4, height - 4])
        .padding(4)
      var root = d3.hierarchy(data)
        .sum(function (d) { return d.value })
        .sort(function (a, b) { return b.value - a.value })
      let nodes = pack(root).descendants()
      // 画圆
      svg.selectAll('circle')
        .data(nodes)
        .enter()
        .append('circle')
        .style('fill', function (d) { return color(d.depth) })
        .attr('cx', function (d) { return d.x })
        .attr('cy', function (d) { return d.y })
        .attr('r', function (d) { return d.r })
        .on('mouseover', function (d) {
          d3.event.target.style.stroke = 'yellow'
          d3.event.target.style.strokeWidth = '2px'
          svg.append('text')
            .style('fill', 'black')
            .style('opacity', '0.5')
            .attr('class', 'hello')
            .attr('x', d3.event.offsetX + 20)
            .attr('y', d3.event.offsetY - 10)
            .text(d.data.name)
        })
        .on('mouseout', function (d) {
          svg.selectAll('.hello').remove()
          d3.event.target.style.strokeWidth = '0px'
        })
      // 文字
      svg.selectAll('text')
        .data(nodes)
        .enter()
        .append('text')
        .style('fill', 'black')
        .style('fill-opacity', function (d) { return d.children ? 0 : 1 }) // 设置包含子节点的文字不显示
        .attr('x', function (d) { return d.x })
        .attr('y', function (d) { return d.y })
        .attr('dy', '.3em')
        .attr('dx', function (d) { return '-' + d.data.name.length / 2 + 'em' }) // 设置文字居中，通过dx 负文字个数的二分之一
        .text(function (d) { return d.data.name })
        .style('font-size', function (d) { return 12 - d.depth + 'px' })
    }
  },
  mounted () {
    this.pack()
  }
}
</script>
<style>
#svgContainer{
  width: 100%;
  height: 100%;
}
.every{
    width: 400px;
    height: 425px;
    margin:15px;
    float: left;
}
h3{
  margin:0;
}
.svg{
  width: 400px;
  height: 400px;
}
 .button{
    float: right;
    margin-right: 20px;
    font-size: 14px;
    cursor: pointer;
    padding: 2px 8px;
    border:1px solid #ccc;
    background: yellowgreen;
    border-radius: 4px;
}
 .button:hover{
    background: violet;
  }

</style>
