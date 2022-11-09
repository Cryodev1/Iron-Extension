document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('custom');
    // onClick's logic below:
    link.addEventListener('click', function() {
        customurl();
    });

    link = document.getElementById('discord');
    // onClick's logic below:
    link.addEventListener('click', function() {
        discord();
    });

    link = document.getElementById('new');
    // onClick's logic below:
    link.addEventListener('click', function() {
        main();
    });

    link = document.getElementById('install');
    // onClick's logic below:
    link.addEventListener('click', function() {
        install();
    });
});

function customurl() {
    var url = prompt("Hand over the url buddy boy")

if(url) {
    chrome.tabs.query({
        windowId: chrome.windows.WINDOW_ID_CURRENT, 
        active: true
    }, function (tabs) {
        chrome.tabs.update(tabs[0].id, {url: "localhost:8080/service/" + url});
    });
}

}

function discord() {
    chrome.tabs.query({
        windowId: chrome.windows.WINDOW_ID_CURRENT, 
        active: true
    }, function (tabs) {
        chrome.tabs.update(tabs[0].id, {url: "localhost:8080/service/https://discord.com/login"});
    });
}

function main() {
    chrome.tabs.create({ url: "localhost:42069" });
}

function install() {
    chrome.tabs.create({ url: "https://github.com/Cryodev1/Iron-local-1/blob/main/README.md" });
}