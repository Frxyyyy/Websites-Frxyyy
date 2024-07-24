/**
 *  Untuk membuat link bisa dicopy
 */

const actionLink = document.querySelectorAll(".link-card .link-action");

actionLink.forEach((action) => {
    action.addEventListener("click", (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(action.parentElement.getAttribute("href"));
        /**
         * Untuk Memunculkan Toast Notification
         */
        document.getElementById("toast").innerHTML = `
            <div class="toast-container toast-gone">
                <p>✅ Link <strong> ${action.parentElement.innerText} </strong> Berhasil Dicopy!</p>
            </div>
        `;

        /**
         * Untuk menghilangkan toast notification
         */

        setTimeout(() => {
            document
                .querySelector("#toast .toast-container")
                .classList.add("toast-gone")
        }, 300);

        setTimeout(() => {
            document.querySelector("#toast .toast-container").remove();
        }, 2000);
    });
});

/**
 * Untuk ganti icon sosmed saat hover
 */

document.querySelectorAll(".sosmed i").forEach((sosmed) => {
    sosmed.addEventListener("mouseenter", (e) => {
        sosmed.classList.remove("ph");
        sosmed.classList.add("ph-fill");
    });
    
    sosmed.addEventListener("mouseleave", (e) => {
        sosmed.classList.remove("ph-fill");
        sosmed.classList.add("ph");
    });
})

/**
 * Animasi Text bergerak saat scroll
 */
document.addEventListener("scroll", (e) => {
    document.querySelector(".bg-text-animation").style.transform = `translateX(${window.scrollY}px)`;
});