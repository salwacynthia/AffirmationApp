

const name = ["You have power over your mind—not outside events. Realize this, and you will find strength", 
              "Today, I am brimming with energy and overflowing with joy.", 
             "I have been given endless talents which I begin to utilize today.",
              "A river of compassion washes away my anger and replaces it with love.", 
              "Happiness is a choice. I base my happiness on my own accomplishments and the blessings I've been given.",
              "My ability to conquer my challenges is limitless; my potential to succeed is infinite.",
              "Today, I abandon my old habits and take up new, more positive ones.",
              "I am blessed with an incredible family and wonderful friends.",
              "I acknowledge my own self-worth; my confidence is soaring.",
              "My future is an ideal projection of what I envision now.",
              "I love and accept myself for who I am.",
              "I am a great employee! Any employer is very lucky to have me!",
              "I am an asset to any organization.",
              " My confidence is superb! A great opportunity arrives in my life today!",
              "I am ready to work! I am ready to contribute! I am ready to shine high!",
              " Every NO for the wrong job gets me closer to the 'YES' that is perfect for me!",
              "I am attracting the right work into my life.",
              "I have something special to offer the world."              

            ];


console.log(name);
const background = ["im/2.png","im/2.png","im/3.png","im/4.png","im/6.png","im/10.png",
                    "im/12.png","im/15.png","im/16.png","im/17.png",
                  "im/18.jpg","im/14.jpg",,
                  "im/7.jpg","im/4.jpg", "im/19.jpg","im/20.jpg"];

const getRandomName = ()=>
  `${name[Math.floor(Math.random()* name.length)]}`;

const setRandomName =() =>{
    document.getElementById('random-name').innerText = getRandomName();
        console.log("set random name")
        
}

function changeColor(){
    const getcolor = `${background[Math.floor(Math.random()* background.length)]}`
    document.querySelector("body").style.backgroundImage = `url("${getcolor}")`;
    // or
    // document.querySelector("body").style.backgroundImage = 'url("' + getimage + '")';
    console.log(getcolor)
    }


 
function makechange () {
    
    setRandomName();
    changeColor();

  

 }

document.getElementById('button').addEventListener('click', makechange);
