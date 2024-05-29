// home.js
// open Menu
function openNav() {
    document.getElementById('myNav').style.width = "70%";
  }
  
  // close Menu
  function closeNav() {
    document.getElementById('myNav').style.width = "0%";
  }
  
  // login btn 
  let loginBtn = document.querySelector(".login-btn");
  loginBtn.addEventListener('click', () => {
    window.location.href = "login.html";
  });


// cart btn
let cartBtn = document.querySelector(".cart-btn")
cartBtn.addEventListener('click' , ()=>{
    if(!localStorage.getItem('email')){
        Swal.fire({
            icon: "error",
            title: "! خطا",
            text: "شما ابتدا باید لاگین بکنید",
          });
          return
    }
})


let startBtn = document.querySelector('.start-btn')
const borderElements = document.querySelectorAll(".make-border")
borderElements.forEach(borderElement=>{
    borderElement.style.border = '1px solid gray'
})



const AllcoursesHTML = document.getElementById('Allcourses') 
const Allcourses = `
<div class = "Allcourses">
<h2>آخرین آپدیت های دوره رقص کد</h2>
<a href="home.html">
مشاهده تمامی دوره ها
</a>
</div>
`
AllcoursesHTML.insertAdjacentHTML('beforeend' , Allcourses)

// بررسی اینکه اگر لاگین کرده بود دوره هارو نشون بده یا نه 
// if(!localStorage.getItem('email')){
//     AllcoursesHTML.style.display = 'none'
// } else{
//     AllcoursesHTML.style.display = 'flex'
// }

