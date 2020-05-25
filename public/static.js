console.log('static')

const button = document.createElement('button')
button.id = 'button'
button.innerHTML = 'static'
app.append(button)
button.addEventListener('click', () => {
  throw new Error('static 456')
})
