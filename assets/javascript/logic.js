// Function that replaces spaces with "%20" in the address string
function URLify (string) {
  return string.trim().replace(/\s/g, '%20');
  }

// Function that pulls address info from HTML address input boxes
// It also appends senator/representative information to the appropriate boxes
$("#submit").on("click", function(event) {
  event.preventDefault();

    //clear House and Senate panels
    $('#senator').val('');
    //$('#house').val('');


      // Google Civic API
      var apikey = "AIzaSyCzbYDzSuQiuisiSRNcgt1JPATAXVEgsAY";

      // Address format Example: "1700%20North%201st%20Street%20San%20Jose%2095112"
      // Store individual input values as variables and trim extra spaces
      var street = $("#address").val().trim();
      var street2 = URLify(street);
      var city = $("#city").val().trim();
      var zipcode = $("#zipcode").val().trim();
      // Compile value variables into one string with "%20" between each variable
      var address = street2 + "%20" + city + "%20" + zipcode;

      // Create queryURL with compiled values, apikey, and other necessary text
      var queryURL = "https://www.googleapis.com/civicinfo/v2/representatives?" + "address=" + address + "&key=" + apikey;


      $.ajax({
        url: queryURL,
        method: "GET"
      })

      .done(function(response) {
      // var rep = response.data;
       console.log(response);

       //Set website and info for Senators to the webpage
       //$("#senator").append(response.officials[2].name);
       $("#senator").append(response.officials[3].name);

       $("#senator1name").text("Name: " + response.officials[2].name);

       //$("#senator1url").attr("src", response.officials[2].photoUrl);
       //$("#senator2url").attr("src", response.officials[3].photoUrl);

       $("#senator1url").attr("href", response.officials[2].urls);
       $("#senator2url").attr("href", response.officials[3].urls);

       $("#senator1url").text(response.officials[2].name + " Website");
       $("#senator2url").text(response.officials[3].name + " Website");

       //Set website and info for House of Represenatives to the webpage
       $("#representative").append(response.officials[8].name);

       $("#housereppic").attr("src", response.officials[8].name);

       $("#houseurl").attr("href", response.officials[8].urls);

       $("#houseurl").text(response.officials[8].name + " Website");

      });
    });
