import { viewProfile } from "./gui";
import { listAllUsers } from "./firebase";
import { url } from "./firebase";
import { firebaseUser } from "./firebase";
import { deleteUser } from "./firebase";
import { deletePosts } from "./firebase";

const container = document.querySelector('#profile-container') as HTMLDivElement;
const userName = document.querySelector('#username-txt') as HTMLElement;
const img = document.querySelector('#user-avatar') as HTMLImageElement;
const usersContainer = document.querySelector('#other-users-container') as HTMLDivElement;
const removeBtn = document.querySelector('#remove-btn') as HTMLButtonElement;
const postInput = document.querySelector('#textarea') as HTMLInputElement;
const publishBtn = document.querySelector('#publish-btn') as HTMLButtonElement;
const postCard = document.querySelector('#post-card') as HTMLElement;
const deletePostsBtn = document.querySelector('#remove-posts') as HTMLButtonElement;

const currentUser = localStorage.getItem('user');
const currentAvatar = localStorage.getItem('avatar');
const currentId = localStorage.getItem('id');

// getId()
getProfile();
setTimeout(() => {
    getUsersPost();
}, 300);
viewProfile(currentAvatar, currentUser, img, userName);
listAllUsers(usersContainer); 
// viewAllUsers();

// async function viewProfile() {
//     img.src = `${currentAvatar}`;
//     userName.innerText = `${currentUser}`;

// //     container.append(img);
// //     console.log(currentId)
// //     console.log(currentUser);
// // }

// // get all users from firebase
// async function viewAllUsers() {

//     const url = "https://js2-social-default-rtdb.europe-west1.firebasedatabase.app/users.json";

//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//     const usersArray = Object.values(data);
//     const usersKeys = Object.keys(data);

//     for (let i = 0; i < usersArray.length; i++) {

//         const { username, password, avatar, } = usersArray[i];

//         if (username != currentUser) {
//             const namn = document.createElement('h3');
//             namn.innerText = username;
//             const img = document.createElement('img');
//             img.src = avatar;
//             img.style.maxHeight = '100px';
//             const userCard = document.createElement('div');
//             userCard.append(namn, img)
//             usersContainer.append(userCard);
//             userCard.classList.add('user-card')

//             const usersId = usersKeys[i];

//             img.addEventListener('click', () => {
//                 localStorage.setItem('viewUser', username);
//                 localStorage.setItem('viewUserAvatar', avatar)
//                 localStorage.setItem('viewedUserId', usersId)
//                 setTimeout(() => {
//                     location.assign('../html/userProfile.html')
//                 }, 100);
//             })
//         }
//     }

// }

removeBtn.addEventListener('click', () => {
    deleteUser(currentId, container);
    setTimeout(() => {
        window.location.href = "../html.html"
        // location.assign('../html.html')
    }, 300);
})

deletePostsBtn.addEventListener('click', () => {
    deletePosts(currentId);
})

//skapa en post
async function addPost(obj: Object) {
    // const url = `https://js2-social-default-rtdb.europe-west1.firebasedatabase.app/users/${currentId}/posts.json`;
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

//
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

//hämta currentUsers posts
async function getUsersPost() {

    const response = await fetch(url + `/${currentId}/posts.json`);
    const data = await response.json();
    
    if(data != null){
    console.log(data);
    const postArray = Object.values(data);

    console.log(postArray)

    showPosts(postArray);
    }else{
        postCard.innerText = "No posts yet"
    }
}

console.log(currentId);

function showPosts(arr) {

    postCard.innerHTML = '';

    arr.forEach((element: String) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post-card');
        const postTxt = document.createElement('p');
        postTxt.innerText = `${element}`;

        // const deleteBtn = document.createElement('button');
        // deleteBtn.innerText = "delete post";
        // deleteBtn.addEventListener('click', () => {
        //     getPostsId(arr2);
        // })
        // postDiv.append(postTxt, deleteBtn)
        postDiv.append(postTxt)
        postCard.prepend(postDiv);
    });

}

// async function deleteUser() {

//     // const url = `https://js2-social-default-rtdb.europe-west1.firebasedatabase.app/users/${currentId}.json`;

//     const response = await fetch(url + `/${currentId}.json`, { method: 'DELETE' });
//     const data = await response.json();
//     console.log(data, "user is removed");

//     container.innerHTML = '';
// }



export async function getId() {

    postCard.innerHTML = '';

    const response = await fetch(url + '.json');
    const data = await response.json();
    console.log(data);
    const usersArray = Object.values(data);
    const usersKeys = Object.keys(data);

    getUserId(usersArray)
    function getUserId(array){
        let index = 0;

        array.forEach((list: firebaseUser) => {
            const { username } = list;
        
                if (username === currentUser) {
                    const userId = usersKeys[index];
                    console.log(userId);
                    localStorage.setItem('id', userId);
                }

                index++; 
                console.log(currentId);
                
            })
            
        }
        
}

console.log(currentId)

async function getProfile() {

    const response = await fetch(url + '.json');
    const data = await response.json();
    console.log(data);

    const usersArray = Object.values(data);
    const keyArr = Object.keys(data);

    getUserId(usersArray)
    function getUserId(array){
        let index = 0; 

        array.forEach((list: firebaseUser) => {
            const { username } = list;

            if (username === currentUser) {
                const userId = keyArr[index];
                console.log(userId);
                localStorage.setItem('id', userId);
    
            }
            index++;
        })
    }
}