//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/balls-answer', function(request, response) {

    var balls = request.session.data['juggleBalls']
    if (balls == "None - I cannot juggle"){
        response.redirect("/not-eligible")
    } else {
        response.redirect("/juggling-else")
    }
})

router.post('/else-answer', function(request, response) {

    var balls = request.session.data['juggleElse']
    if (balls == "Yes"){
        response.redirect("/juggling-else-details")
    } else {
        response.redirect("/juggling-trick")
    }
})

router.post('/else-details-answer', function(request, response) {
    var clubs = request.session.data['juggleClubs']
    var rings = request.session.data['juggleRings']
    var more = request.session.data['juggleDifferent']
    if (clubs == "Clubs") {
        response.redirect("/juggle-clubs")
    }
    else if (rings == "Rings") {
        response.redirect("/juggle-rings")
    }
    else if (more == "Something else") {
        response.redirect("/juggle-more")
    }
    
})

router.post('/clubs-answer', function(request, response) {

    var rings = request.session.data['juggleRings']
    var more = request.session.data['juggleDifferent']
    if (rings == "Rings"){
        response.redirect("/juggle-rings")
    } else if (more == "Something else"){
        response.redirect("/juggle-more")
    } else {
        response.redirect("/juggling-trick")
    }
})

router.post('/rings-answer', function(request, response) {

    var more = request.session.data['juggleDifferent']
    if (more == "Something else"){
        response.redirect("/juggle-more")
    } else {
        response.redirect("/juggling-trick")
    }
})