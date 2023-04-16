import { viewProfile, showViewedUsersPosts } from "./gui";
import { url, listAllUsers } from "./firebase";

const userBeingViewed = document.querySelector('#name') as HTMLElement;
const userBeingViewedAvatar = document.querySelector('#avatar') as HTMLImageElement;
const usersContainer = document.querySelector('#other-users-container') as HTMLDivElement;
const viewedUser = localStorage.getItem('viewUser');
const viewedAvatar = localStorage.getItem('viewUserAvatar');
const viewedId = localStorage.getItem('viewedUserId');

const h3 = document.querySelector('#other-user') as HTMLElement;
h3.innerText = `${viewedUser}'s posts`;

viewProfile(viewedAvatar, viewedUser, userBeingViewedAvatar, userBeingViewed);
getViewedUsersPost();
listAllUsers(usersContainer);

// get and display all posts from user you are viewing
const post = document.querySelector('#post-card') as HTMLDivElement;
async function getViewedUsersPost() {

    const response = await fetch(url + `/${viewedId}/posts.json`);
    const data = await response.json();
    console.log(data);
    if (data != null) {

        const postArray = Object.values(data);

        console.log(postArray)

        showViewedUsersPosts(postArray, post);
    }

}