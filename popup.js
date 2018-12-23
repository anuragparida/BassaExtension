$(function() {
  
  // Get the form fields and hidden div
  var checkbox = $("#switch-1");
  var hidden = $("#hidden_fields");
  var populate = $("#populate");
  
  // Hide the fields.
  // Use JS to do this in case the user doesn't have JS 
  // enabled.
  hidden.hide();
  
  // Setup an event listener for when the state of the 
  // checkbox changes.
  checkbox.change(function() {
    // Check to see if the checkbox is checked.
    // If it is, show the fields and populate the input.
    // If not, hide the fields.
    if (checkbox.is(':checked')) {
      // Show the hidden fields.
      hidden.show();
      // Populate the input.
      populate.val("Dude, this input got populated!");
    } else {
      // Make sure that the hidden fields are indeed
      // hidden.
      hidden.hide();
      
      // You may also want to clear the value of the 
      // hidden fields here. Just in case somebody 
      // shows the fields, enters data to them and then 
      // unticks the checkbox.
      //
      // This would do the job:
      //
      // $("#hidden_field").val("");
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


