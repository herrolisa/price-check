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

  var eachDisplay = productPrices.responseJSON.products[i].display_name;
  var eachDes = productPrices.responseJSON.products[i].description;
  $("h1").after("<h3>" + eachDisplay + "</h3>" + "<p>" + eachDes + "</p>");
}


