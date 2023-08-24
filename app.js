const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static('./public/images'))

app.use(express.static(path.join(__dirname, 'public')));

console.log(`${__dirname}/public/js`)

// Set views
app.set('views', './views')
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  res.render('main', {text: 'this is EJS'})
})

app.get('/about', (req, res) => {
  res.render('about', {text: 'About Page'})
})

app.get('/contact', (req, res) => {
  res.render('contact', {text: 'Contact Page'})
})

app.listen(port, () => {
  console.log((`Working on port: ${port}`))
})