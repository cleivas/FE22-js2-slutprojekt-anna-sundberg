export async function viewProfile(avatar, user, img:HTMLImageElement, username:HTMLElement) {
    img.src = avatar;
    username.innerText = user;
}

export function showPosts(arr, container:HTMLDivElement) {

    container.innerHTML = '';

    arr.forEach((element: String) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post-card');
        const postTxt = document.createElement('p');
        postTxt.innerText = `${element}`;
        postDiv.append(postTxt)
        container.prepend(postDiv);
    });

}

export function showViewedUsersPosts(arr, container:HTMLDivElement) {
    
    container.innerHTML = '';

    arr.forEach((element: String) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post-card');
        const postTxt = document.createElement('p');
        postTxt.innerText = `${element}`;
        postDiv.append(postTxt)
        container.prepend(postDiv);
    });

}