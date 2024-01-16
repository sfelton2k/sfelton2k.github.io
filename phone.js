$(document).ready(function() {
    $("#tabs").show();
    $("#dialer").hide();
    $("#listContacts").hide();
    $("#add_contacts").hide();
});

$("#dialInterface").click(function() {
    $("#dialer").show();
    $("#listContacts").hide();
    $("#add_contacts").hide();
});

$("#contacts").click(function() {
    $("#dialer").hide();
    $("#listContacts").show();
    $("#add_contacts").hide();
});

$("#addContacts").click(function() {
    $("#dialer").hide();
    $("#listContacts").hide();
    $("#add_contacts").show();
});

$("#one").click(function() {
    $("#phoneNumber").value += "1";
});

$("#two").click(function() {
    $("phoneNumber").value += "2";
});

$("#three").click(function() {
    $("phoneNumber").value += "3";
});

$("#four").click(function() {
    $("#phoneNumber").value += "4";
});

$("#five").click(function() {
    $("#phoneNumber").value += "5";
});

$("#six").click(function() {
    $("#phoneNumber").value += "6";
});

$("#seven").click(function() {
    $("#phoneNumber").value += "7";
});

$("#eight").click(function() {
    $("#phoneNumber").value += "8";
});

$("#nine").click(function() {
    $("#phoneNumber").value += "9";
});

$("#zero").click(function() {
    $("#phoneNumber").value += "0";
});

$("#clearNum").click(function() {
    $("#phoneNumber").value = "";
});