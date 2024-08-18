const box = document.querySelector('.box')
console.log(box);

const body = document.querySelector('body')



const color = prompt('Выберите тему: светлая или темная')

if(color === 'светлая'){
    box.classList.add('white')
    body.classList.add('white2')
}else if(color === 'темная'){
    box.classList.add('black')
    body.classList.add('transfusion')
} else{
    alert('неправленый цвет')
}



const title = document.querySelector('h1')

if(color){
    title.textContent = color
} else{
    alert('ничего не написано')
}
