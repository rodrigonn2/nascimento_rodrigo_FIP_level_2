/*TESTIMONIALS*/
const billy_sayCon = document.querySelector("#billy_say-con");

const billy_says = [
    { name: "John Calleri", billy_say: "When Rodrigo told me about Billy Beer and the work to rescue the brand, I didn't believe it. After I had the beer, man...Now it's my favorite forever. Great looking too. I believe that the work carried out was very difficult but very rewarding and Rodrigo is very proud to have completed it. Oh and by the way, Alfredo the Pug was incredible in this process, I must say. He's a good boy.", image: "images/testimonials/john.png" },
    { name: "Fernanda Medina (Love of my life)", billy_say: "Billy Beer initially caught my attention. Very American, well done campaign, I believe it is one of the best beer I have ever had. Rodrigo spent many sleepless nights but always tells me that he is very happy with the project.My love, thank you for being by my side. I know it hasn't been easy and maybe even more difficult than we thought, but I'm grateful every day for having you by my side. Thank you for so much and in these next 4 months we are going to have a lot of fun. I love you I love you I love you.", image: "images/testimonials/fernanda.png" },
    { name: "Paul Simmons", billy_say: "If you haven't tried Billy Beer yet, you're wasting your time. Its flavor is indescribable and its lightness is unique. Unlike the first version, this beer has everything it needs to be the favorite beer of North Americans and why not all over the world. Your brand is fun and a lifestyle I want to lead for myself. Here's to a cold Billy Beer in the summer.", image: "images/testimonials/paul.png" },
    { name: "Sandra Owen", billy_say: "Billy beer won me over from the start. When I saw the brand on the market, I thought it could be just another beer but I gave it a chance. One of my best decisions since Billy's lightness and flavor are different from anything I've ever tasted in terms of beers. It was a great journey for Rodrigo to recover the brand. Really American. A toast to Billy beer", image: "images/testimonials/sandra.png" }

];

let count = 0;
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

function displayBilly_saying() {
    const billy_sayDiv = document.createElement("div");
    billy_sayDiv.classList.add("billy_say-container");


    const imageDiv = document.createElement("div");
    imageDiv.classList.add("billy_say-image-container");

  
    const billy_sayImage = document.createElement("img");
    billy_sayImage.src = billy_says[count].image;
    billy_sayImage.alt = billy_says[count].name;
    billy_sayImage.classList.add("billy_say-image", "col-span-full", "m-col-start-1", "m-col-end-6");


    billy_sayImage.style.maxWidth = "100%";
    billy_sayImage.style.height = "auto";


    imageDiv.appendChild(billy_sayImage);

  
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("billy_say-content", "col-span-full", "m-col-start-9", "m-col-end-13");


    const billy_sayParagraph = document.createElement("p");
    billy_sayParagraph.textContent = billy_says[count].billy_say;

    const billy_sayName = document.createElement("h3");
    billy_sayName.textContent = billy_says[count].name;


    contentDiv.appendChild(billy_sayParagraph);
    contentDiv.appendChild(billy_sayName);


    billy_sayDiv.appendChild(imageDiv);
    billy_sayDiv.appendChild(contentDiv);

   
    billy_sayCon.innerHTML = "";


    billy_sayCon.appendChild(billy_sayDiv);
}

function nextBilly_saying() {
    count++;
    if (count >= billy_says.length) {
        count = 0;
    }
    displayBilly_saying();
}

function previousBilly_saying() {
    count--;
    if (count < 0) {
        count = billy_says.length - 1;
    }
    displayBilly_saying();
}


displayBilly_saying();


next.addEventListener("click", nextBilly_saying);
previous.addEventListener("click", previousBilly_saying);