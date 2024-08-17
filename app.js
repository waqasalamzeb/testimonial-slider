const persons = [
    {
        name: "Shradda",
        designation: "Actress",
        img: "2.jpg",
        title: "Shraddha Kapoor is an Indian actress who primarily works in Hindi films. One of India's highest-paid actresses, Kapoor has been featured in Forbes India's Celebrity 100 list since 2014 and was featured by Forbes Asia in their 30 Under 30 list of 2016.",
    },
    {
        name: "Shahid Kapoor",
        designation: "Actor",
        img: "1.jpg",
        title: "Shahid Kapoor is an Indian actor who appears in Hindi films. Initially recognised for portraying romantic roles, he has since taken on parts in action films and thrillers, and is the recipient of several awards, including three Filmfare Awards.orem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolor cupiditate reiciendis distinctio ut quas ratione sit. Expedita, optio sint?",
    },
    {
        name: "Hania Amir",
        designation: "Actress",
        img: "3.jpg",
        title: "Hania Amir is a Pakistani actress who appears in Urdu films and television series. Her appearance in the sunsilk commercial made her one of the most sought-out media personalities in Pakistan.",
    },
    {
        name: "Shahrukh Khan",
        designation: "Actor",
        img: "4.jpg",
        title: "Shah Rukh Khan, also known by the initialism SRK, is an Indian actor and film producer who works in Hindi cinema. Referred to in the media as the 'Baadshah of Bollywood' and 'King Khan', he has appeared in more than 100 films, and earned numerous accolades, including 14 Filmfare Awards."
    },
];

const img = document.querySelector(".person-img");
const name = document.querySelector(".name");
const surprise = document.querySelector(".surprise");
const desig = document.querySelector(".designation");
const title = document.querySelector(".title");
const righticon = document.querySelector(".forward");
const lefticon = document.querySelector(".backward");
let current = 0;

window.addEventListener("DOMContentLoaded", () => {
    showperson(current);
});

function showperson() {
    const item = persons[current];
    img.src = item.img; 
    title.textContent = item.title;
    name.textContent = item.name;
    desig.textContent = item.designation;
}

righticon.addEventListener("click", () => {
    current++;
    if (current > persons.length - 1) {
        current = 0;
    }
    showperson();
});

lefticon.addEventListener("click", () => {
    current--;
    if (current < 0) {
        current = persons.length - 1;
    }
    showperson();
});

surprise.addEventListener("click", () => {
    current = Math.floor(Math.random() * persons.length);
    showperson();
});
