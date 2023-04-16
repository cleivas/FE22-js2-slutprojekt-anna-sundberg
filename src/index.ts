import { url } from "./modules/firebase";

let userAvatar: string = '';
let newUser: boolean;
let addNewUser: boolean;

//when clicking sign in
const signIn = document.querySelector('#sign-in') as HTMLButtonElement;
const signInDiv = document.querySelector('#user-input') as HTMLElement;
signIn.addEventListener('click', () => {
    newUser = false;
    console.log("OK du ska logga in");
    signUp.style.display = 'none';
    signInDiv.style.display = 'flex';
    signInDiv.style.border = 'black 2px solid';
    signIn.style.display = 'none'
});

//when clicking sign up
const submitBtn = document.querySelector('#submit-btn') as HTMLButtonElement;
const signUp = document.querySelector('#sign-up') as HTMLButtonElement;

signUp.addEventListener('click', () => {
    newUser = true;
    console.log(newUser)
    signUp.style.display = 'none';
    signInDiv.style.display = 'flex';
    const avatarDiv = document.createElement('div');
    console.log("OK, du ska skapa en user");
    signIn.style.display = 'none';
    submitBtn.innerText = "Create User";
    const koala = document.createElement('img');
    let koalaUrl = new URL('./media/koala.svg', import.meta.url);
    koala.src = koalaUrl.href;

    const duck = document.createElement('img');
    let duckUrl = new URL('./media/duck.svg', import.meta.url);
    duck.src = duckUrl.href;

    const penguin = document.createElement('img');
    let penguinUrl = new URL('./media/penguin.svg', import.meta.url);
    penguin.src = penguinUrl.href;

    const text = document.createElement('h3');
    text.innerText = "Choose your avatar by clicking the one you want";

    avatarDiv.append(koala, duck, penguin);
    signInDiv.prepend(text, avatarDiv);

    koala.addEventListener('click', () => {
        console.log("You chose koala")
        userAvatar = 'https://www.reshot.com/preview-assets/icons/NX7HW2CBSF/koala-NX7HW2CBSF.svg';
        duck.style.display = 'none';
        penguin.style.display = 'none';
    })

    duck.addEventListener('click', () => {
        console.log("You chose duck")
        userAvatar = 'https://www.reshot.com/preview-assets/icons/RYZ2P59AGC/duck-RYZ2P59AGC.svg';
        koala.style.display = 'none';
        penguin.style.display = 'none';
    })

    penguin.addEventListener('click', () => {
        console.log("You chose penguin");
        userAvatar = 'https://www.reshot.com/preview-assets/icons/3BTWMSPU95/penguin-3BTWMSPU95.svg';
        koala.style.display = 'none';
        duck.style.display = 'none';
    })
});

//när man ska logga in eller skapa - kolla användarnamn o lösen
const inputForm = document.querySelector('#input-form') as HTMLFormElement;
inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    checkUser();
})

async function checkUser() {
    let usernameInput = document.querySelector('#username') as HTMLInputElement;
    let passwordInput = document.querySelector('#password') as HTMLInputElement;
    const error = document.querySelector('#error-message') as HTMLElement;

    const response = await fetch(url + '.json');
    const data = await response.json();
    console.log(data);

    const usersArray = Object.values(data);
    const keyArr = Object.keys(data);

    if (newUser == false) {

        checkLogin(usersArray)
        function checkLogin(array) {

            for (let i = 0; i < array.length; i++) {

                const { username, password, avatar } = array[i];

                if (usernameInput.value != username || passwordInput.value != password) {
                    error.innerText = "Wrong username or password";
                }

                else if (usernameInput.value == username && passwordInput.value == password) {
                    error.innerText = '';
                    console.log('hittade user');
                    const userId = keyArr[i];
                    localStorage.setItem('user', usernameInput.value);
                    localStorage.setItem('password', passwordInput.value);
                    localStorage.setItem('avatar', avatar);
                    localStorage.setItem('id', userId);

                    setTimeout(() => {
                        // location.assign("./html/profile.html");
                        window.location.href = "./html/profile.html"; 
                    }, 400);
                    break
                }
                else {
                    console.log('ingen user hittades')
                    error.innerText = "no user found :("
                }
            }
        }
    }

    if (newUser == true) {
        signUpNewUser(usersArray)

        function signUpNewUser(array) {

            for (let i = 0; i < array.length; i++) {

                const { username, password } = array[i]

                if (usernameInput.value == '' || passwordInput.value == '' || userAvatar == '') {
                    alert('fyll i alla inputs');
                    break;
                }
                if (usernameInput.value == username && passwordInput.value == password) {
                    console.log('did you mean to sign in instead?');
                    error.innerText = "User already exists, did you mean to sign in instead?"
                    addNewUser = false;
                    break;
                }
                else if (usernameInput.value == username) {
                    console.log('user already exists, try a different username');
                    error.innerText = "This name is taken :("
                    addNewUser = false;
                    break
                }

                else if (usernameInput.value != username) {
                    console.log('ingen user hittades, ny skall skapas')
                    addNewUser = true;
                }
            }
        }
    }

    if (addNewUser == true) {

        const createUser = {
            username: usernameInput.value,
            password: passwordInput.value,
            avatar: userAvatar,
        }

        addUser(createUser);

        async function addUser(obj: object) {

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
        setTimeout(() => {
            // location.assign('./html/profile.html')
            window.location.href = "./html/profile.html"; 
        }, 600)
    }
}

