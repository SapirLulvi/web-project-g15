

function checkValidPhone(phoneNum,note){
    const inpObj = document.getElementById(phoneNum);
    if (!inpObj.checkValidity()) {
    document.getElementById(note).innerHTML = inpObj.validationMessage;
    }
}
