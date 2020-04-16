<template>
  <div class="xiaofangshuan">
      <el-row class="wrap">
        <el-col :span="4" class="wrap_left">
            <div class="chart_box box">
              <p></p>
              <div></div>
            </div>
        </el-col>
        <el-col :span="4" class="wrap_center">
          <div class="box">
            <p>光字牌</p>
            <ul>
              <li>管网压力异常</li>
              <li>消防水池水位异常</li>
            </ul>
          </div>
        </el-col>
        <el-col :span="16" class="wrap_right">
          <el-table
              :data="elList"
              :span-method="arraySpanMethod" 
              border 
              style="width: 1000px">
              <el-table-column prop="line"  label="线路"  width="180">
                  <template slot-scope="scope">
                    <span >{{ scope.row.line || scope.row.total }}</span>
                  </template>
              </el-table-column>
              <el-table-column  prop="station"  label="站点"> </el-table-column>
              <el-table-column  prop="count"  sortable  label="投入车辆"></el-table-column>
              <el-table-column  prop="yunci"  sortable  label="运次"></el-table-column>
              <el-table-column  prop="upscan"  sortable  label="上车扫码人数"></el-table-column>
              <el-table-column  prop="downscan"  sortable  label="下车扫码人数"></el-table-column>
              <el-table-column  prop="money" sortable  label="金额"></el-table-column>
          </el-table>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'xiaofangshuan',
  data () {
    return {
      indexArr: [],
      spanArr: [],
      pos: 0,
      elList: [
      	{
			line: '线路一（去城区）',
			station: '首都机场t1',
			count: 60,
			yunci: 55,
			upscan:2222,
			downscan: 1333,
			money: 100
		},
		{
			line: '线路一（去城区）',
			station: '首都机场t2',
			count: 60,
			yunci: 55,
			upscan:22322,
			downscan: 333,
			money: 100
		},
		{
			line: '线路一（去城区）',
			station: '首都机场t3',
			count: 60,
			yunci: 55,
			upscan:3422,
			downscan: 3133,
			money: 1300
		},
		{
			line: '线路一（去城区）',
			station: 'A',
			count: 60,
			yunci: 55,
			upscan:21242,
			downscan: 33413,
			money: 1040
		},
		{
			line: '线路一（去城区）',
			station: 'A',
			count: 60,
			yunci: 55,
			upscan:21242,
			downscan: 33413,
			money: 1040
		},
		{
			line: '线路一（去城区）',
			station: 'B',
			count: 60,
			yunci: 55,
			upscan:12322,
			downscan: 3333,
			money: 1100
		},
		{ 
			total: '总计',
			totalupscan:12322,
			totaldownscan: 3333,
			totalmoney: 1100
		},
        {
			line: '线路二（去城区）',
			station: '首都机场t1',
			count: 60,
			yunci: 55,
			upscan:2222,
			downscan: 1333,
			money: 100
		},
		{
			line: '线路二（去城区）',
			station: '首都机场t2',
			count: 60,
			yunci: 55,
			upscan:22322,
			downscan: 333,
			money: 100
		},
		{
			line: '线路二（去城区）',
			station: '首都机场t3',
			count: 60,
			yunci: 55,
			upscan:3422,
			downscan: 3133,
			money: 1300
		},
		{
			line: '线路二（去城区）',
			station: 'A',
			count: 60,
			yunci: 55,
			upscan:21242,
			downscan: 33413,
			money: 1040
		},
		{
			line: '线路二（去城区）',
			station: 'A',
			count: 60,
			yunci: 55,
			upscan:21242,
			downscan: 33413,
			money: 1040
        },
		{
			line: '线路二（去城区）',
			station: 'B',
			count: 60,
			yunci: 55,
			upscan:12322,
			downscan: 3333,
			money: 1100
        },
        { 
			total: '总计',
		    totalupscan:12322,
			totaldownscan: 3333,
			totalmoney: 1100
		}],

    }
  },
  methods:{
     getSpanArr(data) {
      for (var i = 0; i < data.length; i++) {
        if (i === 0) {
          this.spanArr.push(1);
          this.pos = 0;
        } else {
          // 判断当前元素与上一个元素是否相同（line为标记）
          if (data[i].line === data[i - 1].line) {
            this.spanArr[this.pos] += 1;
            this.spanArr.push(0);
          } else {
            this.spanArr.push(1);
            this.pos = i;
          }
        }
      }
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
       //处理行的合并
      if (this.indexArr.includes(rowIndex)) {
        if (columnIndex === 0) {
          return {
            rowspan: 1,
            colspan: 4
          };
        } else if (columnIndex === 1 || columnIndex === 2 || columnIndex == 3) {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
      //处理列的合并
      if (columnIndex === 0 || columnIndex === 2 || columnIndex === 3) {
        const _row = this.spanArr[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col
        };
      }
    },
  },
  
  mounted(){
     this.getSpanArr(this.elList);
    this.elList.map((v, i, s) => {
      if (v.total === "总计") {
        this.indexArr.push(i);
      }
    });

  }
}
</script>

<style lang="less">
.xiaofangshuan{
  //  height: 100%;
     background: #28468a;
    .wrap{
      height: 60%;
      padding: 15px;
      .wrap_left{
        height: 100%;
        // padding: 15px;
        padding-right: 15px;
      }
      .wrap_left>.box{
        height: 400px;
      // background: #ccc;
      }
      .wrap_center{
        border: 1px solid #aaa;
        height: 100%;
        .box{
          height:50%;
          p{
              text-align: center;
              height: 30px;
              line-height: 30px;
              background: #169BD4;
            }
            ul{
              padding: 10px;
            }
            ul>li{
              width: 100%;
              border: 1px solid #aaa;
              border-radius: 3px;
              margin: 10px 0;
              line-height: 20px;
              text-align: center;
            }
        }
      }
      .wrap_right{
        height: 100%;
        padding-left: 15px;
        
      }
      
    }
}
</style>
