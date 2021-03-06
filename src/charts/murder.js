const hc_M_def_chart_150 = {
  chart: {
    type: 'column'
  },
  title: {
    text: ''
  },
  legend: {
    enabled: true
  },
  subtitle: {
    text: ''
  },
  xAxis: {

    categories: [
      "Cook",
      "Marion",
      "Marshall",
      "Peoria",
      "St. Clair",
      "Will",
      "Winnebago"
    ],
    title: {
      text: null
    }
  },
  yAxis: [
    {
      title: {
        text: 'Murders'
      },
      labels: {
        overflow: 'justify'
      }
    }, {

      title: {
        text: 'Rate per 100,000'
      },
      labels: {
        overflow: 'justify'
      },
      opposite: true

    }
  ],
  tooltip: {
    shared: true

  },
  plotOptions: {
    column: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    enabled: true
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: 'Murders',
      data: [
        534,
        4,
        16,
        1,
        32,
        18,
        22
      ]

    }, {
      yAxis: 1,
      name: 'Murder Rate per 100,000',
      data: [
        10.18,
        10.37,
        8.54,
        8.32,
        12.04,
        2.63,
        7.62
      ]
    }
  ]
}

const hc_M_def_chart_300 = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: ''
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.y:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.y:.1f} %',
        style: {
          color: 'black'
        }
      }
    }
  },
  series: [
    {
      name: 'Offenders',
      colorByPoint: true,
      data: [
        {
          name: "Male",
          y: 89.7
        }, {
          name: "Female",
          y: 9.2
        }, {
          name: "Unknown",
          y: 1.1
        }
      ]
    }
  ]
}

const hc_M_def_chart_500 = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.y:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.y:.1f} %',
        style: {
          color: 'black'
        }
      }
    }
  },
  series: [
    {
      name: 'Offenders',
      colorByPoint: true,
      data: [
        {
          name: "Black",
          y: 74.4
        }, {
          name: "White",
          y: 24.6
        }, {
          name: "Unknown",
          y: 1.0
        }
      ]
    }
  ]
}

const hc_M_def_chart_400 = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.y:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.y:.1f} %',
        style: {
          color: 'black'
        }
      }
    }
  },
  series: [
    {
      name: 'Victims',
      colorByPoint: true,
      data: [
        {
          name: "Male",
          y: 88.5
        }, {
          name: "Female",
          y: 10.6
        }, {
          name: "Unknown",
          y: 0.9
        }
      ]
    }
  ]
}

const hc_M_def_chart_600 = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.y:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.y:.1f} %',
        style: {
          color: 'black'
        }
      }
    }
  },
  series: [
    {
      name: 'Victims',
      colorByPoint: true,
      data: [
        {
          name: "Black",
          y: 76.0
        }, {
          name: "White",
          y: 21.7
        }, {
          name: "Unknown",
          y: 1.4
        }
      ]
    }
  ]
}

const hc_M_def_chart_700 = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.y:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.y:.1f} %',
        style: {
          color: 'black'
        }
      }
    }
  },
  series: [
    {
      name: 'Arrestees',
      colorByPoint: true,
      data: [
        {
          name: "Male",
          y: 94.5
        }, {
          name: "Female",
          y: 5.5
        }
      ]
    }
  ]
}

const hc_M_def_chart_800 = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.y:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.y:.1f} %',
        style: {
          color: 'black'
        }
      }
    }
  },
  series: [
    {
      name: 'Arrestees',
      colorByPoint: true,
      data: [
        {
          name: "Black",
          y: 73.2
        }, {
          name: "White",
          y: 15.5
        }, {
          name: "Hispanic",
          y: 9.8
        }, {
          name: "Other/Unknown",
          y: 1.5
        }
      ]
    }
  ]
}

const hc_M_def_chart_1100 = {
  chart: {
    type: 'column'
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {

    categories: [
      "0 priors",
      "1 prior",
      "2-5 priors",
      "6-10 priors",
      "11-15 priors",
      "16-20 priors",
      "21+ priors"
    ],
    title: {
      text: null
    }
  },

  yAxis: {
    title: {
      text: ''
    },
    labels: {
      overflow: 'justify',
      formatter: function() {
        return this.value + '%';
      }

    }
  },
  tooltip: {
    valueSuffix: ' murders'
  },
  plotOptions: {
    column: {
      dataLabels: {
        enabled: true,
        formatter: function() {
          return this.y + '%';
        }
      }
    }
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: 'Prior Arrests',
      data: [
        9.1,
        9.4,
        25.5,
        21.6,
        12.6,
        7.6,
        14.2
      ]

    }
  ]
}

const hc_M_def_chart_1200 = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.y:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.y:.2f} %',
        style: {
          color: 'black'
        }
      }
    }
  },
  series: [
    {
      name: 'Arrestees',
      colorByPoint: true,
      data: [
        {
          name: "Guilty",
          y: 51.4
        }, {
          name: "Disposition Not Available",
          y: 11.5
        }, {
          name: "Nolle Prosqui",
          y: 11.1
        }, {
          name: "Dismissed",
          y: 10.5
        }, {
          name: "Not Guilty",
          y: 10.5
        }, {
          name: "Other",
          y: 4.9
        }
      ]
    }
  ]
}

const hc_M_def_chart_1300 = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.y:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.y:.1f} %',
        style: {
          color: 'black'
        }
      }
    }
  },
  series: [
    {
      name: 'Murder Admissions',
      colorByPoint: true,
      data: [
        {
          name: "Less than a life sentence*",
          y: 93.48
        }, {
          name: "Life Sentence",
          y: 6.52
        }
      ]
    }
  ]
}

const hc_M_def_chart_1400 = {
  chart: {
    type: 'column'
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },

  xAxis: {

    categories: [
      "0-4.9",
      "5-9.9",
      "10-14.9",
      "15-19.9",
      "20-24.9",
      "25-29.9",
      "30+"
    ],
    title: {
      text: 'Years'
    }
  },
  yAxis: {
    title: {
      text: 'Percent of people released'
    },
    labels: {
      overflow: 'justify',
      formatter: function() {
        return this.value + ' %';
      }
    }
  },
  tooltip: {
    valueSuffix: '%'
  },
  plotOptions: {
    column: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: 'Murder offenders released',
      data: [
        12,
        13,
        17,
        36,
        13,
        4,
        5
      ]

    }
  ],
  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: '{y} %'
      }
    }
  }
}

export {
  hc_M_def_chart_150,
  hc_M_def_chart_300,
  hc_M_def_chart_400,
  hc_M_def_chart_500,
  hc_M_def_chart_600,
  hc_M_def_chart_700,
  hc_M_def_chart_800,

  hc_M_def_chart_1100,
  hc_M_def_chart_1200,
  hc_M_def_chart_1300,
  hc_M_def_chart_1400
};
