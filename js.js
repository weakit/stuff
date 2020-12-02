var time = null;
var json;
var md = null;

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
    if (md == null) {
        md = new showdown.Converter();
    }
    $("#content").html(md.makeHtml(json["Content"]));
}

function setEmail() {
    $("#email").text(json["Email"]);
    $("#email").attr("href", json["Email Link"]);
}

function setLink() {
    $("#link").text(json["Footer"]);
    $("#link").attr("href", json["Footer Link"]);
}

function setPage() {
    setTimeStr();
    if (time == null)
        time = setInterval(setTimeStr, 1000);

    // load with delay for ✨dat cool stuff✨
    setTimeout(setTitle, 40);
    setTimeout(setContent, 80);
    setTimeout(setEmail, 120);
    setTimeout(setLink, 160);
    setTimeout(updateLinks, 161);
}

function tryLoadingLink(target, success = function() {}) {
    if (window.location.host != target.host)
        window.location.href = target.href;

    var look_in;

    if (target.pathname.endsWith('/'))
        look_in = target.pathname + 'main.content';
    else if (target.pathname.endsWith('.html'))
        look_in = target.pathname.slice(0, -5) + '.content';
    else
        look_in = target.pathname + '.content';

    $.ajax({
        url: look_in,
        success: function(data) {
            json = jsyaml.load(data);
            success();
            setPage();
        },
        error: function() {
            window.location.href = target.href;
        },
    });
}

function onLinkClick(e) {
    e.preventDefault();
    tryLoadingLink(e.target, function() {
        window.history.pushState(null, null, e.target.pathname)
    });
}

function handlePopState(e) {
    tryLoadingLink(e.target.location);
}

function updateLinks() {
    $('a').click(onLinkClick);
}

function loadPage(content) {
    $.get(content).then(function(data) {
        json = jsyaml.load(data);
        setPage();
    });
}

window.onpopstate = handlePopState;

$(document).ready(function() {
    content_location = $("html").attr("content");
    if (content_location.endsWith(".content"))
        loadPage(content_location);
    else if (content_location == "get")
        tryLoadingLink(window.location);
});