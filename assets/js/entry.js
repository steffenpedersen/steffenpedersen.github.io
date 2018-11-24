// TODO: Add comments

const container = document.querySelector('.c-open-source');
const request = new XMLHttpRequest();

request.open('GET', 'https://api.github.com/users/steffenpedersen/repos?sort=updated', true);

request.onload = function () {

    let data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {

        const repositories = [
            "coding-music",
            "dotfiles",
            "stay-healthy",
            "steffenpedersen.github.io",
            "svg-to-sass-variables"
        ];

        // Filter out repositories
        data = data.filter((a) => {
            return repositories.includes(a.name);
        });

        data.forEach(function (rep) {
            const card = document.createElement('div');
            card.setAttribute('class', 'c-open-source__item');

            const h3 = document.createElement('h3');
            h3.textContent = rep.name;

            const p = document.createElement('p');
            p.textContent = rep.description;

            if (container && card) {
                container.appendChild(card);
                card.appendChild(h3);
                card.appendChild(p);
            }
        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = "Gah, it's not working!";

        if(container) {
            container.appendChild(errorMessage);
        }
    }
}

request.send();
