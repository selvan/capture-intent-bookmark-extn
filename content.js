chrome.extension.sendMessage({send_intent: "yes"}, function(response) {
  document.title = document.title + ", " + response.intent.replace("+", " ");
});