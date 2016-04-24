function init() {
  var links = document.getElementsByClassName('style-change-link')
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(d){ updateStylesheet( afterHash(d.target.hash) ) }, false);
  }
  checkForNewHash();
}

function checkForNewHash() {
  var currentHash = window.location.hash
  var hashName = afterHash(currentHash)
  if(hashName != findCurrentStylesheet() ) {
    updateStylesheet(hashName)
  }
}

function afterHash(href) {
  return href.split('#')[1]
}

function findCurrentStylesheet() {
  var loadedStylesheet = document.head.getElementsByTagName('link')[0]
  var currentStylesheetHref = loadedStylesheet.href
  var splitHref = currentStylesheetHref.split('/')
  var currentStylesheetName = splitHref[splitHref.length - 1].split('.')[0]
  return currentStylesheetName
}

function updateStylesheet(name) {
  var newHref = "css/" + name + ".css"
  document.head.getElementsByTagName('link')[0].setAttribute("href", newHref)
}
