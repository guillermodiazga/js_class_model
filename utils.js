window.console.info = function (e) {
    $('#app-console').prepend('<li>' + e + '</li>');
}
