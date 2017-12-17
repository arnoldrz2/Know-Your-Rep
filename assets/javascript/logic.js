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
    $('#house').val('');


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
       //$("#senator").append(response.officials[3].name);

       // Arrays 2 and 3 contain senetor related information
       $("#senator1name").text("Name: " + response.officials[2].name);
       $("#senator2name").text("Name: " + response.officials[3].name);

       $("#senator1party").text("Party: " + response.officials[2].party);
       $("#senator2party").text("Party: " + response.officials[3].party);

       $("#senator1Phone").text("Phone Number: " + response.officials[2].phones[0]);
       $("#senator2Phone").text("Phone Number: " + response.officials[3].phones[0]);

       $("#senator1Twitter").text("Twitter Handle: " + response.officials[2].channels[1].id);
       $("#senator2Twitter").text("Twitter Handle: " + response.officials[3].channels[1].id);

       $("#senator1FB").text("Facebook Page: " + response.officials[2].channels[0].id);
       $("#senator2FB").text("Facebook Page: " + response.officials[3].channels[0].id);


       //$("#senator1url").attr("src", response.officials[2].photoUrl);
       //$("#senator2url").attr("src", response.officials[3].photoUrl);

       $("#senator1url").attr("href", response.officials[2].urls);
       $("#senator2url").attr("href", response.officials[3].urls);

       $("#senator1url").text(response.officials[2].name + " Website");
       $("#senator2url").text(response.officials[3].name + " Website");

       //Set website and info for House of Represenatives to the webpage
       //$("#representative").append(response.officials[8].name);
       $("#repName").text("Name: " + response.officials[8].name);
       $("#repParty").html("Party: " + response.officials[8].party);

       $("#repPic").attr("src", response.officials[8].name);

       $("#repurl").attr("href", response.officials[8].urls);

       $("#repurl").text(response.officials[8].name + " Website");
       $("#repPhone").text("Phone Number: " + response.officials[8].phones[0]);
       $("#repTwitter").text("Twitter Handle: " + response.officials[8].channels[0].id);
       $("#repFB").text("Facebook Page: " + response.officials[8].channels[1].id);

       $("#govName").text("Name: " + response.officials[4]);
       $("#govParty").text("Party: " + response.officials[4].party);
       $("#govUrl").attr("href", response.officials[4].urls);
       $("#govUrl").text(response.officials[4].name + " Website");
       $("#govPhone").text("Phone Number: " + response.officials[4].phones[0]);
       $("#govTwitter").text("Twitter Handle: " + response.officials[4].channels[0].id);
       $("#govFB").text("Facebook Page: " + response.officials[4].channels[1].id);


      });
    });
