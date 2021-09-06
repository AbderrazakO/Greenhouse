(function doAJAX() {
  //>>>>>>>>>>>>>> Get ALl Data and put it in result var
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "DB/data.php");
  xhr.onload = function () {
    var result = this.response;
    console.log(result); // STRING
    result = JSON.parse(result);
    console.log(result); // ARRAY
    //>>>>>>>>>>>>>>>>>>>>>>> Start Separate Data
    let lumval = [],
      conpval = [],
      solval = [];
    $.each(result[0], function (i, obj) {
      lumval.push([parseInt(obj.id),parseInt(obj.Luminosite),obj.Date,obj.Time]);
    });

    $.each(result[1], function (i, obj) {
      conpval.push([parseInt(obj.id),parseInt(obj.Temperature),parseInt(obj.Humidity),obj.Date,obj.Time]);
    });

    $.each(result[2], function (i, obj) {
      solval.push([parseInt(obj.id),parseInt(obj.Humidity),obj.Date,obj.Time]);
    });
    console.log(lumval,conpval,solval);
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Show Last Data

    document.getElementById("luminosite_valeur").innerHTML = lumval[lumval.length-1][1];
    document.getElementById("temperature_valeur").innerHTML = conpval[conpval.length-1][1];
    document.getElementById("humidite_serre_valeur").innerHTML = conpval[conpval.length-1][2];
    document.getElementById("humidite_sol_valeur").innerHTML = solval[solval.length-1][1];

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Draw Charts 1

    new Chart("line-chart1", {
      type: "line",
      data: {
        labels: [conpval[conpval.length-7][4],conpval[conpval.length-6][4],conpval[conpval.length-5][4],conpval[conpval.length-4][4],conpval[conpval.length-3][4],conpval[conpval.length-2][4],conpval[conpval.length-1][4]],
        datasets: [
          {
            label: 'Température de la Serre',
            borderColor: "#e76f51",
            data:[conpval[conpval.length-7][1],conpval[conpval.length-6][1],conpval[conpval.length-5][1],conpval[conpval.length-4][1],conpval[conpval.length-3][1],conpval[conpval.length-2][1],conpval[conpval.length-1][1]],
            fill: false,
          },
        ],
      },
      options: { legend: { display: true } },
    });

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Draw Charts 2

    new Chart("line-chart2", {
      type: "line",
      data: {
        labels: [solval[solval.length-7][3],solval[solval.length-6][3],solval[solval.length-5][3],solval[solval.length-4][3],solval[solval.length-3][3],solval[solval.length-2][3],solval[solval.length-1][3]],
        datasets: [
          {
            label: 'Humidité de Sol',
            data:[solval[solval.length-7][1],solval[solval.length-6][1],solval[solval.length-5][1],solval[solval.length-4][1],solval[solval.length-3][1],solval[solval.length-2][1],solval[solval.length-1][1]],
            borderColor: "#ffd166",
            fill: false,
          },
        ],
      },
      options: {
        legend: { display: true },
      },
    });
    
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> End Draw
  };
  xhr.send();
})();
