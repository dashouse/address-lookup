const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})


router.post('/single-postcode-input-step-2', function (req, res) {
  // make a variable and give it the value from 'juggling-balls'
  var validPostCode = req.session.data['postcode'].toLowerCase().replace(/\s+/g,'')

  //check if the variable matches a condition
  if (validPostCode == "tw184ht") {
    // send user to the next page
    res.redirect('/single-postcode-input-step-2')
  } else {
    // send user to can't find address
    res.redirect('/single-postcode-input-cant-find-address')
  }
})


router.post('/single-postcode-input-HO-step-2', function (req, res) {
  // make a variable and give it the value from 'juggling-balls'
  var validPostCode = req.session.data['postcode'].toLowerCase().replace(/\s+/g,'')

  //check if the variable matches a condition
  if (validPostCode == "tw184ht") {
    // send user to the next page
    res.redirect('/single-postcode-input-HO-step-2')
  } else {
    // send user to can't find address
    res.redirect('/single-postcode-input-HO-cant-find-address')
  }
})
