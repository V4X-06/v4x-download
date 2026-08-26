// ================================
// V4X DOWNLOAD
// ================================

const files = [

  {
    id: 1,
    name: "V4X PC OPTIMIZER",
    category: "windows",
    icon: "⚡",
    description: "Công cụ tối ưu Windows và giảm tiến trình không cần thiết.",
    size: "12 MB",
    version: "V4X V2.0",
    download: "#"
  },

  {
    id: 2,
    name: "V4X BLUE STACKS TOOL",
    category: "emulator",
    icon: "📱",
    description: "Công cụ hỗ trợ quản lý và tối ưu giả lập Android.",
    size: "8 MB",
    version: "V1.5",
    download: "#"
  },

  {
    id: 3,
    name: "V4X WINDOWS CLEANER",
    category: "windows",
    icon: "🧹",
    description: "Dọn file tạm và các dữ liệu Windows không cần thiết.",
    size: "4 MB",
    version: "V1.0",
    download: "#"
  },

  {
    id: 4,
    name: "V4X GAME TOOL",
    category: "game",
    icon: "🎮",
    description: "Bộ công cụ tiện ích dành cho game và gaming PC.",
    size: "15 MB",
    version: "V1.0",
    download: "#"
  },

  {
    id: 5,
    name: "V4X DOWNLOAD TOOL",
    category: "tool",
    icon: "🛠",
    description: "Công cụ tiện ích V4X dành cho người dùng Windows.",
    size: "6 MB",
    version: "V2.1",
    download: "#"
  },

  {
    id: 6,
    name: "V4X EMULATOR TOOL",
    category: "emulator",
    icon: "🚀",
    description: "Công cụ quản lý và tối ưu trải nghiệm giả lập.",
    size: "10 MB",
    version: "V1.2",
    download: "#"
  }

];


// ================================
// ELEMENTS
// ================================

const fileGrid = document.getElementById("fileGrid");
const empty = document.getElementById("empty");
const search = document.getElementById("search");
const count = document.getElementById("count");

const modal = document.getElementById("modal");
const close = document.getElementById("close");

const mIcon = document.getElementById("mIcon");
const mCat = document.getElementById("mCat");
const mTitle = document.getElementById("mTitle");
const mDesc = document.getElementById("mDesc");
const mSize = document.getElementById("mSize");
const mVer = document.getElementById("mVer");
const mDownload = document.getElementById("mDownload");

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");


// ================================
// CATEGORY NAME
// ================================

const categoryNames = {
  game: "GAME",
  tool: "TOOL",
  windows: "WINDOWS",
  emulator: "EMULATOR"
};


// ================================
// RENDER FILES
// ================================

function renderFiles(list) {

  fileGrid.innerHTML = "";

  count.textContent = list.length;

  if (list.length === 0) {
    empty.classList.remove("hidden");
    return;
  }

  empty.classList.add("hidden");

  list.forEach(file => {

    const card = document.createElement("article");

    card.className = "file-card";

    card.innerHTML = `

      <div class="file-top">

        <div class="file-icon">
          ${file.icon}
        </div>

        <span class="tag">
          ${categoryNames[file.category] || "FILE"}
        </span>

      </div>

      <h3>${file.name}</h3>

      <p>
        ${file.description}
      </p>

      <div class="file-meta">

        <span>📦 ${file.size}</span>

        <span>⚡ ${file.version}</span>

      </div>

      <button
        class="file-btn"
        data-id="${file.id}"
      >
        Xem chi tiết →
      </button>

    `;

    fileGrid.appendChild(card);

  });

}


// ================================
// OPEN MODAL
// ================================

function openModal(id) {

  const file = files.find(item => item.id === id);

  if (!file) return;

  mIcon.textContent = file.icon;

  mCat.textContent =
    categoryNames[file.category] || "FILE";

  mTitle.textContent = file.name;

  mDesc.textContent = file.description;

  mSize.textContent = file.size;

  mVer.textContent = file.version;

  mDownload.href = file.download;

  modal.classList.remove("hidden");

  document.body.style.overflow = "hidden";

}


// ================================
// CLOSE MODAL
// ================================

function closeModal() {

  modal.classList.add("hidden");

  document.body.style.overflow = "";

}


// ================================
// FILE BUTTON
// ================================

fileGrid.addEventListener("click", event => {

  const button = event.target.closest(".file-btn");

  if (!button) return;

  const id = Number(button.dataset.id);

  openModal(id);

});


// ================================
// SEARCH
// ================================

search.addEventListener("input", () => {

  const keyword =
    search.value.toLowerCase().trim();

  const result = files.filter(file =>

    file.name.toLowerCase().includes(keyword) ||

    file.description
      .toLowerCase()
      .includes(keyword)

  );

  renderFiles(result);

});


// ================================
// CATEGORY
// ================================

document.querySelectorAll(".category").forEach(button => {

  button.addEventListener("click", () => {

    document
      .querySelectorAll(".category")
      .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    const category =
      button.dataset.category;

    const keyword =
      search.value.toLowerCase().trim();

    let result = files;

    if (category !== "all") {

      result = result.filter(
        file => file.category === category
      );

    }

    if (keyword) {

      result = result.filter(file =>

        file.name.toLowerCase().includes(keyword) ||

        file.description
          .toLowerCase()
          .includes(keyword)

      );

    }

    renderFiles(result);

  });

});


// ================================
// CLOSE EVENTS
// ================================

close.addEventListener("click", closeModal);

document
  .querySelector(".modal-overlay")
  .addEventListener("click", closeModal);

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    closeModal();

  }

});


// ================================
// MOBILE MENU
// ================================

menuBtn.addEventListener("click", () => {

  nav.classList.toggle("show");

});

document.querySelectorAll("#nav a").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("show");

  });

});


// ================================
// YEAR
// ================================

document.getElementById("year").textContent =
  new Date().getFullYear();


// ================================
// START
// ================================

renderFiles(files);