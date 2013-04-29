function saveOptions() {
  var costField = document.getElementById('msp_local_cost');
  var symbolField = document.getElementById('local_symbol');

  var msp_data = {}
  msp_data.msp_options = {};
  msp_data.msp_options.msp_local_cost = costField.value.replace(/[^0-9.]/g, '');
  msp_data.msp_options.local_symbol = symbolField.value;

  chrome.storage.sync.set( msp_data, function() {
    window.close();
  });
}

function loadOptions() {
  chrome.storage.sync.get('msp_options', function(items) {
    var costField = document.getElementById('msp_local_cost');
    var symbolField = document.getElementById('local_symbol');

    if(items.msp_options) {
      costField.value = items.msp_options.msp_local_cost;      
      symbolField.value = items.msp_options.local_symbol; 
    }
  });
}

document.addEventListener('DOMContentLoaded', loadOptions);
document.querySelector('#save').addEventListener('click', saveOptions);
document.querySelector('#cancel').addEventListener('click', function(){ window.close(); });
