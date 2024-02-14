export default class UserCard {
    constructor({login, avatar_url}) {
        this.login = login;
        this.avatar_url = avatar_url;
        return this.render();
    }
    render() {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('userCard');
        
        const image = document.createElement('img');
        image.setAttribute('src', this.avatar_url);
        image.setAttribute('alt', 'avatar picture');

        const loginInfo = document.createElement('h1');
        loginInfo.textContent = this.login;

        cardDiv.append(image, loginInfo);
        return cardDiv;
    }
}