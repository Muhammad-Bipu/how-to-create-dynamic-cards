// dummy data
// const posts = [
//     {
//         title: "post title 1",
//         body: "post description 1"
//     },    {
//         title: "post title 2",
//         body: "post description 2"
//     },    {
//         title: "post title 3",
//         body: "post description 3"
//     },    {
//         title: "post title 4",
//         body: "post description 4"
//     },    {
//         title: "post title 5",
//         body: "post description 5"
//     },    {
//         title: "post title 6",
//         body: "post description 6"
//     },    {
//         title: "post title 7",
//         body: "post description 7"
//     },    {
//         title: "post title 8",
//         body: "post description 8"
//     }
// ];

// <div class="post">
//     <h4 class="post-title">post title 1</h4>
//     <p class="post-body">post description 1</p>
// </div> 

// fetch data
const fetchData = async (config) => {
    try{
        const res = await axios(config);
        return res.data;
    }catch(error){
        throw Error("Data is not fetched.");
    }
    
}

// selection
const postsElement = document.querySelector(".posts");

const loadAllData = async () => {
    const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h4 class="post-title">${post.title}</h4>
            <p class="post-body">${post.body}</p>
        `;
        postsElement.appendChild(postElement);
    })
}

loadAllData();