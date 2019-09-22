function PhoneNumber() {
    let regex = /^\([0-9]{2}\)\-\([0][0-9]{9}\)$/
    if (regex.test(prompt("input phone number"))) {
        alert("accept");
    } else {
        alert("reject!");
    }
}
PhoneNumber();