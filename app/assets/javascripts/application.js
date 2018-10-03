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
