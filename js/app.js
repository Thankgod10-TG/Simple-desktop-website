const hambuger =  document.getElementById("hambuger");
const navUl = document.getElementById("nav-ul");

hambuger.addEventListener('click', () =>{
    navUl.classList.toggle('show');
});

function add_class() {
    var element = document.getElementById("hambuger");
    element.classList.toggle("active");
}
