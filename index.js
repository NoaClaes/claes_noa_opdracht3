app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() { });

// neem express-module en steek functionaliteit in constante
const express = require('express');
const port = 5000;

// constante aanmaken die als webserver zal dienen
const app = express();


// constante aanmaken voor de data
const data = require('./data/afbeeldingen.json');


// vertellen aan webserver dat er gebruik gemaakt wordt van EJS
app.set("views", "views");
app.set("view engine", "ejs");

// vertel aan webserver waar de publieke bestanden zijn
app.use(express.static('public'));

// webserver luister naar GET-commando van verschillende pagina's
app.get("/", function(request, response){
  // vanuit de views-map de juiste pagina halen en renderen
  response.render("home",{
    afbeeldingen: data.kunstcollectie
  });
});

app.get("/contact", function(request, response){
  response.render("contact");
});


app.get("/collectie", function(request, response){
  response.render("collectie",{
    afbeeldingen: data.kunstcollectie
  });
});

app.get("/collectie/:collectieid", function(request, response){
  response.render("collectienr",{
    afbeeldingen: data.kunstcollectie,
    id: (request.url).substring(11,12)
  });

});



// Wanneer de URL niet gevonden werd in bovenstaande, gebruik dan de 404
app.use(function(request, response){
  response.statusCode = 404;
  response.render("404",{
    url: request.hostname + request.url
  });
});

// server opstarten en beschikbaar maken via URL
app.listen(port);
