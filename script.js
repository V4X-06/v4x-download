const files=[
{id:1,name:"V4X PC Optimizer",cat:"tool",icon:"⚡",desc:"Bộ công cụ tối ưu Windows cơ bản, giao diện V4X.",size:"12 MB",ver:"1.0",url:"https://example.com/v4x-pc-optimizer.zip"},
{id:2,name:"V4X Game Booster",cat:"tool",icon:"🚀",desc:"Công cụ hỗ trợ tối ưu trải nghiệm chơi game.",size:"8 MB",ver:"1.0",url:"https://example.com/v4x-game-booster.zip"},
{id:3,name:"V4X Windows Tools",cat:"windows",icon:"🪟",desc:"Tập hợp tiện ích Windows thường dùng.",size:"15 MB",ver:"1.0",url:"https://example.com/v4x-windows-tools.zip"},
{id:4,name:"V4X Emulator Pack",cat:"emulator",icon:"📱",desc:"Bộ tài nguyên mẫu dành cho người dùng giả lập.",size:"25 MB",ver:"1.0",url:"https://example.com/v4x-emulator-pack.zip"},
{id:5,name:"V4X Wallpaper Pack",cat:"tool",icon:"🎨",desc:"Bộ hình nền phong cách gaming neon V4X.",size:"80 MB",ver:"1.0",url:"https://example.com/v4x-wallpaper-pack.zip"},
{id:6,name:"V4X Gaming Config",cat:"game",icon:"🎮",desc:"Cấu hình mẫu cho khu vực tải game và gaming.",size:"5 MB",ver:"1.0",url:"https://example.com/v4x-gaming-config.zip"},
{id:7,name:"V4X Windows Cleaner",cat:"windows",icon:"🧹",desc:"Tiện ích dọn dẹp các file tạm thông thường.",size:"6 MB",ver:"1.0",url:"https://example.com/v4x-windows-cleaner.zip"},
{id:8,name:"V4X BlueStacks Pack",cat:"emulator",icon:"🔥",desc:"Tài nguyên mẫu cho mục Emulator.",size:"18 MB",ver:"1.0",url:"https://example.com/v4x-bluestacks-pack.zip"}
];

const names={game:"GAME",tool:"TOOL",windows:"WINDOWS",emulator:"EMULATOR"};
let active="all";
const grid=document.getElementById("fileGrid"),search=document.getElementById("search"),empty=document.getElementById("empty");

function safe(s){const d=document.createElement("div");d.textContent=s;return d.innerHTML}
function render(){
 const q=search.value.trim().toLowerCase();
 const list=files.filter(f=>(active==="all"||f.cat===active)&&`${f.name} ${f.desc}`.toLowerCase().includes(q));
 grid.innerHTML=list.map(f=>`
 <article class="card">
  <div class="icon">${f.icon}</div><span class="tag">${names[f.cat]}</span>
  <h3>${safe(f.name)}</h3><p>${safe(f.desc)}</p>
  <div class="meta"><span>📦 ${f.size}</span><span>v${f.ver}</span></div>
  <div class="card-actions"><button class="btn secondary detail" data-id="${f.id}">Chi tiết</button><a class="btn primary" href="${f.url}" target="_blank" rel="noopener">Tải</a></div>
 </article>`).join("");
 empty.classList.toggle("hidden",list.length>0);
 document.querySelectorAll(".detail").forEach(b=>b.onclick=()=>openModal(+b.dataset.id));
 document.getElementById("count").textContent=files.length;
}
function openModal(id){
 const f=files.find(x=>x.id===id);if(!f)return;
 document.getElementById("mIcon").textContent=f.icon;
 document.getElementById("mCat").textContent=names[f.cat];
 document.getElementById("mTitle").textContent=f.name;
 document.getElementById("mDesc").textContent=f.desc;
 document.getElementById("mSize").textContent="📦 "+f.size;
 document.getElementById("mVer").textContent="🔖 v"+f.ver;
 document.getElementById("mDownload").href=f.url;
 document.getElementById("modal").classList.remove("hidden");
}
function closeModal(){document.getElementById("modal").classList.add("hidden")}
document.querySelectorAll(".category").forEach(b=>b.onclick=()=>{document.querySelectorAll(".category").forEach(x=>x.classList.remove("active"));b.classList.add("active");active=b.dataset.category;render()});
search.oninput=render;
document.getElementById("close").onclick=closeModal;
document.getElementById("modal").onclick=e=>{if(e.target.id==="modal")closeModal()};
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
document.getElementById("menuBtn").onclick=()=>document.getElementById("nav").classList.toggle("open");
document.querySelectorAll("nav a").forEach(a=>a.onclick=()=>document.getElementById("nav").classList.remove("open"));
document.getElementById("year").textContent=new Date().getFullYear();
render();
