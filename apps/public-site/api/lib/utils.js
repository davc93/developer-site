function getCookie(name) {
    // Split the cookies string into individual cookies
    var cookies = document.cookie.split(';');

    // Iterate through each cookie to find the one with the specified name
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        // Check if this cookie has the specified name
        if (cookie.indexOf(name + '=') === 0) {
            // If found, return the value of the cookie
            return cookie.substring(name.length + 1, cookie.length);
        }
    }
    // If the cookie with the specified name is not found, return null
    return null;
}