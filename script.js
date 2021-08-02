function compute() {
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var t = document.getElementById("years").value;
    if (p == "" || p <= 0) {
        alert("Please enter positive value");
        document.getElementById("principal").focus();
        return false;
    }

    var result = (p * r * t) / 100
    document.getElementById("result").value = result = "If you deposit " + "<span class='highlight'>" + p + "</span>" + "<br>at an interest rate of " + "<span class='highlight'>"
    r + "</span>%" + "<br>You will receive an amount of " + "<span class='highlight'>" + result + "</span>" +
        ",<br>in the year " + "<span class='highlight'>" + (2020 + t) + "</span>";

}

function slidervalue() {
    var slider = document.getElementById("rate");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;
    slider.oninput = function() { output.innerHTML = this.value; }
}