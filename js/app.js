// STATE VARIABLES:

let likesCount = 0;
let dislikesCount = 0;

// UI-ELEMENTS:

const likeBtnEle = document.querySelector("#like-button");
const dislikeBtnEle = document.querySelector("#dislike-button");
const commentBtnEle = document.querySelector("#comment-button");
const commentLiEle = document.querySelector("ul");
const inputEle = document.querySelector("input");

// EVENT HANDLERS:

const addComment = () => {
  if (!inputEle.value) {
    return;
  }
  const commentEle = document.createElement("li");
  commentEle.textContent = inputEle.value;
  commentLiEle.appendChild(commentEle);
  inputEle.value = "";
};

// const handleLike = (event) => {
//   likesCount += 1;
//   likeBtnEle.textContent = `${likesCount} like(s). Like this post!`;
// };

// const handleDislike = () => {
//   dislikesCount += 1;
//   dislikeBtnEle.textContent = `${dislikesCount} dislike(s). Dislike this post!`;
// };

const handleReaction = (event) => {
  if (event.target.id === "like-button") {
    likesCount += 1;
    likeBtnEle.textContent = `${likesCount} like(s). Like this post!`;
  } else {
    dislikesCount += 1;
    dislikeBtnEle.textContent = `${dislikesCount} dislike(s). Dislike this post!`;
  }
};

//EVENT-LISTENERS:

likeBtnEle.addEventListener("click", handleReaction);
dislikeBtnEle.addEventListener("click", handleReaction);
commentBtnEle.addEventListener("click", addComment);
