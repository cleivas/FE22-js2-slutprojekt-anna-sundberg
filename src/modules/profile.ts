import { viewProfile } from "./gui";
import { listAllUsers } from "./firebase";
import { url } from "./firebase";
import { firebaseUser } from "./firebase";
import { deleteUser } from "./firebase";
import { deletePosts } from "./firebase";
import { showPosts } from "./gui";

getProfile();
setTimeout(() => {
    getUsersPost();
}, 300);

const currentAvatar = localStorage.getItem('avatar');
const currentUser = localStorage.getItem('user');
const avatar = document.querySelector('#user-avatar') as HTMLImageElement;
const userName = document.querySelector('#username-txt') as HTMLElement;
viewProfile(currentAvatar, currentUser, avatar, userName);

const usersContainer = document.querySelector('#other-users-container') as HTMLDivElement;
listAllUsers(usersContainer);

//delete user
const currentId = localStorage.getItem('id');
const container = document.querySelector('#profile-container') as HTMLDivElement;
const removeBtn = document.querySelector('#remove-btn') as HTMLButtonElement;
removeBtn.addEventListener('click', () => {
    deleteUser(currentId, container);
    setTimeout(() => {
        window.location.href = "../html.html"
        // location.assign('../html.html')
    }, 300);
})

//delete all your posts
const deletePostsBtn = document.querySelector('#remove-posts') as HTMLButtonElement;
deletePostsBtn.addEventListener('click', () => {
    deletePosts(currentId);
})

// publish a post 
const publishBtn = document.querySelector('#publish-btn') as HTMLButtonElement;
const postInput = document.querySelector('#textarea') as HTMLInputElement;
publishBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const newPost = postInput.value;
    console.log(newPost);
    addPost(newPost);
    setTimeout(() => {
        getUsersPost()
    }, 200);
    postInput.value = '';
})

//get currentUsers posts from firebase & show on profile
const postCard = document.querySelector('#post-card') as HTMLDivElement;
async function getUsersPost() {

    const response = await fetch(url + `/${currentId}/posts.json`);
    const data = await response.json();

    if (data != null) {
        console.log(data);
        const postArray = Object.values(data);

        console.log(postArray)

        showPosts(postArray, postCard);
    } else {
        postCard.innerText = "No posts yet"
    }
}

//get currentId from firebase for logged in user 
async function getProfile() {

    const response = await fetch(url + '.json');
    const data = await response.json();
    console.log(data);

    const usersArray = Object.values(data);
    const keyArr = Object.keys(data);

    getUserId(usersArray)
    function getUserId(array) {
        let i = 0;

        array.forEach((list: firebaseUser) => {
            const { username } = list;

            if (username === currentUser) {
                const userId = keyArr[i];
                console.log(userId);
                localStorage.setItem('id', userId);

            }
            i++;
        })
    }
}

//add new post to firebase 
async function addPost(obj: Object) {
    if (obj != '') {

        const init = {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': "application/json; charset=UTF-8"
            }
        };

        const response = await fetch(url + `/${currentId}/posts.json`, init);
        const data = await response.json();
        console.log(data);
    }
}