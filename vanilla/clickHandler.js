const likeButton = document.getElementsByID("like-button");

likeButton.addEventListener("click", (e)=>{
  const post = e.parentElement.getPostId();
  post.setLike();
});

function setLike () {
  post.addClassName("liked");
  post.updateData();
}
