var quotes = [];

function get() {
    var randomQuotes = Math.floor(Math.random() * (quotes.length));
    var quote = quotes[randomQuotes].text + " - " + quotes[randomQuotes].author
    document.getElementById("area").innerText = quote;
}

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    quotes = data;
    get();
  });


