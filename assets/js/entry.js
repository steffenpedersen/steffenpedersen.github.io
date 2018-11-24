// TODO: Add comments

function make(element , api, ...repositories) {
    // TODO: Please make it prettier at some point

    const container = document.querySelector(element);
    const request = new XMLHttpRequest();

    request.open('GET', api, true);

    request.onload = function () {

        let data = JSON.parse(this.response);

        if (request.status >= 200 && request.status < 400) {

            // Filter out repositories
            data = data.filter((a) => {
                return repositories.includes(a.name);
            });

            data.forEach(function (rep) {
                const card = document.createElement('a');
                card.setAttribute('class', 'c-open-source__item');
                card.setAttribute('href', rep.html_url)

                const heading = document.createElement('h3');
                heading.textContent = rep.name;

                const text = document.createElement('p');
                text.textContent = rep.description;

                if (container && card) {
                    container.appendChild(card);
                    card.appendChild(heading);
                    card.appendChild(text);
                }
            });
        } else {
            const errorMessage = document.createElement('span');
            errorMessage.textContent = "It's not working!";

            if (container) {
                container.appendChild(errorMessage);
            }
        }
    }

    request.send();
}

make('[data-steffenpedersen]',
    'https://api.github.com/users/steffenpedersen/repos?sort=updated',
    'coding-music',
    'dotfiles',
    'stay-healthy',
    'steffenpedersen.github.io',
    'svg-to-sass-variables');

make('[data-bleptek]',
    'https://api.github.com/orgs/bleptek/repos',
    'basic-slides',
    'bemit-boilerplate',
    'granny-grid');