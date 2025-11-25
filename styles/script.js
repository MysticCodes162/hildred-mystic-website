// Simple scripts: apply typing effect then remove caret
document.addEventListener('DOMContentLoaded', function(){
  const title = document.querySelector('.title');
  if(title){
    // start as typing
    title.classList.add('typing');
    // stop typing animation after 4s
    setTimeout(()=> title.classList.remove('typing'), 4200);
  }

  // small hover glow for cards
  document.querySelectorAll('.card').forEach(card=>{
    card.addEventListener('mouseenter', ()=> card.style.boxShadow = '0 10px 50px rgba(255,80,0,0.12)');
    card.addEventListener('mouseleave', ()=> card.style.boxShadow = '');
  });
});
