window.addEventListener('load',()=>{setTimeout(() =>{

    document.getElementById('loader').style.display='none';
    },2000);
});

let current=0;
const items=document.querySelectorAll('.carousel-item');

setInterval(()=>{
    items[current].classList.remove('active');
    current=(current+1)% items.length;
    items[current].classList.add('active');
},4000);

const toggle=document.getElementById('.toggleDark');
toggle.addEventListener('change',()=>{document.body.classList.toggle('dark');});