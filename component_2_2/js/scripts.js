document.addEventListener('DOMContentLoaded', () => {
    console.log('Sidebar is ready');
});

document.addEventListener("DOMContentLoaded", function () {
    const expandable = document.querySelector(".pagination-1 .expandable");
    expandable.addEventListener("click", function () {
    document.querySelectorAll(".pagination-1 ul li a.hidden").forEach(function (el) {
        el.style.display = "flex";
    });
    expandable.style.display = "none";
    });
});