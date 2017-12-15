// Testing Google APIs
$("#submit").on("click", function() {

      // Google Civic Api
      var apikey = "AIzaSyCzbYDzSuQiuisiSRNcgt1JPATAXVEgsAY";

      //Address format: "1700%20North%201st%20Street%20San%20Jose%2095112"
      //"https://www.googleapis.com/civicinfo/v2/voterinfo?address=78+Tarkiln+Hill+Road%2C+New+Bedford%2C+Massachusetts+02745&key=buifwGbuibfw&_79521Dh89fwafb"
      // var street = $("#address").val().trim();
      // var city = $("#city").val().trim();
      // var state = $("#state").val().trim();
      // var zipcode = $("#zipcode").val().trim();
      // var streetForm = street.text(JSON.stringify(obj));
      // var address = street + "%2C" + city + "%2C" + state + "%20" + zipcode;

      // var queryURL = "https://www.googleapis.com/civicinfo/v2/representatives?address=" + address + "&key=" + apikey;
      var queryURL = "https://www.googleapis.com/civicinfo/v2/voterinfo?address=78+Tarkiln+Hill+Road%2C+New+Bedford%2C+Massachusetts+02745&key=buifwGbuibfw&_79521Dh89fwafb";


      $.ajax({
        url: queryURL,
        method: "GET"
      })

      .done(function(response) {
      // var rep = response.data;
       console.log(response);
       $("#senator").append(rep);


      });
    });
