const tools=[
 {name:"Windows Cleaner",cat:"windows",icon:"🧹",desc:"Dọn file tạm và cache phổ biến của Windows, không đụng file cá nhân.",size:"3 KB",file:"Windows_Cleaner.bat"},
 {name:"Windows Optimize",cat:"windows",icon:"⚡",desc:"Một số thiết lập tối ưu nhẹ và an toàn, ưu tiên giữ ổn định hệ thống.",size:"4 KB",file:"Windows_Optimize.bat"},
 {name:"SSD Optimize",cat:"ssd",icon:"💾",desc:"Kiểm tra TRIM và chạy tối ưu hóa ổ đĩa bằng công cụ tích hợp Windows.",size:"3 KB",file:"SSD_Optimize.bat"},
 {name:"Network Fix",cat:"network",icon:"🌐",desc:"Làm mới DNS và Winsock để xử lý một số lỗi mạng thông thường.",size:"2 KB",file:"Network_Fix.bat"},
 {name:"BlueStacks Optimize",cat:"emulator",icon:"🎮",desc:"Thiết lập nguồn điện và dọn cache cơ bản trước khi chạy BlueStacks.",size:"3 KB",file:"BlueStacks_Optimize.bat"},
 {name:"Restore Default",cat:"windows",icon:"↩️",desc:"Khôi phục các thiết lập nguồn điện về mặc định của Windows.",size:"2 KB",file:"Restore_Default.bat"}
];
const grid=document.getElementById("toolGrid"), search=document.getElementById("search"), filters=document.getElementById("filters"), toast=document.getElementById("toast");
let active="all";
function render(){
 const q=search.value.toLowerCase().trim();
 grid.innerHTML=tools.filter(t=>(active==="all"||t.cat===active)&&(t.name+" "+t.desc).toLowerCase().includes(q)).map((t,i)=>`
 <article class="card">
   <div class="icon">${t.icon}</div><h3>${t.name}</h3><p>${t.desc}</p>
   <div class="meta"><span>${t.file}</span><span>${t.size}</span></div>
   <button class="download" data-file="${t.file}">TẢI SHELL ↓</button>
 </article>`).join("") || `<p style="color:#777">Không tìm thấy công cụ.</p>`;
 document.querySelectorAll(".download").forEach(b=>b.onclick=()=>download(b.dataset.file));
}
function download(file){
 const a=document.createElement("a"); a.href="files/"+encodeURIComponent(file); a.download=file; document.body.appendChild(a); a.click(); a.remove();
 toast.textContent="Đang tải "+file; toast.classList.add("show"); setTimeout(()=>toast.classList.remove("show"),2200);
}
search.addEventListener("input",render);
filters.addEventListener("click",e=>{if(e.target.tagName==="BUTTON"){document.querySelectorAll(".filters button").forEach(x=>x.classList.remove("active"));e.target.classList.add("active");active=e.target.dataset.filter;render();}});
render();

const canvas=document.getElementById("particles"),ctx=canvas.getContext("2d");let pts=[];
function resize(){canvas.width=innerWidth;canvas.height=innerHeight;pts=Array.from({length:Math.min(80,Math.floor(innerWidth/18))},()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,s:Math.random()*1.5+.3,v:(Math.random()-.5)*.18}))}
function animate(){ctx.clearRect(0,0,canvas.width,canvas.height);pts.forEach(p=>{p.y+=p.v;if(p.y<0)p.y=canvas.height;if(p.y>canvas.height)p.y=0;ctx.beginPath();ctx.arc(p.x,p.y,p.s,0,Math.PI*2);ctx.fillStyle="rgba(160,180,255,.45)";ctx.fill()});requestAnimationFrame(animate)}
addEventListener("resize",resize);resize();animate();