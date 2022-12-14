const url = "http://localhost:5500/api"

function getUsers(){
    fetch(url)
     .then(response => response.json())
     .then(data => renderApiResult.textContent = 
        JSON.stringify(data))
     .catch(error => console.error(error))
}

function getUser(){
    fetch(`${url}/30`)
     .then(response => response.json())
     .then(data =>{
         userName.textContent = data.name
         userCity.textContent = data.city
         userAvatar.src = data.avatar
     })
     .catch(error => console.error(error))
}
function addUser(){
    fetch(url,
        {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
     .then(response => response.json())
     .then(data => alertApi.textContent = data)
     .catch(error => console.error(error))
}
function updateUser(updatedUser){
 fetch(`${url}/1`, {
    method: "PUT",
    body: JSON.stringify(updatedUser),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
 })
  .then(responde => responde.json())
  .then(data => alertApi.textContent = data)
  .catch(error => console.error(error))
}
function deleteUser(){
 fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }})
  .then(response => response.json())
  .then(data => alertApi.textContent = data)
  .catch(error => console.error(error))
}
const newUser = {
    name: "Juninho Css",
    avatar: "https://picsum.photos/200/300",
    city: "PR"
}
const updatedUser = {
    name: "Silva Jr",
    avatar: "https://picsum.photos/200/300",
    city: "SP"
}
addUser(newUser)
updateUser(updatedUser)
deleteUser(1)
getUsers()
getUser()
