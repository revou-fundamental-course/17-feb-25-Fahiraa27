document.getElementById("contact-form").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let interest = document.getElementById("interest").value;

    if (name === "" || email === "" || interest === "") {
        alert("Harap isi semua data!");
        event.preventDefault();
    }
});