(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.bar .chart'))

    // 2.指定配置项和数据
    var option = {
    color: ['#2f89cf'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
        },
    // 图表大小
    grid: {
        left: '0%',
        top: '10px',
        right: '0%',
        bottom: '4%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ["旅游行业","教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业" ],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                color: 'rgba(255,255,255,.6)',
                fontSize: '12'
            },
            axisLine: {
                show: false
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                color: 'rgba(255,255,255,.6)',
                fontSize: '12'
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 1,
                    type: 'solid'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            }
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '35%',
            data: [200, 300, 300, 900, 1500, 1200, 600],
            itemStyle: {
                barBorderRadius: 5, // 统一设置四个角的圆角大小
            }
        }
    ]
    };

    // 3. 把配置项给实例对象
    myChart.setOption(option)

    //4.让图表随屏幕自适应
    window.addEventListener('resize', function () {
        myChart.resize()
    })
})();


(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.bar2 .chart'))

    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];

    // 2.指定配置项和数据
    var option = {
 
    grid: {
        left: '22%',
        top: '10%',
        bottom: '10%',
        // containLabel: true
    },
    xAxis: {
        show: false
    },
        yAxis: [
        {
        type: 'category',
        inverse: true,
        data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: "#fff"
        }
            },
            {
        type: 'category',
        inverse: true,
        data: [702, 350, 610, 793, 664],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: "#fff"
        }
    }
    ],
    series: [
        {
            name: '条',
            type: 'bar',
            // 柱子之间的距离
            barCategoryGap: 50,
            //柱子的宽度
            barWidth: 10,
            data: [70, 34, 60, 78, 69],
            itemStyle: {
                barBorderRadius: 20, // 统一设置四个角的圆角大小
                color: function (params) {
                    // console.log(params);
                    return myColor[params.dataIndex]
                }
            },
            label: {
                show: true,
                position: 'inside',
                formatter: '{c}%'
            },
            yAxisIndex: 0
        },
        {
            name: '框',
            type: 'bar',
            // 柱子之间的距离
            barCategoryGap: 50,
            //柱子的宽度
            barWidth: 15,
            data: [100, 100, 100, 100, 100],
            itemStyle: {
                color: 'none',
                borderColor: "#00c1de",
                borderWidth: 3,
                barBorderRadius: 15
            },
            yAxisIndex: 1
        }
    ]
};


    // 3. 把配置项给实例对象
    myChart.setOption(option)

    //4.让图表随屏幕自适应
    window.addEventListener('resize', function () {
        myChart.resize()
    })
})();