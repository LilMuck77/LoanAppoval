$(document).ready(function () {


    var myRules =
        {
            salary:
                {
                    required: true,
                    number: true,
                    min: 0,
                    max: 500000,
                },
            creditScore:
                {
                    required: true,
                    number: true,
                    min: 0,
                    max: 850,

                },
            monthsAtJob:
                {
                    required: true,
                    number: true,
                    min: 0,
                    max: 300,
                }
        };

    var myMessages =
        {
            salary:
                {
                    required: "This field is required.",
                    number: "Please enter a number.",
                    min: "Please enter a positive number.",
                    max: "Please enter a realistic amount.",
                },
            creditScore:
                {
                    required: "This field is required.",
                    number: "Please enter a number.",
                    min: "Please enter a positive number.",
                    max: "Pleas enter a valid credit score."
                },
            monthsAtJob:
                {
                    required: "This field is required.",
                    number: "Please enter a number.",
                    min: "Please enter a positive number.",
                    max: "Please enter a realistic number.",


                }
        };

    $("form").validate(
        {
            submitHandler: calculateLoan,
            rules: myRules,
            messages: myMessages,
        }
    )

    function calculateLoan() {

        //get users answers
        var userSalary = $("#salary").val();
        var userCreditScore = $("#creditScore").val();
        var userMonths = $("#monthsAtJob").val();

        //test answer for approval or denied
        if (userSalary >= 40000) {

            if (userCreditScore >= 600) {
                $("#loanStatus").html("You have been approved. <br> Congratulations!")
            } else if (userMonths > 12) {
                $("#loanStatus").html("You have been approved. <br> Congratulations!")
            } else {
                $("#loanStatus").html("You have been denied. <br> Sorry...")
            }
        } else if (userCreditScore >= 600) {
            if (userMonths > 12) {
                $("#loanStatus").html("You have been approved. <br> Congratulations!")

            } else {
                $("#loanStatus").html("You have been denied. <br> Sorry...")

            }

        } else {
            $("#loanStatus").html("You have been denied. <br> Sorry...")

        }

    }


});