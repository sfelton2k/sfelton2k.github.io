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
    $("#phoneNumber").textContent += "1";
});

$("#two").click(function() {
    $("phoneNumber").textContent += "2";
});

$("#three").click(function() {
    $("phoneNumber").textContent += "3";
});

$("#four").click(function() {
    $("#phoneNumber").textContent += "4";
});

$("#five").click(function() {
    $("#phoneNumber").textContent += "5";
});

$("#six").click(function() {
    $("#phoneNumber").textContent += "6";
});

$("#seven").click(function() {
    $("#phoneNumber").textContent += "7";
});

$("#eight").click(function() {
    $("#phoneNumber").textContent += "8";
});

$("#nine").click(function() {
    $("#phoneNumber").textContent += "9";
});

$("#zero").click(function() {
    $("#phoneNumber").textContent += "0";
});

$("#clearNum").click(function() {
    $("#phoneNumber").textContent = "";
});