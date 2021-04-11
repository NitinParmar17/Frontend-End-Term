function showData() {
  event.preventDefault();
  var country = document.getElementById("country").value;
  var startDate = document.getElementById("start").value;
  var endDate = document.getElementById("end").value;

  var confirmed = document.getElementById("confirmed");
  var active = document.getElementById("active");
  var deaths = document.getElementById("deaths");

  console.log(startDate);

  if (country == "" || startDate == "" || endDate == "")
    alert("enter the required field");
  else {
    var url =
      "https://api.covid19api.com/country/" +
      country +
      "?from=" +
      startDate +
      "T00:00:00Z&to=" +
      endDate +
      "T00:00:00Z";

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        var length = res.length;
        var index = length - 1;

        var c = res[index].Confirmed;
        var a = res[index].Active;
        var d = res[index].Deaths;

        confirmed.innerHTML = c;
        active.innerHTML = a;
        deaths.innerHTML = d;

        document.getElementById("res").style.display = "block";
      });
  }
}
