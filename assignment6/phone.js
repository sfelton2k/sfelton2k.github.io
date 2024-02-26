// page on open
$(document).ready(function() {
    $("#tabs").show();
    $("#dialer").hide();
    $("#listContacts").hide();
    $("#add_contacts").hide();
    $("#test_gestures").hide();
});

// tab buttons
$("#dialInterface").click(function() {
    $("#dialer").show();
    $("#listContacts").hide();
    $("#add_contacts").hide();
    $("#test_gestures").hide();
});

$("#contacts").click(function() {
    $("#dialer").hide();
    $("#listContacts").show();
    $("#add_contacts").hide();
    $("#test_gestures").hide();
});

$("#addContacts").click(function() {
    $("#dialer").hide();
    $("#listContacts").hide();
    $("#add_contacts").show();
    $("#test_gestures").hide();
});

$("#testGestures").click(function() {
    $("#dialer").hide();
    $("#listContacts").hide();
    $("#add_contacts").hide();
    $("#test_gestures").show();
});

// dialer tab
$("#one").click(function() {
    $("#numberField").val() + "1";
});

$("#two").click(function() {
    $("numberField").val() + "2";
});

$("#three").click(function() {
    $("numberField").val() + "3";
});

$("#four").click(function() {
    $("#numberField").val() + "4";
});

$("#five").click(function() {
    $("#numberField").val() + "5";
});

$("#six").click(function() {
    $("#numberField").val() + "6";
});

$("#seven").click(function() {
    $("#numberField").val() + "7";
});

$("#eight").click(function() {
    $("#numberField").val() + "8";
});

$("#nine").click(function() {
    $("#numberField").val() + "9";
});

$("#zero").click(function() {
    $("#numberField").val() + "0";
});

$("#clearNum").click(function() {
    $("#phoneNumber").val("");
});

// Add Contacts tab
$("#clearField").click(function() {
    $("#contactName").val("");
    $("#phoneNumber").val("");
    $("#email").val("");
});

// Test Gestures tab
downX = 0;
downY = 0;

$("#gestureField").mousedown(function(event) {
    downX = event.pageX;
    downY = event.pageY;
    $("#gestureOutput").val("Mouse Down");
});

$("#gestureField").mouseup("mouseup", function(event) {
    upX = event.pageX;
    upY = event.pageY;
    if (upX < downX) {
        $("#gestureOutput").val("Swipe Left");
    }
    else if (upX > downX) {
        $("#gestureOutput").val("Swipe Right");
    }
    else if (upY < downY) {
        $("#gestureOutput").val("Swipe Up");
    }
    else if (upY > downY) {
        $("#gestureOutput").val("Swipe Down");
    }
    else if (upX == downX && upY == downY) {
        $("#gestureOutput").val("Mouse Up");
    }
});