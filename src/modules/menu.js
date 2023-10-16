const menu = () => {
    const content = document.getElementById('content');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Menu';

    const menuList = document.createElement('ul');
    menuList.classList.add('menu-list');

    const menuItem1 = document.createElement('li');
    menuItem1.innerHTML = '<h3>Appetizers</h3><p>Some description of the appetizers.</p>';

    const menuItem2 = document.createElement('li');
    menuItem2.innerHTML = '<h3>Main Course</h3><p>Some description of the main course.</p>';

    const menuItem3 = document.createElement('li');
    menuItem3.innerHTML = '<h3>Desserts</h3><p>Some description of the desserts.</p>';

    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);

    menuContainer.appendChild(menuTitle);
    menuContainer.appendChild(menuList);

    content.appendChild(menuContainer);
};

export default menu;
