//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  const counters = document.querySelectorAll('[data-character-count]')

  counters.forEach((counter) => {
    const textarea = document.getElementById(counter.dataset.characterCount)
    const limit = Number(counter.dataset.characterLimit)

    if (!textarea || !limit) {
      return
    }

    const updateCounter = () => {
      const remaining = Math.max(limit - textarea.value.length, 0)
      counter.textContent = `You have ${remaining} characters`
    }

    textarea.addEventListener('input', updateCounter)
    updateCounter()
  })
})
