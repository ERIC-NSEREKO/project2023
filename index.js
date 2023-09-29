let fullname;
let email;
let phonenumber;
let dob;
let gender;

function fullNameChangeHandler(event) {
    fullname = event.target.value;
    console.log("Event is :>", event.target.value);


}
function emailChangeHandler(event) {
    console.log("Event is :>", event.target.value);
    email = event.target.value;


}

function phonenumberChangeHandler(event) {
    phonenumber = event.target.value;
    console.log("Event is :>", event.target.value);


}

function dobChangeHandler(event) {
    dob = event.target.value;
    console.log("Event is :>", event.target.value);

}

function genderChangeHandler(event) {
    gender = event.target.value;
    console.log("Event is :>", event.target.value);

}

function onsubmithandler(event){
    event.preventDefault();
    console.log(event.target);
}

console.log(fullname,email,phonenumber,dob,)


