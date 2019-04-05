dikiSearch = function(info, tab) {
  var query = info.selectionText;
  chrome.tabs.create({
    url: "https://www.diki.pl/slownik-angielskiego?q=" + query + "&source=opensearch"
  });
}

chrome.contextMenus.create({
  "id": "diki.pl",
  "title": "Search in Diki.pl",
  "contexts": ["selection"],
  "onclick": dikiSearch
});