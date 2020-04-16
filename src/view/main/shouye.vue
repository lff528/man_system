<template>
  <div class="shouye">
    <div class="wrap">
        <!-- <div style=" width: 92%;height: 260px;" ref="eacharts"></div> -->
        <div id="map" style="width:200px;height:200px;"></div>
    </div>
  </div>
</template>

<script>
import  {echartsPolygonal}  from "@/assets/js/chartBar.js";
export default {
  name: 'login',
  data () {
    return {
      
    }
  },
  methods:{
   
  },
  mounted(){
var map = new BMap.Map("map");    // 创建Map实例
            map.centerAndZoom(new BMap.Point(121.551257,38.890002), 11);  // 初始化地图,设置中心点坐标和地图级别
            //添加地图类型控件
            map.addControl(new BMap.MapTypeControl({
                mapTypes:[
                    BMAP_NORMAL_MAP,
                    BMAP_HYBRID_MAP
                ]}));
            map.setCurrentCity("大连");          // 设置地图显示的城市 此项是必须设置的
            map.enableScrollWheelZoom(true);     //开启
    
    // let obj = {
    //   dataX: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    //   dataY:''
    // };
    // let dataY = [
    //     {
    //         name: '邮件营销',
    //         type: 'line',
    //         stack: '总量',
    //         smooth: false,
    //         data: [120, 132, 101, 134, 90, 230, 210]
    //     },
    //     {
    //         name: '联盟广告',
    //         type: 'line',
    //         stack: '总量',
    //          smooth: true,
    //         data: [220, 182, 191, 234, 290, 330, 310]
    //     },
    //     {
    //         name: '视频广告',
    //         type: 'line',
    //         stack: '总量',
    //          smooth: true,
    //         data: [150, 232, 201, 154, 190, 330, 410]
    //     },
    //     {
    //         name: '直接访问',
    //         type: 'line',
    //         stack: '总量',
    //          smooth: true,
    //         data: [320, 332, 301, 334, 390, 330, 320]
    //     },
    //     {
    //         name: '搜索引擎',
    //         type: 'line',
    //         stack: '总量',
    //          smooth: true,
    //         data: [820, 932, 901, 934, 1290, 1330, 1320]
    //     }
    // ]
    // obj.dataY = dataY
    // let dom = this.$refs.eacharts;
    // let eachats = this.$echarts.init(dom);
    // let setOpt = echartsPolygonal(obj)
    // eachats.setOption(setOpt)
  }
}
</script>


<style scoped>
.map{
  height: 500px;
  width: 100%;
}
</style>
