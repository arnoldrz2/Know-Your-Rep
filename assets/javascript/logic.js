// Testing Google APIs

function URLify (string) {
  return string.trim().replace(/\s/g, '%20');
  }



$("#submit").on("click", function(event) {
  event.preventDefault();

    //clear House and Senate panels
    $('#senator').val('');
    //$('#house').val('');



      // Google Civic API
      var apikey = "AIzaSyCzbYDzSuQiuisiSRNcgt1JPATAXVEgsAY";

      //Address format: "1700%20North%201st%20Street%20San%20Jose%2095112"
      //"https://www.googleapis.com/civicinfo/v2/voterinfo?address=78+Tarkiln+Hill+Road%2C+New+Bedford%2C+Massachusetts+02745&key=buifwGbuibfw&_79521Dh89fwafb"
      var street = $("#address").val().trim();
      var street2 = URLify(street);
      var city = $("#city").val().trim();
      var zipcode = $("#zipcode").val().trim();
      //var streetForm = street.text(JSON.stringify(obj));

      var address = street2 + "%20" + city + "%20" + zipcode;

      // var queryURL = "https://www.googleapis.com/civicinfo/v2/voterinfo?address=78+Tarkiln+Hill+Road%2C+New+Bedford%2C+Massachusetts+02745&key=buifwGbuibfw&_79521Dh89fwafb";

      //var address = "5506%20Grover%20Ave%20Austin%2078756"

      var queryURL = "https://www.googleapis.com/civicinfo/v2/representatives?" + "address=" + address + "&key=" + apikey;


      $.ajax({
        url: queryURL,
        method: "GET"
      })

      .done(function(response) {
      // var rep = response.data;
       console.log(response);

       //Set website and info for Senators to the webpage
       $("#senator").append(response.officials[2].name);
       $("#senator").append(response.officials[3].name);

       $("#senator1url").attr("href", response.officials[2].urls);
       $("#senator2url").attr("href", response.officials[3].urls);

       $("#senator1url").text(response.officials[2].name + " Website");
       $("#senator2url").text(response.officials[3].name + " Website");

       //Set website and info for House of Represenatives to the webpage
       $("#representative").append(response.officials[8].name);
       $("#houseurl").attr("href", response.officials[8].urls);

       $("#houseurl").text(response.officials[8].name + " Website");

      });
    });
