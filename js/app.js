let id_1 = document.getElementById(`unique_1`);

id_1.style.backgroundColor = `black`;
id_1.style.color = `red`;

let titles = document.getElementsByClassName(`titles`);

for (counter = 0; counter < titles.length; counter++) {
    titles[counter].innerHTML = `Changed`;
};

let images = document.querySelectorAll(`img`);

for (counter = 0; counter < images.length; counter++) {
    images[counter].outerHTML = `<img class="images" src="https://images.unsplash.com/photo-1679530988086-556fabca6dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="man walking down stairs" width="300px">`
}

