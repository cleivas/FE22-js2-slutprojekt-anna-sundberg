export async function viewProfile(avatar, user, img:HTMLImageElement, username:HTMLElement) {
    img.src = avatar;
    username.innerText = user;
}

