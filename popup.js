$(function() {
  var checkbox = $("#switch-1");
  var hidden = $("#hidden_fields");
  var populate = $("#populate");
  hidden.hide();
  checkbox.change(function() {
    if (checkbox.is(":checked")) {
      hidden.show();
      populate.val("Dude, this input got populated!");
    } else {
      hidden.hide();
    }
  });

  var series = {
    monthDataSeries1: {
      bandwidthEfficiency: [88, 42, 53, 81, 68, 74],
      time: ["3 Min", "2.5 Min", "2 Min", "1.5 Min", "1 Min", "0.5 Min"]
    }
  };

  var options = {
    colors: ["#F44336", "#E91E63", "#9C27B0"],
    chart: {
      height: 350,
      type: "area",
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight"
    },
    series: [
      {
        name: "bandwidth efficiency (In %)",
        data: series.monthDataSeries1.bandwidthEfficiency
      }
    ],
    title: {
      text: "RealTime Traffic-Time graph",
      align: "left"
    },
    subtitle: {
      text: "Variation in bandwidth efficiency",
      align: "left"
    },
    labels: series.monthDataSeries1.time,
    xaxis: {
      type: "string"
    },
    yaxis: {
      opposite: true
    },
    legend: {
      horizontalAlign: "left"
    }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);

  chart.render();
});

var opt = {
  type: "basic",
  title: "My first popup with chrome",
  message: "this is pretty cool!",
  iconUrl: "notificationIcon.png"
};

/*chrome.notifications.create(opt, callback);

function callback() {
  console.log("popup done!");
}

var n = noty({
  text: "Target Successfully Set!",
  layout: "bottomRight",
  animation: {
    closeWith: ["click"],
    open: "animated bounceInUp",
    close: "animated bounceOutRight"
  }
});*/

document.addEventListener("DOMContentLoaded", function() {
  var download_btn = document.getElementById("download_btn");
  download_btn.addEventListener("click", function() {
    addDownload();
  });
});

function addDownload() {
  var downurl = document.getElementById("download_txt").value;

  if (downurl === "" || downurl === undefined || !linkvalidator(downurl)) {
    alert("Please check your url");
  } else {
    try {
      alert("start");
      $.post("http://localhost:5000/api/download/" + downurl, downurl, function(
        data,
        status
      ) {
        alert("Data: " + data + "\nStatus: " + status);
      });
    } catch (error) {
      alert("Error");
    }
  }
}

var linkvalidator = function(link) {
  var urlvalidator = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
  var magnetvalidator = /magnet:\?xt=/i;
  if (urlvalidator.test(link) || link.match(magnetvalidator) !== null) {
    return true;
  } else {
    return false;
  }
};
