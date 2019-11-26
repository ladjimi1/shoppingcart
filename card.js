let deleteBtns = document.querySelectorAll('.icone');
let plusBtns = document.querySelectorAll('.plus')
let moinsBtns = document.querySelectorAll('.moin')
let totalBtn = document.querySelector('.total')
let hearts = document.querySelectorAll('.fa-heart')

plusBtns.forEach(onePlus => {
    onePlus.addEventListener('click', function(){
        onePlus.nextElementSibling.innerHTML++;
        let a= onePlus.parentNode.nextSibling.nextSibling.innerHTML;
     console.log(a);
     let price=a.replace('$','');
     console.log(price);
     let b=  document.querySelector(".total").innerHTML.replace('$','');
     console.log(b);
     z=parseInt(b)+parseInt(price);
     console.log(z);
     document.querySelector(".total").innerHTML=z +"$";

    })
    
})
moinsBtns.forEach(moinBtn => {
    moinBtn.addEventListener('click', function(){
        if(moinBtn.previousElementSibling.innerHTML > 0){
            moinBtn.previousElementSibling.innerHTML--
        }
        let a= moinBtn.parentNode.nextSibling.nextSibling.innerHTML;
     console.log(a);
     let price=a.replace('$','');
     console.log(price);
     let b=  document.querySelector(".total").innerHTML.replace('$','');
     console.log(b);
     z=parseInt(b)-parseInt(price);
     console.log(z);
     document.querySelector(".total").innerHTML=z +"$";

    })
    
})

deleteBtns.forEach(x => {
    x.addEventListener('click', function(){
        x.parentElement.parentElement.remove()
    })
})


hearts.forEach(heart => {
    heart.addEventListener('click', function(){
        heart.classList.toggle('red-heart')
    })
})
//plusBtns.forEach(y => {
  //  y.addEventListener('clik', function(){
  //  y.nextElementSibling.parentElement.nextElementSibling.innerHTML=totalBtn

    
//})

