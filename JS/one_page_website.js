function openModal(imageSrc) {
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("lightbox-img").src = imageSrc;
}

function closeModal() {
    document.getElementById("lightbox").style.display = "none";
}