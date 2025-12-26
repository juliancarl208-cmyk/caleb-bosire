// Show / hide extra info
function toggleInfo() {
    let info = document.getElementById("extraInfo");
    info.style.display = info.style.display === "none" ? "block" : "none";
}

// Image slideshow
let images = [
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    "https://images.unsplash.com/photo-1598514982846-9c3e8c1b3b3c",
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399"
];

let i = 0;
setInterval(() => {
    document.getElementById("farmSlide").src = images[i];
    i = (i + 1) % images.length;
}, 3000);

// Simple form validation
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill in all fields");
        return false;
    }
    alert("Message sent successfully!");
    return true;
}
