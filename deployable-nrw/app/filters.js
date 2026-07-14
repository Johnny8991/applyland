//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

// Add your filters here

addFilter('nrwTime', (hourValue, minuteValue) => {
  const hour = Number.parseInt(hourValue, 10)
  const minute = Number.parseInt(minuteValue, 10)

  if (Number.isNaN(hour) || Number.isNaN(minute)) {
    return ''
  }

  const suffix = hour >= 12 ? 'pm' : 'am'
  const displayHour = hour % 12 || 12
  const displayMinute = String(minute).padStart(2, '0')

  return `${displayHour}:${displayMinute}${suffix}`
})

addFilter('nrwDate', (dayValue, monthValue, yearValue, fallback) => {
  const day = String(dayValue || '').trim()
  const month = String(monthValue || '').trim()
  const year = String(yearValue || '').trim()

  if (!day || !month || !year) {
    return fallback || ''
  }

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const monthNumber = Number.parseInt(month, 10)
  const monthName = monthNames[monthNumber - 1] || month.charAt(0).toUpperCase() + month.slice(1)

  return `${Number.parseInt(day, 10) || day} ${monthName} ${year}`
})
