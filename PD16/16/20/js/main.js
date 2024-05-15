function Longest_Country_Name(country_name) {
    return country_name.reduce(function(lname, country) {
  
      return lname.length > country.length ? lname : country;
    }, "");
  }
  

  console.log(Longest_Country_Name(["Lichtensteinas", "Lenkija", "Didžioji Britanija"]));