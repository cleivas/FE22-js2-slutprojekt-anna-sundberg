export const url = "https://js2-social-default-rtdb.europe-west1.firebasedatabase.app/users";
const currentUser = localStorage.getItem('user');

export type firebaseUser = {
    username: string,
    avatar: string,
    password: string,
    posts: postObject
}

export type postObject = {
    message: string,
}

// get all users from firebase & show on profile page 
export async function listAllUsers(userListDiv: HTMLDivElement) {

    const response = await fetch(url + '.json');
    const data = await response.json();
    console.log(data);
    const usersArray = Object.values(data);
    const usersKeys = Object.keys(data);

    getUsersList(usersArray)
    function getUsersList(array) {
        let i: number = 0;

        array.forEach((list: firebaseUser) => {
            const { username, avatar, } = list;

            if (username != currentUser) {
                const namn = document.createElement('h3');
                namn.innerText = username;
                const img = document.createElement('img');
                img.src = avatar;
                img.style.maxHeight = '100px';
                const userCard = document.createElement('div');
                userCard.append(namn, img)
                userListDiv.append(userCard);
                userCard.classList.add('user-card')

                const usersId = usersKeys[i];

                img.addEventListener('click', () => {
                    localStorage.setItem('viewUser', username);
                    localStorage.setItem('viewUserAvatar', avatar)
                    localStorage.setItem('viewedUserId', usersId)
                    setTimeout(() => {
                        window.location.href = "../html/userPage.html"
                    }, 100);
                })
            }

            i++;
        })

    }
}

//delete user from firebase
export async function deleteUser(id, container: HTMLDivElement) {

    const response = await fetch(url + `/${id}.json`, { method: 'DELETE' });
    const data = await response.json();
    console.log(data, "user is removed");

    container.innerHTML = '';
}

// export async function getId(user) {

//     const response = await fetch(url + '.json');
//     const data = await response.json();
//     console.log(data);

//     const usersArray = Object.values(data);
//     const keyArr = Object.keys(data);

//     getUserId(usersArray)
//     function getUserId(array) {
//         let i = 0;

//         array.forEach((list: firebaseUser) => {
//             const { username } = list;

//             if (username === user) {
//                 const userId = keyArr[i];
//                 console.log(userId);
//                 localStorage.setItem('id', userId);

//             }
//             i++;
//         })
//     }
// }

//remove all posts from logged in user
export async function deletePosts(userId) {
    const response = await fetch(url + `/${userId}/posts.json`, { method: 'DELETE' });
    const data = await response.json();
    console.log(data, "posts are removed");

    location.reload();
}