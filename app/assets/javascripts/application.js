/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()

  const postcodes = [
    '1 Farnell Road, Staines, TW184HT',
    '2 Farnell Road, Staines, TW184HT',
    '3 Farnell Road, Staines, TW184HT',
    '4 Farnell Road, Staines, TW184HT',
    '5 Farnell Road, Staines, TW184HT',
    '6 Farnell Road, Staines, TW184HT',
    '7 Farnell Road, Staines, TW184HT',
    '8 Farnell Road, Staines, TW184HT',
    '9 Farnell Road, Staines, TW184HT',
    '10 Farnell Road, Staines, TW184HT',
    '11 Farnell Road, Staines, TW184HT',
    '12 Farnell Road, Staines, TW184HT',
    '13 Farnell Road, Staines, TW184HT',
    '14 Farnell Road, Staines, TW184HT',
    '15 Farnell Road, Staines, TW184HT',
    '16 Farnell Road, Staines, TW184HT',
    '17 Farnell Road, Staines, TW184HT',
    '18 Farnell Road, Staines, TW184HT',
    '19 Farnell Road, Staines, TW184HT',
    '20 Farnell Road, Staines, TW184HT',
    '21 Farnell Road, Staines, TW184HT',
    '22 Farnell Road, Staines, TW184HT',
    '23 Farnell Road, Staines, TW184HT',
    '24 Farnell Road, Staines, TW184HT',
    '25 Farnell Road, Staines, TW184HT',
    '26 Farnell Road, Staines, TW184HT',
    '27 Farnell Road, Staines, TW184HT',
    '28 Farnell Road, Staines, TW184HT',
    '29 Farnell Road, Staines, TW184HT',
    '30 Farnell Road, Staines, TW184HT',
    '31 Farnell Road, Staines, TW184HT',
    '32 Farnell Road, Staines, TW184HT',
    '33 Farnell Road, Staines, TW184HT',
    '34 Farnell Road, Staines, TW184HT',
    '35 Farnell Road, Staines, TW184HT',
    '36 Farnell Road, Staines, TW184HT',
    '37 Farnell Road, Staines, TW184HT',
    '38 Farnell Road, Staines, TW184HT',
    '39 Farnell Road, Staines, TW184HT',
    '40 Farnell Road, Staines, TW184HT',
    '41 Farnell Road, Staines, TW184HT'
  ]

  accessibleAutocomplete({
    element: document.querySelector('#my-autocomplete-container'),
    id: 'my-autocomplete', // To match it to the existing <label>.
    source: postcodes
  })

})


// Google


// This example displays an address form, using the autocomplete feature
// of the Google Places API to help users fill in the information.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var placeSearch, autocomplete;
var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};

function initAutocomplete() {
  // Create the autocomplete object, restricting the search to geographical
  // location types.
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
      {types: ['geocode']});

  // When the user selects an address from the dropdown, populate the address
  // fields in the form.
  autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();

  for (var component in componentForm) {
    document.getElementById(component).value = '';
    document.getElementById(component).disabled = false;
  }

  // Get each component of the address from the place details
  // and fill the corresponding field on the form.
  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;
    }
  }
}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}
