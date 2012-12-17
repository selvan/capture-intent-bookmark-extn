//based on "Event Page Example" at https://developer.chrome.com/extensions/samples.html

var search_term;

function checkForSearchURL(tabId, changeInfo, tab) {
    var gmatch = tab.url.match(/^https?:\/\/([a-zA-Z\d\.-]*)google\.([a-zA-Z\d\.-]+)\/.+/gi)
    if(gmatch !== null) {
        var queryString = {};
        tab.url.replace(
            new RegExp("([^?=&]+)(=([^&]*))?", "g"),
            function($0, $1, $2, $3) { queryString[$1] = $3; }
        );
        search_term = queryString["q"];
    }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForSearchURL);



