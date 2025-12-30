const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const dropdown = document.querySelector(".dropdown");

menuToggle.onclick = () => {
  navLinks.classList.toggle("show");
};

dropdown.onclick = () => {
  dropdown.classList.toggle("active");
};

function openBooking() {
  window.location.href = "form.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const sliders_details = document.getElementById("sliders-details");
  const sliderDots = document.getElementById("slider-dots");

  const sliders = [

    {
      image: "images/pexels-navnidh-5458388.jpg",
      first_heading: "Eternal Peace",
      second_heading: "Golden Temple",
      caption: "The Golden Temple in Amritsar is the holiest Sikh shrine, symbolizing equality, devotion, and spiritual harmony."
    },
    {
      image: "images/pexels-rajesh-s-balouria-1289088-15017640.jpg",
      first_heading: "Sacred Calm",
      second_heading: "Badrinath Temple",
      caption: "Badrinath Temple is one of the Char Dham shrines, located in the Himalayas of Uttarakhand, offering peace, devotion, and spiritual energy."
    },
    {
      image: "images/image_search_1766660361421.jpg",
      first_heading: "Nature’s Paradise",
      second_heading: "Manali Hills",
      caption: "Manali is a beautiful hill station famous for snow-capped mountains, adventure sports, scenic valleys, and serene natural beauty."
    },
    {
      image: "images/pexels-abhisek-tripathy-467053315-32519928.jpg",
      first_heading: "Divine Majesty",
      second_heading: "Jagannath Temple",
      caption: "Jagannath Temple in Puri, Odisha is a major pilgrimage site known for Rath Yatra and its deep cultural and spiritual significance."
    },


  ];

  // Create slides
  sliders.forEach((slider, index) => {
    const item = document.createElement("div");
    item.className = "slider-items";
    if (index === 0) item.classList.add("active");
    item.innerHTML = `
            <div class="slide">
                <img src="${slider.image}" alt="${slider.first_heading}">
                <div class="slide-text">
                    <h2>${slider.first_heading}</h2>
                    <h2>${slider.second_heading}</h2>
                    <p>${slider.caption}</p>
                </div>
            </div>
        `;
    sliders_details.appendChild(item);

    // Create dot
    const dot = document.createElement("span");
    dot.dataset.index = index;
    if (index === 0) dot.classList.add("active");
    sliderDots.appendChild(dot);

    dot.addEventListener("click", () => {
      currentIndex = index;
      showSlide(currentIndex);
      resetInterval();
    });
  });

  let currentIndex = 0;
  const totalSlides = sliders.length;
  const slides = document.querySelectorAll(".slider-items");

  const showSlide = index => {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });

    document.querySelectorAll(".dots span").forEach(dot => dot.classList.remove("active"));
    document.querySelector(`.dots span[data-index='${index}']`).classList.add("active");
  };

  // Auto slide
  let slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }, 4000);

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
    }, 4000);
  }

  // Initial display
  showSlide(currentIndex);
});




// car and bus details .....



const buses = [
  {
    name: "Mini Traveller 17",
    type: "MINI BUS",
    image: "images/bus1mini.png",
    specs: ["90 Liters", "17 Seats", "AC"],
    price: "₹4,500",
    per: "/ Day"
  },
  {
    name: "Volvo Luxury 45",
    type: "BIG BUS",
    image: "images/bus2.png",
    specs: ["300 Liters", "45 Seats", "Luxury AC"],
    price: "₹12,000",
    per: "/ Day"
  },
  {
    name: "Tour Master 40",
    type: "TRAVELS",
    image: "images/bus3.png",
    specs: ["250 Liters", "40 Seats", "AC"],
    price: "₹8,500",
    per: "/ Day"
  },
  {
    name: "Sedan Swift Dzire",
    type: "4 SEATER",
    image: "images/car1.png",
    specs: ["40 Liters", "4 Seats", "AC"],
    price: "₹2,500",
    per: "/ Day"
  },
  {
    name: "Ertiga / XL6",
    type: "6 SEATER",
    image: "images/car2.png",
    specs: ["45 Liters", "6 Seats", "AC"],
    price: "₹3,500",
    per: "/ Day"
  },
  {
    name: "Tempo Traveller",
    type: "10 SEATER",
    image: "images/mini-bus.png",
    specs: ["70 Liters", "10 Seats", "AC"],
    price: "₹6,500",
    per: "/ Day"
  }
];

const busGrid = document.getElementById("busGrid");

buses.forEach(bus => {
  const card = document.createElement("article");
  card.className = "bus-card";
  card.innerHTML = `
    <div class="bus-card-header">
      <h3>${bus.name}</h3>
      <span class="bus-tag">${bus.type}</span>
    </div>
    <div class="bus-img-wrap">
      <img src="${bus.image}" alt="${bus.name}">
    </div>
    <div class="bus-specs">
      ${bus.specs.map(s => `<span>${s}</span>`).join('')}
    </div>
    <div class="bus-card-footer">
      <div class="bus-price">
        <span class="price">${bus.price}</span>
        <span class="per">${bus.per}</span>
      </div>
      <a href="form.html" class="bus-btn">Rent Now</a>
    </div>
  `;
  busGrid.appendChild(card);
});


const services = [
  {
    title: "Local City Travel",
    desc: "Affordable and safe city rides with professional drivers.",
    image: "images/s3.jpg"
  },
  {
    title: "Outstation Trips",
    desc: "Comfortable long-distance journeys with well-maintained vehicles.",
    image: "images/outside.webp"
  },
  {
    title: "Bus & Tempo Rental",
    desc: "Luxury and budget buses for weddings, tours, and group travel.",
    image: "images/bus5.jpg"
  },
  {
    title: "Corporate Travel",
    desc: "Professional transport solutions for offices and businesses.",
    image: "images/image_search_1766563432635.webp"
  }
];

const mainImg = document.getElementById("mainImg");
const mainTitle = document.getElementById("mainTitle");
const mainDesc = document.getElementById("mainDesc");
const boxes = document.querySelectorAll(".small-box");
const progressBar = document.getElementById("progressBar");

let current = 0;

// Show service with smooth fade + progress bar
function showService(index) {
  mainImg.classList.add("fade");
  setTimeout(() => {
    mainImg.src = services[index].image;
    mainTitle.innerText = services[index].title;
    mainDesc.innerText = services[index].desc;
    mainImg.classList.remove("fade");
  }, 300);

  boxes.forEach(b => b.classList.remove("active"));
  boxes[index].classList.add("active");

  progressBar.style.width = "0%";
  setTimeout(() => { progressBar.style.width = "100%"; }, 50);

  current = index;
}

// Click event
boxes.forEach(box => {
  box.addEventListener("click", () => {
    showService(parseInt(box.dataset.index));
  });
});

// Auto-slide
setInterval(() => {
  let next = (current + 1) % services.length;
  showService(next);
}, 5000);

// Initial load
showService(current);





// contact...
function validateform(){
  let username = document.getElementById("username").value;
  let useremail = document.getElementById("useremail").value;
  let usermsg = document.getElementById("usermsg").value;
  let form = document.getElementById("form");
if(username === ""|| username == null){
  document.getElementById("showError").innerText = "Please enter your name!";
   document.getElementById("showError").style.display = "block";
  return false;
}
if(useremail === ""){
  document.getElementById("showError").innerText = "Please enter your email!";
     return false;
}
 if(usermsg === ""){
    document.getElementById("showError").innerText = "Please enter your message!";
     return false;
}
else{

  alert("Form send successfully.");
  document.getElementById("showError").style.display = "none";
  form.reset();
  return true;
}
  

// if(username === "" || useremail === "" || usermsg === ""){
//   alert("username , useremail and usermessage field connot be emplty!");
//   return false;
// }
// alert("form submitted successfully.");
// return true;
}






// gallery....

const galleryImages = [
    { src: "images/ChatGPT Image Dec 30, 2025, 03_02_40 PM.png", title: "Kedarnath Temple" },
    { src: "images/ChatGPT Image Dec 30, 2025, 03_04_42 PM.png", title: "Badrinath Temple " },
    { src: "images/pexels-thenomadwanderer-33151151.jpg", title: "Wood Work" },
    { src: "images/Grand Flag-Hoisting Ceremony in Ayodhya_ As….jpg", title: "Traditional Art" },
    { src: "images/iskcon.jpg", title: "Clay Craft" },
    { src: "images/shimla.jpg", title: "Creative Work" },
    { src: "images/pexels-ramkrishnaiyengar-6416960.jpg", title: "Creative Work" },
    { src: "images/This famous building has probably been captured by….jpg", title: "Creative Work" }
];

const galleryContainer = document.getElementById("galleryContainer");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

/* Render Gallery */
galleryImages.forEach((item) => {
    const div = document.createElement("div");
    div.className = "gallery-item";

    div.innerHTML = `<img src="${item.src}" alt="${item.title}">`;

    div.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = item.src;
    });

    galleryContainer.appendChild(div);
});

/* Close Lightbox */
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});
