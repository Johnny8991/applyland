//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

const nrwPages = [
  'applicant-type',
  'event-name',
  'charity-number',
  'organisation-details',
  'activity-type',
  'contact-details',
  'what-will-be-happening',
  'facilities'
]

router.get('/', (req, res) => {
  res.redirect('/nrw/applicant-type')
})

router.get('/nrw', (req, res) => {
  res.redirect('/nrw/applicant-type')
})

nrwPages.forEach((page, index) => {
  router.post(`/nrw/${page}`, (req, res) => {
    const nextPage = nrwPages[index + 1] || 'when-use-land'
    res.redirect(`/nrw/${nextPage}`)
  })
})

router.post('/nrw/when-use-land', (req, res) => {
  if (req.session.data['recurring-event'] === 'yes') {
    res.redirect('/nrw/repeat-pattern')
  } else {
    res.redirect('/nrw/event-dates')
  }
})

router.post('/nrw/repeat-pattern', (req, res) => {
  res.redirect('/nrw/event-dates')
})

router.post('/nrw/event-dates', (req, res) => {
  res.redirect('/nrw/event-times')
})

router.post('/nrw/event-times', (req, res) => {
  res.redirect('/nrw/recurring-event-summary')
})

router.post('/nrw/recurring-event-summary', (req, res) => {
  res.redirect('/nrw/check-your-answers')
})
