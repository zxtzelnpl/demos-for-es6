function unhandledrejection(event) {
  console.log('unhandledrejection')
  console.log(event)
}

function rejectionhandled(event) {
  console.log('rejectionhandled')
  console.log(event)
}

export default function init() {
  console.log('unhandledrejection init')
  window.addEventListener('unhandledrejection', unhandledrejection)
  console.log('rejectionhandled init')
  window.addEventListener('rejectionhandled', rejectionhandled)
}