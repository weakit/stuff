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
    $("#title").text(json["title"]);
    $("#title").attr("href", json["titleTo"]);
    $(document).prop("title", json["pageTitle"]);
}

function setContent() {
    $("#content").html(json["content"]);
}

function setEmail() {
    $("#email").text(json["email"]);
    $("#email").attr("href", json["emailTo"]);
}

function setLink() {
    $("#link").text(json["link"]);
    $("#link").attr("href", json["linkTo"]);
}

function loadPage() {
    setTimeStr();
    time = setInterval(setTimeStr, 500);
    setTimeout(setTitle, 100);
    setTimeout(setContent, 150);
    setTimeout(setEmail, 200);
    setTimeout(setLink, 250);
}

$(document).ready(function () {
    jQuery.getJSON($("html").attr("content"), function (data) {
        json = data;
    });
    loadPage();
});