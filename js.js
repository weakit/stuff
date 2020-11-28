var time;
var json;

function getTimeStr() {
    var t = new Date();
    return t.toUTCString().slice(17);
}

function setTimeStr() {
    $("#time").text(getTimeStr());
}

function setTitle() {
    $("#title").text(json["Page Title"]);
    $("#title").attr("href", json["Title Link"]);
    $(document).prop("title", json["HTML Title"]);
}

function setContent() {
    $("#content").html(json["Content"]);
}

function setEmail() {
    $("#email").text(json["Email"]);
    $("#email").attr("href", json["Email Link"]);
}

function setLink() {
    $("#link").text(json["Footer"]);
    $("#link").attr("href", json["Footer Link"]);
}

function loadPage() {
    setTimeStr();
    time = setInterval(setTimeStr, 500);

    // load with delay for ✨dat cool stuff✨
    setTimeout(setTitle, 90);
    setTimeout(setContent, 120);
    setTimeout(setEmail, 150);
    setTimeout(setLink, 180);
}

$(document).ready(function() {
    $.get($("html").attr("content"), null, function(data, status) {
        json = jsyaml.load(data);
        loadPage();
    });
});