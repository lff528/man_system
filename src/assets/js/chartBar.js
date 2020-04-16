import echarts from 'echarts'

//饼状图  数据格式
// let obj = {
//     data:[{value:335, name:'直接访问'},
//         {value:310, name:'邮件营销'},
//         {value:274, name:'联盟广告'},
//         {value:235, name:'视频广告'},
//         {value:400, name:'搜索引擎'}]
//   };
export const setEachart = function(params = {}) {
    let opt = {
        backgroundColor: '#000',
        "animation": true,
        "title": {
            "text": 24,
            "subtext": "沥青工",
            "x": "center",
            "y": "center",
            "textStyle": {
                "color": "#fff",
                "fontSize": 20,
                "fontWeight": "normal",
                "align": "center",
                "width": "200px"
            },
            "subtextStyle": {
                "color": "#fff",
                "fontSize": 20,
                "fontWeight": "normal",
                "align": "center"
            }
        },
        "legend": {
            "width": "70%",
            "left": "center",
            "textStyle": {
                "color": "#fff",
                "fontSize": 16
            },
            "icon": "circle",
            "right": "0",
            "bottom": "0",
            "padding": [10, 10],
            "itemGap": 20
        },
        "series": [{
            "type": "pie",
            "center": ["50%", "50%"],
            "radius": ["30%", "43%"],
            "color": ["#FEE449", "#00FFFF", "#00FFA8", "#9F17FF", "#FFE400", "#F76F01", "#01A4F7", "#FE2C8A"],
            "startAngle": 135,
            "labelLine": {
                "normal": {
                    "length": 10
                }
            },
            "label": {
                "normal": {
                    "formatter": "{b|{b}:}  {per|{d}%} ",
                    "backgroundColor": "rgba(255, 147, 38, 0)",
                    "borderColor": "transparent",
                    "borderRadius": 4,
                    "rich": {
                        "a": {
                            "color": "#999",
                            "lineHeight": 12,
                            "align": "center"
                        },
                        "hr": {
                            "borderColor": "#aaa",
                            "width": "100%",
                            "borderWidth": 1,
                            "height": 0
                        },
                        "b": {
                            "color": "#b3e5ff",
                            "fontSize": 12, //提示的字体大小
                            "lineHeight": 33
                        },
                        "c": {
                            "fontSize": 14,
                            "color": "#eee"
                        },
                        "per": {
                            "color": "#FDF44E",
                            "fontSize": 12,
                            "padding": [5, 8],
                            "borderRadius": 2
                        }
                    },
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 12
                    }
                }
            },
            "emphasis": {
                "label": {
                    "show": true,
                    "formatter": "{b|{b}:}  {per|{d}%}  ",
                    "backgroundColor": "rgba(255, 147, 38, 0)",
                    "borderColor": "transparent",
                    "borderRadius": 4,
                    "rich": {
                        "a": {
                            "color": "#999",
                            "lineHeight": 22,
                            "align": "center"
                        },
                        "hr": {
                            "borderColor": "#aaa",
                            "width": "100%",
                            "borderWidth": 1,
                            "height": 0
                        },
                        "b": {
                            "color": "#fff",
                            "fontSize": 18,
                            "lineHeight": 33
                        },
                        "c": {
                            "fontSize": 14,
                            "color": "#eee"
                        },
                        "per": {
                            "color": "#FDF44E",
                            "fontSize": 25,
                            "padding": [5, 6],
                            "borderRadius": 2
                        }
                    }
                }
            },
            "data": params.data
        }, {
            "type": "pie",
            "center": ["50%", "50%"],
            "radius": ["36%", "40%"],
            "label": {
                "show": false
            },
            // "data": [{
            //     "value": 78,
            //     "name": "实例1",
            //     "itemStyle": {
            //         "normal": {
            //             "color": {
            //                 "x": 0,
            //                 "y": 0,
            //                 "x2": 1,
            //                 "y2": 0,
            //                 "type": "linear",
            //                 "global": false,
            //                 "colorStops": [{
            //                     "offset": 0,
            //                     "color": "#9F17FF"
            //                 }, {
            //                     "offset": 0.2,
            //                     "color": "#01A4F7"
            //                 }, {
            //                     "offset": 0.5,
            //                     "color": "#FE2C8A"
            //                 }, {
            //                     "offset": 0.8,
            //                     "color": "#FEE449"
            //                 }, {
            //                     "offset": 1,
            //                     "color": "#00FFA8"
            //                 }]
            //             }
            //         }
            //     }
            // }]
        }]
    }
    return opt
};


//柱状图  数据格式
// let obj3 = {
//     dataX: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//    dataY: [820, 932, 901, 934, 1290, 1330, 1320],

//  };
export const echartsHistogram = function(params = {}) {

    let opt = {
        backgroundColor: '#08194A',
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: params.dataX,
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.12)'
                }
            },
            axisLabel: {
                margin: 10,
                color: '#e2e9ff',
                textStyle: {
                    fontSize: 12
                },
            },
        }],
        yAxis: [{
            barWidth: '10px',
            type: 'value',
            axisLabel: {
                formatter: '{value}',
                color: '#e2e9ff',
            },
            axisLine: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.12)'
                }
            }
        }],
        series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '20px',
            data: params.dataY,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0,244,255,1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(0,77,167,1)' // 100% 处的颜色
                    }], false),
                    barBorderRadius: [30, 30, 30, 30],
                    shadowColor: 'rgba(0,160,221,1)',
                    shadowBlur: 4,
                }
            },
            label: {
                normal: {
                    show: true,
                    lineHeight: 30,
                    width: 80,
                    height: 30,
                    backgroundColor: 'rgba(0,160,221,0.1)',
                    borderRadius: 200,
                    position: ['-8', '-60'],
                    distance: 1,
                    formatter: [
                        '    {d|●}',
                        ' {a|{c}}     \n',
                        '    {b|}'
                    ].join(','),
                    rich: {
                        d: {
                            color: '#3CDDCF',
                        },
                        a: {
                            color: '#fff',
                            align: 'center',
                        },
                        b: {
                            width: 1,
                            height: 30,
                            borderWidth: 1,
                            borderColor: '#234e6c',
                            align: 'left'
                        },
                    }
                }
            }
        }]
    }
    return opt
}

//折线图
export const echartsPolygonal = function(params = {}) {
    let opt = {
         backgroundColor: '#08194A',
        xAxis: {
            type: 'category',
            data: params.dataX,
            axisLine: {
                lineStyle: {
                    color: 'white',
                    width: 1, //这里是为了突出显示加上的  
                }
            }
        },
        legend: {
            data: params.dataX
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: 'white',
                    width: 1, //这里是为了突出显示加上的  
                }
            }
        },
        series: params.dataY
           
        
    }
   

    return opt
}

//仪表盘  接受的参数格式 需要的可自定义添加
// let obj2 = {
//     name:'仪表盘', //名称
//     value:60 //数值
//  };
//仪表盘
export const echartsInstrument = function(params = {}) {
    var highlight = 'white';
    var demoData = [{
            name: params.name,
            value: params.value, //仪表盘刻度
            unit: '%', //显示的单位
            pos: ['50%', '50%'],
            range: [0, 100],
            colora: 'rgba(193,136,244,0.9)',
            colorb: 'rgba(242,166,200,0.6)'
        }

    ];

    let opt = {
        backgroundColor: '#212121',
        series: (function() {
            var result = [];

            demoData.forEach(function(item) {
                result.push(
                    // 内侧指针、数值显示
                    {
                        name: item.name,
                        type: 'gauge',
                        center: item.pos,
                        radius: '60%',
                        startAngle: 225,
                        endAngle: -45,
                        min: 0,
                        max: 100,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                width: 2,
                                color: [
                                    [
                                        item.value / 100, new echarts.graphic.LinearGradient(
                                            0, 0, 1, 0, [{
                                                    offset: 0,
                                                    color: 'rgba(255,255,255,0)',
                                                },
                                                {
                                                    offset: 1,
                                                    color: 'white',
                                                }
                                            ]
                                        )
                                    ],
                                    [
                                        1, 'rgba(255,255,255, 0)'
                                    ]
                                ]
                            }
                        },
                        axisTick: {
                            show: 0,
                        },
                        splitLine: {
                            show: 0,
                        },
                        axisLabel: {
                            show: 0
                        },
                        pointer: {
                            show: 0,
                        },
                        detail: {
                            show: 0
                        },
                        data: [{
                            value: item.value,
                        }]
                    },
                    // 外围刻度
                    {
                        type: 'gauge',
                        center: item.pos,
                        radius: '50%', // 1行3个
                        splitNumber: item.splitNum || 10, //多少个刻度
                        min: 0, //最大
                        max: 100, //最小
                        startAngle: 225,
                        endAngle: -45,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                width: 1,
                                color: [
                                    [1, 'rgba(0,0,0,0)']
                                ]
                            }
                        }, //仪表盘轴线
                        axisTick: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(255,255,255,0.6)',
                                width: 1
                            },
                            length: -6
                        }, //刻度样式
                        splitLine: {
                            show: true,
                            length: 10,
                            lineStyle: {
                                color: 'rgba(255,255,255,0.6)'
                            }
                        }, //分隔线样式
                        axisLabel: {
                            show: true,
                            distance: 2,
                            textStyle: {
                                color: highlight,
                                fontSize: '12',
                                fontWeight: 'bold'
                            }
                        },
                        pointer: {
                            show: 0
                        },
                        detail: {
                            show: 0
                        }
                    },

                    // 内侧指针、数值显示
                    {
                        name: item.name,
                        type: 'gauge',
                        center: item.pos,
                        radius: '54%',
                        startAngle: 225,
                        endAngle: -45,
                        min: 0,
                        max: 100,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                width: 50,
                                color: [
                                    [
                                        item.value / 100, new echarts.graphic.LinearGradient(
                                            0, 0, 1, 0, [{
                                                    offset: 0,
                                                    color: 'rgba(0,0,0, 0)',
                                                },
                                                {
                                                    offset: 1,
                                                    color: item.colorb,
                                                }
                                            ]
                                        )
                                    ],
                                    [
                                        1, 'rgba(255,255,255, 0)'
                                    ]
                                ]
                            }
                        },
                        axisTick: {
                            show: 0,
                        },
                        splitLine: {
                            show: 0,
                        },
                        axisLabel: {
                            show: 0
                        },
                        pointer: {
                            show: true,
                            length: '102%',
                            width: 3
                        },
                        title: {
                            show: true,
                            offsetCenter: [0, '65%'],
                            color: 'white',
                            fontSize: 20,
                            /* backgroundColor: "#D8d8d8",*/
                            borderRadius: 21,
                            padding: 5
                        },
                        detail: {
                            show: true,
                            offsetCenter: [0, 0],
                            textStyle: {
                                fontSize: 25,
                                color: '#fff'
                            },
                            formatter: [
                                '{value}' + (item.unit || ''),
                                /* '{name|' + item.name + '}'*/
                            ].join('\n'),

                            rich: {
                                name: {
                                    fontSize: 20,
                                    lineHeight: 10,
                                    color: '#ddd',
                                    padding: [30, 0, 0, 0]
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: highlight,
                            }
                        },
                        data: [{
                            value: item.value,
                            name: item.name
                        }]
                    }
                );
            });

            return result;
        })()
    }
    return opt
}