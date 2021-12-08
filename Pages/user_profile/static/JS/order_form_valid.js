
function checkValidDate(orderD,note){
    const inpObj = document.getElementById(orderD);
    if (!inpObj.checkValidity()) {
    document.getElementById(note).innerHTML = inpObj.validationMessage;
    }
}

function checkValidPhone(phoneNum,note){
    const inpObj = document.getElementById(phoneNum);
    if (!inpObj.checkValidity()) {
    document.getElementById(note).innerHTML = inpObj.validationMessage;
    }
}
