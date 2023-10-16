const home = function () {
    console.log('home');
    const content = document.getElementById('content'); // Get the div with id="content"
    const homeContainer = document.createElement('div'); // Create a div

    homeContainer.appendChild(title('The best restaurant in the world'));
    homeContainer.appendChild(descritpion());
    homeContainer.appendChild(location());

    content.appendChild(homeContainer); // Append the div to the content div

}

function title(inputTitle) {
    const element = document.createElement('h1');
    element.id = 'title';
    element.innerHTML = inputTitle;

    return element;
}

function descritpion() {
    const element = document.createElement('p');
    element.id = 'description';
    element.innerHTML = 'We are the best restarant in the world. You dont think so? I will hynotize you then!';

    return element;
}

function location() {
    const element = document.createElement('p');
    element.id = 'location';
    element.innerHTML = 'We have branches in Prague and Istanbul. Ask anyone, they will show you the way.';

    return element;
}

export default home;