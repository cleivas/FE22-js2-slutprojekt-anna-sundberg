import { viewProfile } from "./gui";
import { listAllUsers } from "./firebase";

const profileBeingViewed = document.querySelector('#name') as HTMLElement;
const profileBeingViewedAvatar = document.querySelector('#avatar') as HTMLImageElement;
const usersContainer = document.querySelector('#other-users-container') as HTMLDivElement;
const viewedUser = localStorage.getItem('viewUser'); 
const viewedAvatar = localStorage.getItem('viewUserAvatar');
const viewedId = localStorage.getItem('viewedUserId');
const post = document.querySelector('#post-card') as HTMLElement;

viewProfile(viewedAvatar, viewedUser, profileBeingViewedAvatar, profileBeingViewed);
otherUser(); 
getViewedUsersPost();
listAllUsers(usersContainer); 

async function getViewedUsersPost() {

    const url = `https://js2-social-default-rtdb.europe-west1.firebasedatabase.app/users/${viewedId}/posts.json`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if(data != null){
    
    const postArray = Object.values(data);
    
    console.log(postArray)

    showViewedUsersPosts(postArray);
    }

}

function showViewedUsersPosts(arr) {
    
    post.innerHTML = '';

    arr.forEach((element: String) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post-card');
        const postTxt = document.createElement('p');
        postTxt.innerText = `${element}`;
        postDiv.append(postTxt)
        post.prepend(postDiv);
    });

}

function otherUser(){
    const h3 = document.querySelector('#other-user') as HTMLElement;
    h3.innerText = `${viewedUser}'s posts`; 
}