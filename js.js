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

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

$(document).ready(function () {
    getJSON($("html").attr("content"), function (status, data) {
        json = data;
        loadPage();
    });
});