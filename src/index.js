// import './styles/global.css';

import home from "./modules/home.js";
import menu from "./modules/menu.js";
import contact from "./modules/contact.js";

const tabs = [
    {
        name: 'Home',
        callback: home
    },
    {
        name: 'Menu',
        callback: menu
    },
    {
        name: 'Contact',
        callback: contact
    }
];

const createTabs = (tabs) => {
    console.log('createTabs');

    const header = document.getElementById('header');
    const content = document.getElementById('content');

    const tabsContainer = document.createElement('div');

    tabs.forEach((tab) => {
        const tabElement = document.createElement('button');
        tabElement.textContent = tab.name;

        tabElement.addEventListener('click', () => {
            content.innerHTML = '';
            tab.callback();
        });

        tabsContainer.appendChild(tabElement);
    })

    header.appendChild(tabsContainer);

    tabs[0].callback();
}

createTabs(tabs);