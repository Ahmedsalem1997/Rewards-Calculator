// Listen for submit
document.getElementById("loan-form").addEventListener("submit", computeResults);

function openCard(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" is-dark", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " is-dark";
} 



function computeResults(e) {
  
  // Getting HTML elements by ID

  const UIbills = document.getElementById("bills").value;

  const UIad = document.getElementById("ad").value;

  const UIspend = document.getElementById("spend").value;

  const UIproject = document.getElementById("project").value;

  // Calculate

  const sum = parseFloat(UIbills) + parseFloat(UIad) + parseFloat(UIspend) + parseFloat(UIproject);

  const CalculatedBrex = parseFloat(sum * 0.3).toFixed(2);

  const CalculatedStripe = parseFloat(sum * 2.9).toFixed(2);

  const CalculatedAmex = parseFloat(sum * 1.3).toFixed(2);

  const UnlimitedRewards = parseFloat(sum * 1.1).toFixed(2);
  
  const LifetimeRewards = parseFloat(sum * 1.2).toFixed(2);

  
  //Show results

  document.getElementById("totalBrex").innerHTML = "$" + CalculatedBrex;

  document.getElementById("totalStrip").innerHTML = "$" + CalculatedStripe;

  document.getElementById("totalAmex").innerHTML = "$" + CalculatedAmex;

  document.getElementById("Unlimited").innerHTML = "$" + UnlimitedRewards;

  document.getElementById("Lifetime").innerHTML = "$" + LifetimeRewards;

  e.preventDefault();
}
