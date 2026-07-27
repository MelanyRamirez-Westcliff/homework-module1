var partners = [
  ["partner-bustour.png", "Partner Bus Tours"],
  ["partner-cabinrental.png", "Partner Cabin Rental"],
  ["partner-campingadv.png", "Partner Camping Adventure"],
  ["partner-collegetours.png", "Partner College Tours"],
  ["partner-rentalbike.png", "Partner Bike Rentals"],
  ["partner-tourgroup.png", "Partner Tour Group"],
];

var partnerList = "";

for (var i = 0; i < partners.length; i++) {
  partnerList +=
    '<li class="partner">' +
    '<img src="images/partners/' +
    partners[i][0] +
    '" alt="' +
    partners[i][1] +
    '">' +
    "</li>";
}

document.getElementById("partners").innerHTML = partnerList;