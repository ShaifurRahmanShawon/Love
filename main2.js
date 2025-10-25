document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with class "image1"
    var images = document.querySelectorAll(".image1");
  
    // Function to set random position for an element
    function setRandomPosition(element) {
      element.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
      element.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    }
  
    // Set random position for each image
    images.forEach(function (image) {
      setRandomPosition(image);
    });
  });
  
  function angry() {
    // get all image with class image1 and change the src
    var images = document.querySelectorAll(".image1");
    var absImg = document.getElementById("absImg");
    var mainImg = document.getElementById("mainImg");
    mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
  
    absImg.style.display = "flex";
  
    images.forEach(function (image) {
      image.src = "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
    });
  }
  function happy() {
    // get all image with class image1 and change the src
    var images = document.querySelectorAll(".image1");
    var absImg = document.getElementById("absImg");
    absImg.style.display = "flex";
    var mainImg = document.getElementById("mainImg");
    mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/happy3.gif?raw=true";
  
    images.forEach(function (image) {
      image.src = "https://github.com/NikhilMarko03/resources/blob/main/heart.gif?raw=true";
    });
  }
  
  const sadCat = [
    "https://media1.tenor.com/images/9413ffc5a11722a3cc456a88810750bd/tenor.gif?itemid=14193216",
    "https://emoji.gg/assets/emoji/5228_cat_cri.gif",
    "https://media1.tenor.com/images/a0554662ae7c3c60c0a7fdadac74ef18/tenor.gif?itemid=13931206",
    "https://media3.giphy.com/media/qpCvOBBmBkble/giphy.gif",
    "https://c.tenor.com/fpIAhF2jIY0AAAAC/cat-crying.gif",
    "https://c.tenor.com/BP70qe8X0J8AAAAC/crycat-crying-cat.gif",
  ];
  
  const blackmail = [
    "Please",
    "I'm begging you",
    "I'm crying",
    "I'm sad",
    "HUHUHUHU",
    "Please Say Yes",
    "I'm gonna cry",
  ];
  
  function normal() {
    var absImg = document.getElementById("absImg");
    absImg.style.display = "none";
    var mainImg = document.getElementById("mainImg");
    mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/happy1.gif?raw=true";
  }
  
  let counter = 0;
  
  function no() {
    counter++;
    let sadMusic = document.getElementById("sadMusic");
    let happyMusic = document.getElementById("happyMusic");
    happyMusic.pause();
    sadMusic.play();
    let model = document.getElementById("model");
    model.style.display = "none";
    setTimeout(() => {
      model.style.display = "flex";
      const modelImage = document.getElementById("modelImg");
      const modelText = document.getElementById("modelText");
      modelImage.src = sadCat[Math.floor(Math.random() * sadCat.length)];
      modelText.innerText =
        blackmail[Math.floor(Math.random() * blackmail.length)];
    }, 100);
  }
  
 function yes() {
    if (counter >= 0) {
        let model = document.getElementById("model2");
        let model2 = document.getElementById("model");
        let sadMusic = document.getElementById("sadMusic");
        sadMusic.pause();
        model2.style.display = "none";

        let happyMusic = document.getElementById("happyMusic");
        happyMusic.play();

        model.style.display = "none";
        setTimeout(() => {
            model.style.display = "flex";
        }, 100);

        const wedate = document.getElementById("wedate");
        const btns = document.getElementById("btns");
        btns.style.display = "none";

        wedate.innerHTML = `
            You’re my once-in-a-lifetime kind of love… <br>
            and now, my forever Valentine. <br>
            I love you, my beautiful world. 💌🥰 <br><br>
            <img src="valentine-love.jpg" alt="Valentine Love" style="width:400px; border-radius:15px; margin-top:10px;">
        `;

        // ❤️ Start heart rain for 15 seconds
        startHeartRain(15000);

        // 🌸 Show popup with glassy background after 15 seconds
        setTimeout(() => {
            // Create glass overlay
            const glass = document.createElement("div");
            glass.style.position = "fixed";
            glass.style.top = 0;
            glass.style.left = 0;
            glass.style.width = "100%";
            glass.style.height = "100%";
            glass.style.background = "rgba(255, 255, 255, 0.2)";
            glass.style.backdropFilter = "blur(8px)";
            glass.style.zIndex = 9999;
            document.body.appendChild(glass);

            // Create popup
            const popup = document.createElement("div");
            popup.style.position = "fixed";
            popup.style.top = "50%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.background = "#ff4f81";
            popup.style.color = "#fff";
            popup.style.padding = "30px 50px";
            popup.style.fontSize = "1.5rem";
            popup.style.borderRadius = "15px";
            popup.style.textAlign = "center";
            popup.style.zIndex = 10000;

            popup.innerHTML = `
                <div>A little surprise for you 🎁</div>
                <button id="popupBtn" style="
                    margin-top: 20px;
                    padding: 10px 20px;
                    font-size: 1rem;
                    border-radius: 10px;
                    border: none;
                    cursor: pointer;
                    background: #fff;
                    color: #ff4f81;
                ">Open Surprise</button>
            `;

            document.body.appendChild(popup);

            // ✅ Page changes only on button click
            document.getElementById("popupBtn").addEventListener("click", () => {
                window.location.href = "index1.html";
            });

        }, 15000);

    } else {
        alert("Don't say yes right away, cutie. Play around a bit 😉😘");
    }
}

// ❤️ Heart Rain Function (JS only)
function startHeartRain(duration) {
    const endTime = Date.now() + duration;

    const createHeart = () => {
        if (Date.now() > endTime) return;

        const heart = document.createElement("div");
        heart.textContent = "💖";
        document.body.appendChild(heart);

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-30px";
        heart.style.fontSize = 15 + Math.random() * 25 + "px";
        heart.style.opacity = 0.9;
        heart.style.zIndex = 9998; // behind glass
        heart.style.transition = "transform 4s linear, opacity 4s linear";

        setTimeout(() => {
            heart.style.transform = `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`;
            heart.style.opacity = 0;
        }, 10);

        setTimeout(() => heart.remove(), 4000);
        setTimeout(createHeart, 150);
    };

    createHeart();
}




  
  function ly2() {
    let model = document.getElementById("model2");
    model.style.display = "none";
    let model2 = document.getElementById("model");
    model2.style.display = "none";
  }
  
