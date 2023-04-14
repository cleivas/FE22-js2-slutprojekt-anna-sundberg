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

// get all users from firebase
export async function listAllUsers(userListDiv: HTMLDivElement) {

    const response = await fetch(url + '.json');
    const data = await response.json();
    console.log(data);
    const usersArray = Object.values(data);
    const usersKeys = Object.keys(data);

    getUsersList(usersArray)
    function getUsersList(array){
        let index:number = 0;

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

                const usersId = usersKeys[index];
    
                img.addEventListener('click', () => {
                    localStorage.setItem('viewUser', username);
                    localStorage.setItem('viewUserAvatar', avatar)
                    localStorage.setItem('viewedUserId', usersId)
                    setTimeout(() => {
                        location.assign('../html/userProfile.html')
                    }, 100);
                })
            }

            index++; 
        })
        
}}

export async function deleteUser(id, container:HTMLDivElement) {

    // const url = `https://js2-social-default-rtdb.europe-west1.firebasedatabase.app/users/${currentId}.json`;

    const response = await fetch(url + `/${id}.json`, { method: 'DELETE' });
    const data = await response.json();
    console.log(data, "user is removed");

    container.innerHTML = '';
}


//för att hämta userId
export async function getId(user) {

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

            if (username === user) {
                const userId = keyArr[index];
                console.log(userId);
                localStorage.setItem('id', userId);
    
            }
            index++;
        })
    }
}

export async function deletePosts(userId) {
    const response = await fetch(url + `/${userId}/posts.json`, { method: 'DELETE' });
    const data = await response.json();
    console.log(data, "posts are removed");

    location.reload();
}