// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"
const userList = document.querySelector(".user-list")
async function main(){
    const users = await fetch("https://jsonplaceholder.typicode.com/users")
    const userData = await users.json()
    userList.innerHTML = userData.map(user => userHTML(user)).join("")
}

function showUserPosts(id){
    console.log(window.location)
    localStorage.setItem("id", id) // first one is key can be anything and then the value that we are getting
    window.location.href = `${window.location.origin}/user.html` //route to a new page
}

function userHTML(user){
    return `
    <div class="user">
        <div class="user-card" onclick = "showUserPosts(${user.id})">
        <div class="user-card__container">
            <h3>${user.name}</h4>
            <p><b>Email:</b> ${user.email}</p>
            <p><b>Phone:</b> ${user.phone}</p>
            <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
        </div>
        </div>
    </div>
        `
}
main()

