// getting handles

const button = document.querySelector('.btn');
const colorContainer = document.querySelector('.color-section');
const spanName = document.querySelector('.colors');

// Array of different colors 

const colors = ["red","green","blue","violet","salmon","lightgreen","lightsalmon","darkblue","coral","indianred"];



//getting random colors form colors array 

const randomColors = ()=>{
    
    return colors[Math.floor(Math.random()*colors.length)];
    
}

// adding an event listner to perform actions


button.addEventListener('click',()=>{

    const color = randomColors();
    colorContainer.style.backgroundColor = color;
    spanName.innerHTML = color;

})