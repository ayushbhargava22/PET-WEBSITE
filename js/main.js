function doginfo()
{
    var dogname = document.getElementById("dogname").value;
    localStorage.setItem("textvalue", dogname) ;
    return false;
   
}

const op1 = document.getElementById('ge')
const btn = document.querySelectorAll('.op1')
btn.forEach(el => {
    el.addEventListener('click', function() {
        op1.querySelector('.active').classList.remove('active') ;
        el.classList.add('active')
    });
});

const opp = document.getElementById('opp2active')
const btnboy = document.querySelectorAll('.boyop1')
btnboy.forEach(ell => {
    ell.addEventListener('click', function() {
        opp.querySelector('.active').classList.remove('active')
        ell.classList.add('active')
    })
})

document.getElementById("btn1").addEventListener('click', function() {
    var box1 = document.getElementById("boyop")
    if(box1.style.display=="none")
    {
        box1.style.display = "block"
    }
    else
    {
        box1.style.display = "none"
    }
})
document.getElementById("btn2").addEventListener('click', function() {
    var box1 = document.getElementById("girlop")
    if(box1.style.display=="none")
    {
        box1.style.display = "block"
    }
    else
    {
        box1.style.display = "none"
    }
})







