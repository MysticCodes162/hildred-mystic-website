// small helper file for mystic page interactions
window.toggleFact = function(el){
  const a = el.querySelector('.a');
  if(!a) return;
  a.style.display = a.style.display === 'block' ? 'none' : 'block';
};
