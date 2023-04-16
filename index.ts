import { url } from "./src/modules/firebase";
import { firebaseUser } from "./src/modules/firebase";

let userAvatar:string = '';

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
let newUser: boolean = false;
signUp.addEventListener('click', () => {
    newUser = true;
    signUp.style.display = 'none'; 
    signInDiv.style.display = 'flex';
    const avatarDiv = document.createElement('div');
    console.log("OK, du ska skapa en user");
    signIn.style.display = 'none';
    submitBtn.innerText = "Create User";
    const koala = document.createElement('img');
    let koalaUrl = new URL('./src/media/koala.svg', import.meta.url);
    koala.src = koalaUrl.href;

    const duck = document.createElement('img');
    let duckUrl = new URL('./src//media/duck.svg', import.meta.url);
    duck.src = duckUrl.href;

    const penguin = document.createElement('img');
    let penguinUrl = new URL('./src/media/penguin.svg', import.meta.url);
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
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    checkUser();
})

let addNewUser: boolean = false;
async function checkUser() {
    let usernameInput = document.querySelector('#username') as HTMLInputElement;
    let passwordInput = document.querySelector('#password') as HTMLInputElement;

    const response = await fetch(url + '.json');
    const data = await response.json();
    console.log(data);
    const usersArray = Object.values(data);
    const keyArr = Object.keys(data);

    if (newUser == false) {
        

        for (let i = 0; i < usersArray.length; i++) {
            
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
                    // window.location.href = "../html/profile.html"
                location.assign("src/html/profile.html");
                }, 400);
                break
            }
            
            else
                console.log('ingen user hittades')
        }
    }
    else if (newUser == true) {
        for (let i = 0; i < usersArray.length; i++) {
            //TS klagar här men det fungerar ändå:
            const { username, password, avatar } = usersArray[i];

            console.log(usernameInput.value, username, passwordInput.value, password);

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
            window.location.href = "src/html/profile.html"
            // location.assign('../html/profile.html')
        }, 600)
    }
}


