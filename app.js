const express = require("express");
const morgan = require('morgan');
const postBank = require('./postBank')

const app = express();

app.use(morgan('dev'))
app.use(express.static('public'))

app.get("/", function(req, res) {
  const list = postBank.list()

  const htmlString = `<!DOCTYPE html>
    <html>
    <head>
      <title>WizardNews</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <div class="news-list">
        <header>
          <img src="/logo.png"/>
          Wizard News
        </header>
        ${list.map(elem => `
          <div class='news-item'>
            <p>
              
            </p>
          </div>
        `)}
      </div>
      <ul>
        ${list.map(elem => `<li><p>${elem.title}</p><p>${elem.name}</p></li>`).join(' ')}
      </ul>
    </body>
    </html>
  `;

  res.send(htmlString);

})

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});


