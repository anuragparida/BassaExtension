$(function() {
  var checkbox = $("#switch-1");
  var hidden = $("#hidden_fields");
  var populate = $("#populate");
  hidden.hide();
  checkbox.change(function() {
    if (checkbox.is(':checked')) {
      hidden.show();
      populate.val("Dude, this input got populated!");
    } else {
      hidden.hide();
    }
  });

var series = 
{
  "monthDataSeries1": {
    "bandwidthEfficiency": [
      88,
      42,
      53,
      81,
      68,
      74
    ],
    "time": [
      "3 Min",
      "2.5 Min",
      "2 Min",
      "1.5 Min",
      "1 Min",
      "0.5 Min"
    ]
  }
}

var options = {
 colors:['#F44336', '#E91E63', '#9C27B0'],
    chart: {
        height: 350,
        type: 'area',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    series: [{
        name: "bandwidth efficiency (In %)",
        data: series.monthDataSeries1.bandwidthEfficiency
    }],
    title: {
        text: 'RealTime Traffic-Time graph',
        align: 'left'
    },
    subtitle: {
        text: 'Variation in bandwidth efficiency',
        align: 'left'
    },
    labels: series.monthDataSeries1.time,
    xaxis: {
        type: 'string',
    },
    yaxis: {
        opposite: true
    },
    legend: {
        horizontalAlign: 'left'
    }
}

var chart = new ApexCharts(
    document.querySelector("#chart"),
    options
);

chart.render();


});

var opt = {
type: "basic",
 title:"My first popup with chrome", 
 message:"this is pretty cool!", 
 iconUrl: "notificationIcon.png"
};

chrome.notifications.create(opt, callback);

function callback() {
  console.log('popup done!');
}
  var n = noty({
    text: 'Target Successfully Set!',
    layout: "bottomRight",
    animation: {
      closeWith: ['click'],
        open: 'animated bounceInUp', 
        close: 'animated bounceOutRight', 
    }
});