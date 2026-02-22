/* 👽 Alien Intro */
window.addEventListener("load",()=>{
setTimeout(()=>{
document.getElementById("alienOverlay").style.opacity="0";
setTimeout(()=>{
document.getElementById("alienOverlay").style.display="none";
},1500);
},3000);
});

/* 🛸 Contact Animation */
const contact=document.getElementById("contact");
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
contact.classList.add("show-contact");
}
});
});
observer.observe(contact);

/* 🔊 Neon Sound */
const neonSound=document.getElementById("neonSound");
document.querySelectorAll(".social").forEach(btn=>{
btn.addEventListener("mouseenter",()=>{
neonSound.currentTime=0;
neonSound.play();
});
});

/* 💥 Light Explosion */
document.querySelectorAll(".social").forEach(btn=>{
btn.addEventListener("click",()=>{
const flash=document.createElement("span");
flash.className="flash";
btn.appendChild(flash);
setTimeout(()=>flash.remove(),500);
});
});

/* 🌠 Sparks */
const canvas=document.getElementById("sparkCanvas");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let sparks=[];
function createSpark(){
sparks.push({
x:Math.random()*canvas.width,
y:canvas.height,
size:Math.random()*3,
speed:Math.random()*2+1
});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
sparks.forEach((s,i)=>{
s.y-=s.speed;
ctx.fillStyle="cyan";
ctx.beginPath();
ctx.arc(s.x,s.y,s.size,0,Math.PI*2);
ctx.fill();
if(s.y<0)sparks.splice(i,1);
});
requestAnimationFrame(animate);
}

setInterval(createSpark,100);
animate();
