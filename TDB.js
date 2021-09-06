(function doAJAX() {
  //>>>>>>>>>>>>>> Get ALl Data and put it in result var
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "DB/controle.php");
  xhr.onload = function () {
    var result = this.response;
    console.log(result); // STRING
    result = JSON.parse(result);
    console.log(result); // ARRAY
    //>>>>>>>>>>>>>>>>>>>>>>> Start Separate Data
    let id = [],
      status = [];
    $.each(result, function (i, obj) {
      id.push([parseInt(obj.id)]);
      status.push([parseInt(obj.status)]);
    });
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Transform Data
    function myFunction(list) {
      let s = [];
      for (let i = 0; i < list.length; i++) {
        s.push(+list[i].join(""));
      }
      return s;
    }
    id = myFunction(id);
    status = myFunction(status);
    //console.log(id, status);
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Show data
    let ids = ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8"];

    //>>>>>>>>>>>>>>>
    for (let i = 0; i < ids.length; i++) {
      if (status[i] == 1) {
        document.getElementById(ids[i]).checked = true;
      } else {
        document.getElementById(ids[i]).checked = false;
      }
    }
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> end
    $(document).ready(function () {
      console.log(status);
      $("#submit").click(function () {
        let stat = [];
        $(".checkbox").each(function () {
          if ($(this).is(":checked")) {
            stat.push(1);
          } else {
            stat.push(0);
          }
        });
        stat = stat.toString();
        $.ajax({
          url: "DB/controle.php",
          method: "POST",
          data: { stat: stat },
        });
      });
    });
    function showFunction() {
      document.getElementById("result0").innerHTML = "Check Box Data Inserted";
    }
  };
  xhr.send();
})();
