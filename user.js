const id = localStorage.getItem("id")
const postList = document.querySelector(".post-list")
const inputSearch = document.querySelector(".post__search--container input")


async function main(filterId){
    
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${filterId}`);
    const postData = await posts.json()
    console.log(postData)
    postList.innerHTML = postData.map(post => postHTML(post)).join("")
    
}

function postHTML(post){
    return `
    <div class="post">
      <div class="post__title">
        ${post.title}
      </div>
      <p class="post__body">
        ${post.body}
      </p>
    </div>`
}

main(id)
inputSearch.placeholder = id
inputSearch.value = id

inputSearch.addEventListener("change", (e) => { //can also use the "change" / "keyup" event
    main(e.target.value)
})