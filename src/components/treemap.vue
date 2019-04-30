
<template>
  <div id='svgContainer' style="">
    <div class="every">
      <h3>矩形树图</h3>
      <div class="svg" id="treemap"></div>
    </div>
  </div>
</template>
<script>
import * as d3 from 'd3'
export default {
  methods: {
     treemap () {
      const width = 400
      const height = 400
      const treeData = {
        'name': '中国',
        'children': [
          {
            'name': '浙江',
            'children':
            [
              {'name': '杭州', 'gdp': 1234},
              {'name': '宁波', 'gdp': 3334},
              {'name': '温州', 'gdp': 2000},
              {'name': '绍兴', 'gdp': 1002}
            ]
          },
          {
            'name': '广西',
            'children': [
              {
                'name': '桂林',
                'children':
                [
                  {'name': '秀峰区', 'gdp': 2131},
                  {'name': '叠彩区', 'gdp': 2015},
                  {'name': '象山区', 'gdp': 988},
                  {'name': '七星区', 'gdp': 756}
                ]
              },
              {'name': '南宁', 'gdp': 3699},
              {'name': '柳州', 'gdp': 4511},
              {'name': '防城港', 'gdp': 2325}
            ]
          },
          {
            'name': '黑龙江',
            'children': [
              {'name': '哈尔滨', 'gdp': 784},
              {'name': '齐齐哈尔', 'gdp': 885},
              {'name': '牡丹江', 'gdp': 1254},
              {'name': '大庆', 'gdp': 3240}
            ]
          },
          {
            'name': '新疆',
            'children':
              [
                {'name': '乌鲁木齐', 'gdp': 2456},
                {'name': '克拉玛依', 'gdp': 1015},
                {'name': '吐鲁番', 'gdp': 998},
                {'name': '哈密', 'gdp': 654}
              ]
          }
        ]
      }
      const color = d3.scaleOrdinal(d3.schemeCategory10)
      // 数据转化
      const treemap = d3.treemap().size([width, height])
      const root = d3.hierarchy(treeData).sum((d) => d.gdp)
      const tree = treemap(root) // 获取treemap结构树
      const leaves = tree.leaves() // 将生成的树形结构转化成叶子节点数组
      // 用叶子节点数组绘图
      const svg = d3.select('#treemap')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
      const g = svg.selectAll('.rects')
        .data(leaves)
        .enter()
        .append('g')
        .attr('class', 'rects')
      // 添加矩阵
      g.append('rect')
        .attr('x', (d) => d.x0)
        .attr('y', (d) => d.y0)
        .attr('width', (d) => (d.x1 - d.x0))
        .attr('height', (d) => (d.y1 - d.y0))
        .style('fill', (d) => color(d.parent.data.name))
        .style('stroke', '#cccccc')
      // 添加描述
      g.append('text')
        .attr('x', (d) => (d.x1 - d.x0) / 2 + d.x0)
        .attr('y', (d) => (d.y1 - d.y0) / 2 + d.y0)
        .attr('dx', (d) => { return -d.data.name.length / 2 + 'em' })
        .attr('dy', (d) => { return '-0.5em' })
        .text((d) => { return d.data.name })
        .attr('font-size', (d) => { return 14 - d.depth + 'px' })
        .attr('fill', '#f0f0f0')
      g.append('text')
        .attr('x', (d) => (d.x1 - d.x0) / 2 + d.x0)
        .attr('y', (d) => (d.y1 - d.y0) / 2 + d.y0)
        .attr('dx', (d) => { return -(d.value.toString().length + 2) / 4 + 'em' })
        .attr('dy', (d) => { return '1em' })
        .text((d) => { return '(' + d.value + ')' })
        .attr('font-size', (d) => { return 14 - d.depth + 'px' })
        .attr('fill', '#ffffff')
    }
  },
  mounted () {
    this.treemap()
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