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