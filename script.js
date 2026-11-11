const countdown = document.getElementById('countdown');
const start = new Date('2026-11-14T00:00:00+10:00').getTime();
const end = new Date('2026-11-16T00:00:00+10:00').getTime();
function updateCountdown(){
  const now=Date.now();
  if(now>=end){countdown.innerHTML='<span class="status">💜 Thank you for an amazing GBR Meet!</span>';return;}
  if(now>=start){countdown.innerHTML='<span class="status">🏊 The GBR Meet is on now! Good luck, swimmers!</span>';return;}
  let seconds=Math.floor((start-now)/1000);
  const days=Math.floor(seconds/86400);seconds%=86400;
  const hours=Math.floor(seconds/3600);seconds%=3600;
  const minutes=Math.floor(seconds/60);seconds%=60;
  countdown.innerHTML=[['DAYS',days],['HOURS',hours],['MINS',minutes],['SECS',seconds]].map(([label,n])=>`<div class="unit"><strong>${String(n).padStart(2,'0')}</strong><small>${label}</small></div>`).join('');
}
updateCountdown();setInterval(updateCountdown,1000);
const dialog=document.getElementById('posterDialog');
document.getElementById('openPoster').addEventListener('click',()=>dialog.showModal());
document.getElementById('closePoster').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
