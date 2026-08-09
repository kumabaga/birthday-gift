const openGift = document.getElementById("openGift");
const message = document.getElementById("message");

// เปิดกล่องของขวัญ
openGift.addEventListener("click", function () {

    openGift.classList.add("open");

    // แสดงการ์ด
    setTimeout(function () {
        message.classList.add("show");
    }, 700);

    // เอฟเฟกต์
    createHearts();
    createBalloons();
    createConfetti();

});


// ❤️ หัวใจ
function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-30px";
        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.pointerEvents = "none";
        heart.style.zIndex = "999";

        document.body.appendChild(heart);

        const duration = 2 + Math.random() * 3;

        heart.animate(
            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(-${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration * 1000,
                easing: "ease-out"
            }
        );

        setTimeout(function () {
            heart.remove();
        }, duration * 1000);
    }
}


// 🎈 ลูกโป่ง
function createBalloons() {

    const balloons = [
        "🎈",
        "🎈",
        "🎈",
        "🎈",
        "🎈"
    ];

    balloons.forEach(function (item, index) {

        const balloon = document.createElement("div");

        balloon.innerHTML = item;

        balloon.style.position = "fixed";
        balloon.style.left =
            (10 + index * 20) + "%";

        balloon.style.bottom = "-100px";
        balloon.style.fontSize = "55px";
        balloon.style.zIndex = "5";
        balloon.style.pointerEvents = "none";

        document.body.appendChild(balloon);

        balloon.animate(
            [
                {
                    transform: "translateY(0)",
                    opacity: 0
                },
                {
                    transform:
                        "translateY(-120vh)",
                    opacity: 1
                }
            ],
            {
                duration:
                    5000 + index * 500,

                easing: "ease-out"
            }
        );

        setTimeout(function () {
            balloon.remove();
        }, 8000);

    });
}


// 🎉 Confetti
function createConfetti() {

    const symbols = [
        "🎉",
        "✨",
        "💖",
        "⭐"
    ];

    for (let i = 0; i < 40; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerHTML =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-50px";

        confetti.style.fontSize =
            (12 + Math.random() * 20) + "px";

        confetti.style.zIndex = "1000";

        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration =
            2000 + Math.random() * 3000;

        confetti.animate(
            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(${window.innerHeight + 100}px) rotate(720deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-in"
            }
        );

        setTimeout(function () {
            confetti.remove();
        }, duration);

    }
}


// 💌 เปิดการ์ดแบบ 3D
const card = document.querySelector(".card");

if (card) {

    card.addEventListener("click", function () {

        card.classList.toggle("open");

    });

}