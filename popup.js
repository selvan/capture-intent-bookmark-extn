$(document).ready(function () {

    var bg = chrome.extension.getBackgroundPage();
    var console = bg.console;

    $("#submit").click(function() {
        window.close();
    });

    chrome.windows.getCurrent(function(win) {
        chrome.tabs.getSelected(win.id, actionClicked);
    });

    function actionClicked(tab) {
        $("#url").val(tab.url);
        $("#intent").val(bg.search_term);
    }
});

