$(document).mousemove(function(event) {
    $('#outerring').offset({
        top: event.pageY-100, 
        left: event.pageX-100
    });
});