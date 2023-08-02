//Set minimum value date in datepicker as today
var today = new Date().toISOString().split('T')[0];
document.getElementById("date")[0].setAttribute('min', today);

function Main() {

    //Email expression validation
    var email_format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //Whole numbers only expression
    var whole_num = /^[1-9]+$/;

    if (document.getElementById("movie_name").value === "") {
        alert("Моля изберете филм!");
        return;
    }
    if (document.getElementById("theaters").value === "") {
        alert("Моля изберете кино салон!");
        return;
    }
    if (document.getElementById("date").value === "") {
        alert("Моля изберете дата!");
        return;
    }
    if (document.getElementById("date").value < today) {
        alert("Датата не е валидна!");
        return;
    }
    if (document.getElementById("email").value === "") {
        alert("Моля предоставете имейл!");
        return;
    }
    else {
        if (email_format.test(document.getElementById("email").value)) {
        }
        else {
            alert("Моля предоставете валиден имейл!");
            return;
        }
    }
    if (document.getElementById("tickets_quantity").value === "") {
        alert("Моля задайте количество на билети!");
        return;
    }
    else {
        if (whole_num.test(document.getElementById("tickets_quantity").value)) {
        }
        else {
            alert("Моля задайте правилно количество билети!");
            return;
        }
    }

    //Get the date which the user picked
    var date = new Date(document.getElementById("date").value);


    if (document.getElementById("movie_name").value !== "" && document.getElementById("theaters").value !== "" && document.getElementById("date").value !== "" && document.getElementById("email").value !== "" && document.getElementById("tickets_quantity").value !== "") {
        document.getElementById("movie_name_booked").innerHTML = document.getElementById("movie_name").value;
        document.getElementById("theater").innerHTML = document.getElementById("theaters").value;
        document.getElementById("date_booked").innerHTML = date.toLocaleDateString();
        document.getElementById("email_booked").innerHTML = document.getElementById("email").value;
        document.getElementById("tickets_booked").innerHTML = document.getElementById("tickets_quantity").value;


        //Total cost
        quantity = document.getElementById("tickets_quantity").value;
        document.getElementById("total_price_view").innerHTML = quantity * 5;

        //Show button2
        document.getElementById("button2").style.display = "inline";
    }
}

function myFunction() {
    var r = confirm("Запази белети за дадения филм?");
    if (r === true) {
        location.reload();
    }
}
function changeMovie_Img() {
    if (document.getElementById("movie_name").value === "") {
        document.getElementById("img").style.backgroundSize = "1130px 312.5px, 1130px 312px, 1130px 312px";
    }
    if (document.getElementById("movie_name").value === "Terminator") {
        document.getElementById("img").style.backgroundSize = "1130px 100%, 0% 0%, 0% 0%";
    }
    if (document.getElementById("movie_name").value === "Star Wars") {
        document.getElementById("img").style.backgroundSize = "0% 0%, 1130px 100%, 0% 0%";
    }
    if (document.getElementById("movie_name").value === "Star Trek") {
        document.getElementById("img").style.backgroundSize = "0% 0%, 0% 0%, 1130px 100%";
    }
}
