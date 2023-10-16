const contact = () => {
    const content = document.getElementById('content');

    const contactContainer = document.createElement('div');
    const contactTitle = document.createElement('h2');
    const contactInfo = document.createElement('p');

    contactTitle.textContent = 'Contact';
    contactInfo.textContent = 'You can contact us at: burakalaydin@gmail.com';

    contactContainer.appendChild(contactTitle);
    contactContainer.appendChild(contactInfo);

    content.appendChild(contactContainer);
};

export default contact;