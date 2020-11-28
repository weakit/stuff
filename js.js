var time;
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
        // md.setFlavor('github');
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
    time = setInterval(setTimeStr, 500);

    // load with delay for ✨dat cool stuff✨
    setTimeout(setTitle, 40);
    setTimeout(setContent, 80);
    setTimeout(setEmail, 120);
    setTimeout(setLink, 160);
    setTimeout(updateLinks, 161);
}

function tryLoadingLink(target) {
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
            window.history.pushState('wait', 'what', target.pathname)
            setPage();
        },
        error: function() {
            window.location.href = target.href;
        },
    });
}

function onLinkClick(e) {
    e.preventDefault();
    tryLoadingLink(e.target);
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

$(document).ready(function() {
    loadPage($("html").attr("content"));
    window.onpopstate = handlePopState;
});