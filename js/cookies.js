
function getCookie(cookieName) {
    let decodedCookies = decodeURIComponent(document.cookie)
    let _cookies_ = decodedCookies.split(';');
    return _cookies_.find(cookie => cookie.trim().indexOf(cookieName + '=') != -1);
}

function resetCookie(cookieName) {
    if (getCookie(cookieName != null)) document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function setCookie() {
    if (cookies) {}
}