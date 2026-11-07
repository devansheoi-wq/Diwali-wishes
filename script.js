
function shareWish() {
    const name = document.getElementById("name").value.trim();

    const message =
        `🪔 Happy Diwali! 🪔

May this Diwali bring happiness, prosperity,
good health and success into your life.

Wishing you and your family a very Happy Diwali!

${name ? "With best wishes, " + name : ""} ❤️`;

    const whatsappURL =
        "https://wa.me/?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}
