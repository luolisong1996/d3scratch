<template>
  <div>
    <div id="Atree" class="svg">
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3'
export default {
  data () {
    return {
      treeData: {
        'name': '中国',
        'children': [
          {
            'name': '浙江',
            'children':
            [
              {'name': '杭州'},
              {'name': '宁波'},
              {'name': '温州'},
              {'name': '绍兴'}
            ]
          },
          {
            'name': '广西',
            'children': [
              {
                'name': '桂林',
                'children':
                [
                  {'name': '秀峰区'},
                  {'name': '叠彩区'},
                  {'name': '象山区'},
                  {'name': '七星区'}
                ]
              },
              {'name': '南宁'},
              {'name': '柳州'},
              {'name': '防城港'}
            ]
          },
          {
            'name': '黑龙江',
            'children': [
              {'name': '哈尔滨'},
              {'name': '齐齐哈尔'},
              {'name': '牡丹江'},
              {'name': '大庆'}
            ]
          },
          {
            'name': '新疆',
            'children':
              [
                {'name': '乌鲁木齐'},
                {'name': '克拉玛依'},
                {'name': '吐鲁番'},
                {'name': '哈密'}
              ]
          }
        ]
      }
    }
  },
  mounted(){
    this.textone()
  },

  watch:{

  },
  methods:{
    textone () {
      // 树状图默认是上往下渲染的，改成从左往右渲染会发现width和height都倒过来了
      let width = 400
      let height = 400
      let _this = this
      let svg = d3.select("#Atree").append("svg").attr("width",width).attr("height",height)

      // 初始化树状图数据获取器
      let tree = d3.tree().size([width,height-80]).separation((a,b)=>{
        return (a.parent === b.parent ? 1:2)/a.depth
      })
      // 初始化json数据转成一棵树
      let hierarchyData = d3.hierarchy(_this.treeData).sum(d=>d.value)
      // 初始化树状图
      let treeData = tree(hierarchyData)
      // 获取节点
      let nodes = treeData.descendants()
      // 获取边，也就是连线
      let links = treeData.links()
      // 绘制线
      let g = svg.append('g').attr('transform','translate(40,0)')
      g.selectAll('.link')
       .data(links)
       .enter().append('path')
       .attr('class','link')
       .style('fill','#ccc')
       .attr('d',d3.linkHorizontal().x(d=>d.y).y(d=>d.x))

      // 绘制文本和节点
      g.selectAll('.node')
       .data(nodes)
       .enter().append('g')
       .attr('class',d=>'node' + (d.children ? ' node--internal' : ' node--leaf'))
       .attr('transform',d=>'translate(' + d.y + ',' + d.x + ')')
      g.selectAll('.node').append('circle')
       .attr('r',5)
       .attr('fill','green')
      g.selectAll('.node').append('text')
       .attr('dy',3)
       .attr('x',d=>d.children ? -8:8)
       .style('text-anchor',d=>d.children ? 'end':'start')
       .text(d=>d.data.name)
       .style('font-size','11px')
    }
  }
}
</script>

<style>
#Atree{
  width: 400px;
  height: 400px;
  float: left;
}

</style>

