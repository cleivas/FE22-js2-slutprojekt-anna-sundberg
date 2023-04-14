//funkar ej att delete med postId
async function getPostsId(arr2) {

    const url = `https://js2-social-default-rtdb.europe-west1.firebasedatabase.app/users/${currentId}/posts.json`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    let postId = '';

    const postsKeys = Object.keys(data);

    arr2.forEach(element => {
        console.log(element);
        postId = element;
    })

    deletePost(postId);
}

async function deletePost(postId) {
    const url = `https://js2-social-default-rtdb.europe-west1.firebasedatabase.app/users/${currentId}/posts/${postId}.json`;
    console.log(url);
    const response = await fetch(url, { method: 'DELETE' });
    const data = await response.json();
    console.log(data, "post is removed");

    // location.reload();
}

async function getPostsIdtwo() {

    const url = `https://js2-social-default-rtdb.europe-west1.firebasedatabase.app/users/${currentId}/posts.json`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    let postId = '';

    const postsValues = Object.values(data);
    const postsKeys = Object.keys(data);


    postsKeys.forEach(element => {
        console.log(element);
        postId = element;
    })

    deletePost(postId);
}

//gammal getProfile som jag ej använder
async function getProfile() {

    // get data from firebase
    // const url = "https://js2-social-default-rtdb.europe-west1.firebasedatabase.app/users.json";

    const response = await fetch(url + '.json');
    const data = await response.json();
    console.log(data);

    const usersArray = Object.values(data);
    const keyArr = Object.keys(data);

    for (let i = 0; i < usersArray.length; i++) {

        const { username } = usersArray[i];

        if (username === currentUser) {
            const userId = keyArr[i];
            console.log(userId);
            localStorage.setItem('id', userId);

        }

        console.log(currentId);
    }
}



async function deletePosts(currentId) {
    const response = await fetch(url + `/${currentId}/posts.json`, { method: 'DELETE' });
    const data = await response.json();
    console.log(data, "posts are removed");

    // location.reload();
}

//gammal getProfile som jag ej använder
async function getProfile1() {

    // get data from firebase
    // const url = "https://js2-social-default-rtdb.europe-west1.firebasedatabase.app/users.json";

    const response = await fetch(url + '.json');
    const data = await response.json();
    console.log(data);

    const usersArray = Object.values(data);
    const keyArr = Object.keys(data);

    for (let i = 0; i < usersArray.length; i++) {

        const { username } = usersArray[i];

        if (username === currentUser) {
            const userId = keyArr[i];
            console.log(userId);
            localStorage.setItem('id', userId);

        }

        console.log(currentId);
    }
}

//funkar ej med break
async function checkUserTwo() {
    let usernameInput = document.querySelector('#username') as HTMLInputElement;
    let passwordInput = document.querySelector('#password') as HTMLInputElement;

    const response = await fetch(url + '.json');
    const data = await response.json();
    console.log(data);

    const usersArray = Object.values(data);
    const keyArr = Object.keys(data);

    if (newUser == false) {
        
        checkLogin(usersArray)
        function checkLogin(array){
            let i:number = 0;

            array.forEach((element: firebaseUser) =>{
                const { username, password, avatar } = usersArray[i];
                if (usernameInput.value == '' || passwordInput.value == '') {
                    alert('fyll i alla inputs');
                    break;
                }
                
                if (usernameInput.value == username && passwordInput.value == password) {
                    console.log('hittade user');
                    console.log(username, password, avatar, keyArr[i]);
                    const userId = keyArr[i];
                    localStorage.setItem('user', usernameInput.value);
                    localStorage.setItem('password', passwordInput.value);
                    localStorage.setItem('avatar', avatar);
                    localStorage.setItem('id', userId);
                
                    setTimeout(() => {
                    location.assign("../html/profile.html");
                    }, 1000);
                    break
                }
                else
                console.log('ingen user hittades')
            }
        }

            else if (newUser == true) {

                if (usernameInput.value == '' || passwordInput.value == '' || userAvatar == '') {
                    alert('fyll i alla inputs');
                    break;
                }
                if (usernameInput.value == username && passwordInput.value == password) {
                    console.log('did you mean to sign in instead?');
                    addNewUser = false;
                    break;
                }
                else if (usernameInput.value == username) {
                    console.log('user already exists, try a different username');
                   addNewUser = false;
                    break
                }
    
                else if (usernameInput.value != username ) {
                    console.log('ingen user hittades, ny skall skapas')
                    addNewUser = true;
                }
            }
            if(addNewUser == true){
        
                const createUser = {
                    username: usernameInput.value,
                    password: passwordInput.value,
                    avatar: userAvatar,
                    }
        
                addUser(createUser);
        
                async function addUser(obj:object) {
        
                    const init = {
                        method: 'POST',
                        body: JSON.stringify(obj),
                        headers: {
                            'Content-type': "application/json; charset=UTF-8"
                        }
                    };
        
                    const response = await fetch(url + '.json', init);
                    const data = await response.json();
                    console.log(data);
                }
            
                localStorage.setItem('user', usernameInput.value)
                localStorage.setItem('password', passwordInput.value);
                localStorage.setItem('avatar', userAvatar);
                setTimeout( () => {
                    location.assign('../html/profile.html')
                }, 600)
            }
        }
    }
)}

                
                
            
            
            
        
async function checkUserTwo() {
    let usernameInput = document.querySelector('#username') as HTMLInputElement;
    let passwordInput = document.querySelector('#password') as HTMLInputElement;

    const response = await fetch(url + '.json');
    const data = await response.json();
    console.log(data);

    const usersArray = Object.values(data);
    const keyArr = Object.keys(data);

    if (newUser == false) {
        
        checkLogin(usersArray)
        function checkLogin(array){
            let i:number = 0;

            array.forEach((element: firebaseUser) =>{
                const { username, password, avatar } = element;

                if (usernameInput.value == '' || passwordInput.value == '') {
                    alert('fyll i alla inputs');
                    break;
                }
                
                if (usernameInput.value == username && passwordInput.value == password) {
                    console.log('hittade user');
                    console.log(username, password, avatar, keyArr[i]);
                    const userId = keyArr[i];
                    localStorage.setItem('user', usernameInput.value);
                    localStorage.setItem('password', passwordInput.value);
                    localStorage.setItem('avatar', avatar);
                    localStorage.setItem('id', userId);
                
                    setTimeout(() => {
                    location.assign("../html/profile.html");
                    }, 1000);
                    break
                }
                else
                console.log('ingen user hittades')
            }
        )}
    }

    else if (newUser == true) {
        checkLogin(usersArray)
            function checkLogin(array){
            let i:number = 0;

            array.forEach((element: firebaseUser) =>{
                const { username, password, avatar } = element;

                if (usernameInput.value == '' || passwordInput.value == '' || userAvatar == '') {
                    alert('fyll i alla inputs');
                    break;
                }
                if (usernameInput.value == username && passwordInput.value == password) {
                    console.log('did you mean to sign in instead?');
                    addNewUser = false;
                    break;
                }
                else if (usernameInput.value == username) {
                    console.log('user already exists, try a different username');
                   addNewUser = false;
                    break
                }
    
                else if (usernameInput.value != username ) {
                    console.log('ingen user hittades, ny skall skapas')
                    addNewUser = true;
                }
            })
        }
    }

    if(addNewUser == true){
        
                const createUser = {
                    username: usernameInput.value,
                    password: passwordInput.value,
                    avatar: userAvatar,
                    }
        
                addUser(createUser);
        
                async function addUser(obj:object) {
        
                    const init = {
                        method: 'POST',
                        body: JSON.stringify(obj),
                        headers: {
                            'Content-type': "application/json; charset=UTF-8"
                        }
                    };
        
                    const response = await fetch(url + '.json', init);
                    const data = await response.json();
                    console.log(data);
                }
            
                localStorage.setItem('user', usernameInput.value)
                localStorage.setItem('password', passwordInput.value);
                localStorage.setItem('avatar', userAvatar);
                setTimeout( () => {
                    location.assign('../html/profile.html')
                }, 600)
            }
        }