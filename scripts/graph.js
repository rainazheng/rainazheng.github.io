var ctx = document.getElementById('surveyResults').getContext('2d');
// var grd = ctx.createLinearGradient(150, 0, 150, 300);
// grd.addColorStop(0,'#C2E5FF');
// grd.addColorStop(1,'#40AEFE');
Chart.defaults.global.defaultFontFamily = "'proxima-nova', sans-serif"
Chart.defaults.global.tooltips.displayColors = false;
Chart.defaults.scale.gridLines.display = false;

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["Price", ["Storage space", "limitations"], ["Quality","limitations"], "Difficult to use"],
        datasets: [{
            label: "% of respondents",
            backgroundColor: '#40AEFE',
            hoverBackgroundColor: '#C2E5FF',
            // borderColor: 'rgb(255, 99, 132)',
            data: [33, 42, 29, 17],
        }]
    },

    // Configuration options go here
    options: {
      scales: {
        yAxes: [{
          ticks: {
            min: 0,
            max: 50,
            stepSize: 10
          }
        }]
      }
    }
});
