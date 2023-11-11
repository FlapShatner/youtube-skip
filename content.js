// Initialize the MutationObserver
const observer = new MutationObserver((mutations) => {
 mutations.forEach((mutation) => {
  if (mutation.addedNodes.length) {
   // Check for the skip button
   const skipButton = document.querySelector('.ytp-ad-skip-button') ?? document.querySelector('.ytp-ad-skip-button-modern')
   const skipButtonText = document.querySelector('.ytp-ad-skip-button-text')

   if (
    (skipButton && skipButtonText && skipButtonText.textContent === 'Skip Ads') ||
    skipButtonText.textContent === 'Skip Ad' ||
    skipButtonText.textContent === 'Skip'
   ) {
    // Click the skip button
    setTimeout(() => {
     skipButton.click()
    }, 5000)
   }
  }
 })
})

// Specify the target node and config
const targetNode = document.querySelector('body')
const config = { childList: true, subtree: true }

// Start observing
observer.observe(targetNode, config)
