async function loadHeader() {
  const headerContainer = document.getElementById("header-container");
  if (!headerContainer) return;

  try {
    const res = await fetch("header.html");
    if (!res.ok) throw new Error("Header not found");
    const html = await res.text();
    headerContainer.innerHTML = html;

    // Đặt active cho nav link theo trang hiện tại
    const path = window.location.pathname.split("/").pop();
    const current = path || "index.html";
    const active = document.querySelector(`a[href="${current}"]`);
    if (active) active.classList.add("active");
  } catch (err) {
    console.error("Failed to load header:", err);
  }
}

// Gọi ngay khi tải trang
document.addEventListener("DOMContentLoaded", loadHeader);
