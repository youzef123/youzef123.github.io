

$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('.navbar').addClass('sticky')
    } else{
        $('.navbar').removeClass('sticky')
    }
});

const ref = [...document.querySelectorAll(".scroll-footer")];
ref.map(link => {
    if (!link) return;
    link.addEventListener("click", e => {
      window.scrollTo(0, 600);
      e.preventDefault();  
     
    });
  });
