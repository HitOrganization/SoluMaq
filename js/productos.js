document.querySelectorAll(".product-item").forEach(item => {
    item.addEventListener("click", () => {

        const title = item.getAttribute("data-title");
        const desc = item.getAttribute("data-desc");
        const img = item.getAttribute("data-img");

        // Insertamos en el modal
        document.getElementById("modalTitle").textContent = title;
        document.getElementById("modalDesc").textContent = desc;
        document.getElementById("modalImg").src = img;

        // Mostrar modal
        document.getElementById("productModal").classList.remove("hidden");
    });
});

// Cerrar modal
document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("productModal").classList.add("hidden");
});

// Cerrar al tocar fondo oscuro
document.getElementById("productModal").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
        document.getElementById("productModal").classList.add("hidden");
    }
});
