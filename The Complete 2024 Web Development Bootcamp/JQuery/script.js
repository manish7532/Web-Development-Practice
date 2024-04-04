$(document).ready(function () {

    $.validator.addMethod("lettersonly", function (value, element) {
        return /^[a-z]+$/i.test(value);
    }, "Please enter letters only.");


    $("#orderForm").validate({


        rules: {
            firstname: {
                required: true,
                lettersonly: true,
                minlength: 3,
                maxlength: 10
            },
            lastname: {
                required: true,
                lettersonly: true,
                minlength: 3,
                maxlength: 10
            },
            food: {
                required: true
            },
            quantity: {
                required: true,
                min: 1
            }
        },


        messages: {
            firstname: {
                required: "Please enter First Name",
                lettersonly: "Letters only please",
                minlength: "Enter At least 3 characters.",
                maxlength: "First name can be only upto 10 letters."
            },
            lastname: {
                required: "Please enter Last Name",
                lettersonly: "Letters only please",
                minlength: "Enter At least 3 characters.",
                maxlength: "Last name can be only upto 10 letters."
            },
            food: "Please select a product",
            quantity: {
                required: "Please enter quantity",
                min: "Quantity must be at least 1"
            }
        },


        submitHandler: () => {
            // Create bill
            var productTotal = 0;
            $('.form-row').each(function () {
                var price = parseFloat($(this).find('.price').val());
                var quantity = parseInt($(this).find('.quantity').val());
                productTotal += price * quantity;
            });

            var gst = productTotal * 0.18;
            var deliveryCharge = 30.00;
            var grandTotal = productTotal + gst + deliveryCharge;
            $('#billResult').html(`
            <p>Product Total = Rs. ${productTotal.toFixed(2)}</p>
            <p>GST 18% = Rs. ${gst.toFixed(2)}</p>
            <p>Delivery Charge = Rs. ${deliveryCharge.toFixed(2)}</p>
            <p>Grand Total = Rs. ${grandTotal.toFixed(2)}</p>
            `);
        }
    });


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


    // Clear form
    // $('#clearForm').click(function () {
    //     var confirmClear = confirm("Are you sure you want to clear all info?");
    //     if (confirmClear) {
    //         docun('#orderForm')[0].reset();
    //         $('#billResult').html('');
    //     }
    // });

    $("#clear").on("click", function () {
        $("#reset").click();
        // while($('#foodRows .form-row').length > 1) {
        //     $(this).closest('.form-row').remove();
        //     $('#foodRows .form-row').length--;
        // }
        $('#billResult').html('');
    })


});
