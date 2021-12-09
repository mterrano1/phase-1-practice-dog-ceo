// console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', getDogPics);

function getDogPics(){
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(res => res.json())
    .then(data => {
        let dogList = data.message
        dogList.forEach(dog => renderDogImg(dog))
    })
};

function renderDogImg(dog){
    const div = document.querySelector('div');
    const dogImg = document.createElement('img');
    dogImg.src = dog
        div.appendChild(dogImg);
        dogImg.width = 200;
        dogImg.height = 200;
};

function getBreeds(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => {
        let breedList = data.message
        for (breed in breedList){
            renderBreed(breed)
        }
    })
};

function renderBreed(breed){
    const ul = document.querySelector('#dog-breeds');
    const li = document.createElement('li');
    li.innerText = breed
    ul.appendChild(li)
};

getBreeds();
