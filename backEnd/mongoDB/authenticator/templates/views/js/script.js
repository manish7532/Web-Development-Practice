$(document).ready(function () {

    $("#blockUser").hide()

    // $('.msg').fadeOut(5000, function () {
    //     $(this).remove();
    // });
});

let table = $('.table').DataTable({
    "aaSorting": [],
    paging: false,
    responsive: true,
    stateSave: true,
    ordering: false,
});

$("#sidebar-toggle").click(function () {
    $("#sidebar").toggleClass("collapsed");
});
//show user details
$("#userBtn").on('click', function () {
    $("#userList").show()
    // hide other 
    $("#blockUser").hide()

})
$("#inactUser").on('click', function () {
    $("#blockUser").show()
    // hide other 
    $("#userList").hide()

})
