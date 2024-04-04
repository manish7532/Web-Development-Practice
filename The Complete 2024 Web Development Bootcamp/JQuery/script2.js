
$(document).ready(function () {

    
    function submitForm() {
        validateFirstName();
        validateLastName();
    }

    var nameReg = /^[A-Za-z]+$/;
    // var numberReg = /^[0-9]+$/;

    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();


    function validateFirstName() {
        if (!nameReg.test(firstName)) {
            $("#error").html(`Please Enter letters only.`);
            return false;
        }
        else if (firstName == "") {
            $("#error").html(`Please Enter your first name.`);
            return false;
        }
        else{
            return true;
        }
    }

    function validateLastName() {
        if (!nameReg.test(lastName)) {
            $("#error").html(`Please Enter letters only.`);
            return false;
        }
        else if (lastName == "") {
            $("#error").html(`Please Enter your Last name.`);
            return false;
        }
        else{
            return true;
        }
    }





    // Calculate price
    $('#foodRows').on('change', '.food', function () {
        var price = 0;
        var food = $(this).val();
        switch (food) {
            case 'burger':
                price = 59.00;
                break;
            case 'pizza':
                price = 129.00;
                break;
            case 'fries':
                price = 49.00;
                break;
        }
        $(this).closest('.form-row').find('.price').val(price.toFixed(2));
    });


    // Adding row
    $('#foodRows').on('click', '.addRow', function () {
        var newRow = $('#foodRows .form-row').first().clone();
        newRow.find('select').val('');
        newRow.find('input').val('');
        $('#foodRows').append(newRow);
    });


    // Removing row
    $('#foodRows').on('click', '.removeRow', function () {
        if ($('#foodRows .form-row').length > 1) {
            $(this).closest('.form-row').remove();
        }
    });



    $("#clear").on("click", function () {
        $("#reset").click();
        // while($('#foodRows .form-row').length > 1) {
        //     $(this).closest('.form-row').remove();
        //     $('#foodRows .form-row').length--;
        // }
        $('#billResult').html('');
    })


});