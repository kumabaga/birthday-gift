const openGift = document.getElementById("openGift");
const message = document.getElementById("message");

const birthdayMusic =
    document.getElementById("birthdayMusic");

const musicButton =
    document.getElementById("musicButton");

const card =
    document.querySelector(".card");


// 🎁 กดกล่องของขวัญ
openGift.addEventListener("click", function () {

    // เปิดฝากล่อง
    openGift.classList.add("open");


    // 🎉 เอฟเฟกต์
    createHearts();
    createBalloons();
    createConfetti();


    // เล่นเพลง
    if (birthdayMusic) {

        birthdayMusic.play()
            .then(function () {

                if (musicButton) {
                    musicButton.textContent =
                        "🔇 ปิดเพลง";
                }

            })
            .catch(function (error) {

                console.log(
                    "ไม่สามารถเล่นเพลงอัตโนมัติได้",
                    error
                );

            });

    }


    // 🎁 ให้กล่องหาย
    setTimeout(function () {

        openGift.classList.add("hide");

        const clickText =
            document.getElementById("clickText");

        if (clickText) {
            clickText.classList.add("hide");
        }

    }, 700);


    // 💌 ให้การ์ดปรากฏ
    setTimeout(function () {

        openGift.style.display = "none";

        const clickText =
            document.getElementById("clickText");

        if (clickText) {
            clickText.style.display = "none";
        }


        // ⭐ สำคัญ
        message.classList.add("show");

    }, 1300);

});


// 💌 กดการ์ดเพื่อเปิด
if (card) {

    card.addEventListener("click", function (event) {

        // ถ้ากดปุ่มเพลง
        // ไม่ให้การ์ดพลิก
        if (
            event.target.id ===
            "musicButton"
        ) {
            return;
        }

        card.classList.toggle("open");

    });

}


// 🎵 ปุ่มเพลง
if (
    musicButton &&
    birthdayMusic
) {

    musicButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();


            if (birthdayMusic.paused) {

                birthdayMusic.play()
                    .then(function () {

                        musicButton.textContent =
                            "🔇 ปิดเพลง";

                    })
                    .catch(function () {

                        alert(
                            "ไม่สามารถเปิดเพลงได้ กรุณาตรวจสอบไฟล์ birthday.mp3"
                        );

                    });

            } else {

                birthdayMusic.pause();

                musicButton.textContent =
                    "🎵 เปิดเพลง";

            }

        }
    );

}


// ❤️ หัวใจ
function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom =
            "-30px";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.pointerEvents =
            "none";

        heart.style.zIndex =
            "999";

        document.body.appendChild(heart);


        const duration =
            2 + Math.random() * 3;


        heart.animate(
            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        `translateY(-${window.innerHeight + 100}px)
                        rotate(${Math.random() * 360}deg)`,

                    opacity: 0
                }
            ],
            {
                duration:
                    duration * 1000,

                easing:
                    "ease-out"
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

        const balloon =
            document.createElement("div");

        balloon.innerHTML = item;

        balloon.style.position = "fixed";

        balloon.style.left =
            (10 + index * 20) + "%";

        balloon.style.bottom =
            "-100px";

        balloon.style.fontSize =
            "55px";

        balloon.style.zIndex = "5";

        balloon.style.pointerEvents =
            "none";

        document.body.appendChild(balloon);


        balloon.animate(
            [
                {
                    transform:
                        "translateY(0)",
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

                easing:
                    "ease-out"
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
                    Math.random() *
                    symbols.length
                )
            ];


        confetti.style.position =
            "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top =
            "-50px";

        confetti.style.fontSize =
            (12 + Math.random() * 20) + "px";

        confetti.style.zIndex =
            "1000";

        confetti.style.pointerEvents =
            "none";


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
                        `translateY(${window.innerHeight + 100}px)
                        rotate(720deg)`,

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