function costForMsp(msp_local_cost, points) {
  return ((parseFloat(msp_local_cost) / 500) * parseFloat(points)).toFixed(2);
};

function replaceMsp() {
  chrome.storage.sync.get('msp_options', function(items) {
    if(items.msp_options) {
      replaceAllPrices(items.msp_options.local_symbol, items.msp_options.msp_local_cost);
    } else {
      replaceAllPrices("£", 4.25);
    }
  });
}

function replaceAllPrices(symbol, msp_local_cost) {
  var prices = document.getElementsByClassName('MSPoints');

  for(var i = 0; i < prices.length; i++) {
    prices[i].style.backgroundImage = 'none';
    var points = prices[i].innerText.replace(',', '');
    prices[i].innerHTML = '' + symbol + costForMsp(msp_local_cost, points);
  }
}


replaceMsp();