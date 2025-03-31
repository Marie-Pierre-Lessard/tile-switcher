// Opgave: du skal skrive følgende i javascript:
// en variabel, der indeholder en reference til det store billede.
// tilføj en event handler til hvert af de små billeder, der kan finde URL på det klikkede billede, og skifte det med URL på det store billede.
// Du skal tage udgangspunkt i dette Template Repo. 
// (The template did switch the pictures around, but the teacher wants me to write a more compact script by using the forEach method.)

let mainImage = document.getElementById('mainImage')

let smallImageOne = document.getElementById('imgOne')
let smallImageTwo = document.getElementById('imgTwo')
let smallImageThree = document.getElementById('imgThree')
let smallImageFour = document.getElementById('imgFour')


// STUDENT'S NOTE: THE FOLLOWING IS NOT DRY, BUT IT WORKS.

// smallImageOne.addEventListener('click', function (event) {

//     let bigImageUrl = mainImage.src
//     let smallImageUrl = smallImageOne.src


//     mainImage.src = smallImageUrl
//     smallImageOne.src = bigImageUrl

// })

// smallImageTwo.addEventListener('click', function (event) {

//     let bigImageUrl = mainImage.src
//     let smallImageUrl = smallImageTwo.src


//     mainImage.src = smallImageUrl
//     smallImageTwo.src = bigImageUrl

// })

// smallImageThree.addEventListener('click', function (event) {

//     let bigImageUrl = mainImage.src
//     let smallImageUrl = smallImageThree.src


//     mainImage.src = smallImageUrl
//     smallImageThree.src = bigImageUrl

// })

// smallImageFour.addEventListener('click', function (event) {

//     let bigImageUrl = mainImage.src
//     let smallImageUrl = smallImageFour.src


//     mainImage.src = smallImageUrl
//     smallImageFour.src = bigImageUrl

// })

// DRIER CODE WITH THE forEach METHOD 

let spicePictures=document.querySelectorAll('.spice-pics');

spicePictures.forEach((img) => {
    img.addEventListener('click', function (event) {
        console.log(event.target.src);
        let bigImageUrl = mainImage.src;
        let smallImageUrl=event.target.src;
        mainImage.src=smallImageUrl;
        event.target.src=bigImageUrl;
    }); 
  });
