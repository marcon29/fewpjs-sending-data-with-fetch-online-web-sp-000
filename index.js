// Add your code here
function submitData(name, email){
    let formData = {
        name: name,
        email: email
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },        
        body: JSON.stringify(formData)
    }

    return fetch("http://localhost:3000/users", configObj)
        .then(response => response.json())
        .then(json => addUser(json))
        .catch(error => addError(error));
}

function addUser(userInfo) {
    document.body.innerHTML = userInfo.id;
}

function addError(error) {
    document.body.innerHTML = error.message;
}