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

$("#clearField").click(function() {
    $("#contactName").val("");
    $("#phoneNumber").val("");
    $("#email").val("");
});