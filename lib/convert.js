var localeData = {
  "en-GB" : {"msp_local_cost": 0.0085, "currency_symbol": "&pound;"},
  "en-US" : {"msp_local_cost": 0.0080, "currency_symbol": "$"},
}

function costForMsp(msp_local_cost, points) {
  return (parseFloat(msp_local_cost) * parseFloat(points)).toFixed(2);
};

function replaceMsp(symbol, msp_local_cost) {
  var locale = document.location.href.split('/')[3];
  var prices = document.getElementsByClassName('MSPoints');

  if(!localeData[locale]) {
    alert("The plugin currently doesn't know your local rates.  Please see https://github.com/barisbalic/msp-not-for-me about contributing.");
    return;
  }

  for(var i = 0; i < prices.length; i++) {
    prices[i].style.backgroundImage = 'none'; // Remove the MSP currency symbol
    var points = prices[i].innerText.replace(/\,|\./g, ''); // Remove any formatting from the value
    var newPrice = costForMsp(localeData[locale].msp_local_cost, points);
    prices[i].innerHTML = '' + localeData[locale].currency_symbol + newPrice;
  }
}

replaceMsp();