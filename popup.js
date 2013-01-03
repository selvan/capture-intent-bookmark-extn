$(document).ready(function () {

    $("#set").click(function() {
        chrome.windows.getCurrent(function(win) {
            chrome.tabs.getSelected(win.id, function(tab) {
                chrome.tabs.sendMessage(tab.id,{set_title: $("#page_title").val()}, function(response) {
                    window.close();
                });
            });
        });        
    });

    $("#cancel").click(function() {
        window.close();
    });
    
    chrome.windows.getCurrent(function(win) {
        chrome.tabs.getSelected(win.id, function(tab) {
            chrome.tabs.sendMessage(tab.id,{get_title: "yes"}, function(response) {
                $("#page_title").val(response.title);
            });
        });
    });

});

