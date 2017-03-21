/**
 * Sends a request to the server to get Uber products based on passed in
 * latitude and longitude positions.
 * @param  {number} lat The location's latitude value
 * @param  {number} lng The location's longitude value
 * @return {[Products]]} The Uber products available at the queried location
 */

function getProductsByLocation (lat, lng) {
  var location = {
    latitude: lat,
    longitude: lng
  };
  var products = getProducts(location);
  return products;
}

var productPrices = getProductsByLocation(21.3069, -157.8583);
console.log(productPrices);

/**
 * Gets the products from a certain location.
 * @param  {object} The location object to query
 * @return {[Product]]} An array of products
 */
function getProducts (location) {
  return $.ajax({
    type: "GET",
    data: location,
    url: "/products",
    async: false
  });
}

// Stretch Goal
/**
 * Returns the device's current location.
 * @return {object} The device's current location
 */
function requestProductsByCurrentPosition () {
  /* The `getCurrentPosition` takes a function as it's first argument.
   * This function is referred to as a "callback" function, because it is
   * called when the result (current location) is found.
   */
  navigator.geolocation.getCurrentPosition(/* your function name goes here */);
}



for (var i = 0; i < productPrices.responseJSON.products.length; i++) {
  console.log(productPrices.responseJSON.products[i].display_name);

  // Using jQuery
  // var eachDisplayName = productPrices.responseJSON.products[i].display_name;
  // var eachDescription = productPrices.responseJSON.products[i].description;
  // $("h1").after("<div>" + "<h3>" + eachDisplayName + "</h3>" + "<p>" + eachDescription + "</p>" + "</div>");

  // Using Vanilla JavaScript
  var h1 = document.getElementsByTagName("h1");
  var body = document.getElementsByTagName("body");
  var uberElement = document.createElement("div");
  body[0].insertBefore(uberElement, h1[0].nextSibling);
  var displayH3 = document.createElement("h3");
  displayH3.innerHTML = productPrices.responseJSON.products[i].display_name;
  uberElement.appendChild(displayH3);
  var img = document.createElement("img");
  img.src =  productPrices.responseJSON.products[i].image;
  uberElement.appendChild(img);
  var descP = document.createElement("p");
  descP.innerHTML = productPrices.responseJSON.products[i].description;
  uberElement.appendChild(descP);
  var costUL = document.createElement("ul");
  var eachLI = document.createElement("li");
  if (productPrices.responseJSON.products[i].price_details !== null){
    eachLI.innerHTML = "Base Price: $" + productPrices.responseJSON.products[i].price_details.base;
  }else{
    eachLI.innerHTML = "Base Price: N/A";
  }
  uberElement.appendChild(costUL);
  costUL.appendChild(eachLI);
}


