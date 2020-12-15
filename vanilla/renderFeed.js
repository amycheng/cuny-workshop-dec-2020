fetchData()
.then((data)=>{
  let container = document.getElementById("container")
  data.data.forEach((postData)=>{
    let postElement = new DocumentFragment();
    let username = document.createElement('p');
    username.innerText= postData.username;
    let userPic = document.createElement('img');
    userPic.setAttribute("src", postData.userPic);
    //create the rest of the DOM elements
    //...
    container.appendChild(postElement)
  })
})
.catch(()=>{
  console.log("something went wrong.")
})
