const name = ["Aiman", "Farabi", 
             "Masud",
             "Shivan","Cynthia",
             "Shumi","Nasir","Kanta","Nazmul",
             "Sujon",
             "Mou", "Maruf", "Rifat", "Mizan",
             "Mainul", "Hira", "Mishu", "Sabbir",
             "Sima", "Rejaul", "Zahurul", "Shakila", 
             "Aniqa", "Mehbub"
        
        ];

const getRandomName = ()=> 
   `${name[Math.floor(Math.random()* name.length)]}`;


console.log(getRandomName());
const setRandomName = () => {
    document.getElementById('random-name')
        .innerText = getRandomName();
}

document.getElementById('button')
    .addEventListener('click', setRandomName);
