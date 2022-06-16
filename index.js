// Add your code here
function submitData(name, email) {

    fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`
        })
    })
        .then(res => res.json())
        .then(data => addNewUser(data.id))
        .catch(message => 'Unauthorized Access')


}
function addNewUser(user) {
    document.querySelector('body').innerHTML = user
    document.body.append(message)
}



