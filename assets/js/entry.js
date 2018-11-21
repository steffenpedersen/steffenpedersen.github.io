// TODO: This should be written into ES2015

var container = document.querySelector('.c-open-source');

// TODO: Add comments

var request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/users/steffenpedersen/repos?sort=updated', true);
request.onload = function () {

    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.forEach(function (rep) {
            // TODO: Filter out selected repositories

            var card = document.createElement('div');
            card.setAttribute('class', 'c-open-source__item');

            var h3 = document.createElement('h3');
            h3.textContent = rep.name;

            var p = document.createElement('p');
            p.textContent = rep.description;

            if(container && card) {
                container.appendChild(card);
                card.appendChild(h3);
                card.appendChild(p);
            }
        });
    } else {
        var errorMessage = document.createElement('marquee');
        errorMessage.textContent = "Gah, it's not working!";

        if(container) {
            container.appendChild(errorMessage);
        }
    }
}

request.send();
