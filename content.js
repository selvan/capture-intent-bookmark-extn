var org_title;
var intent;
chrome.extension.sendMessage({send_intent: "yes"}, function(response) {
  org_title = document.title;
  intent = response.intent.replace(/\+/g, " ");
  if(intent !== "") {
    document.title = org_title + ", " + intent;  
  }	  
});

chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	if (request.get_title === "yes") {
  		sendResponse({title: document.title});
  	} else if (request.set_new_title !== undefined) {
  		document.title = request.set_new_title;
  		sendResponse({status:"ok"});
  	} else if (request.set_org_title === "yes") {
      document.title = org_title;
      sendResponse({status:"ok"});
    }
});