let popup = document.getElementById("popup");
let overlay = document.getElementById("overlay");

function openPopup(){
    popup.classList.add("open-popup");
    overlay.classList.add("show-overlay");
}

function closePopup(){
    popup.classList.remove("open-popup");
    overlay.classList.remove("show-overlay");
}


/* 🔹 FETCH INDIA STATES */
fetch("https://countriesnow.space/api/v0.1/countries/states")
.then(res => res.json())
.then(data => {
    const india = data.data.find(c => c.name === "India");
    const pick = document.getElementById("pickupState");
    const ret  = document.getElementById("returnState");

    pick.innerHTML = '<option value="">Select State</option>';
    ret.innerHTML  = '<option value="">Select State</option>';

    india.states.forEach(state=>{
        pick.innerHTML += `<option>${state.name}</option>`;
        ret.innerHTML  += `<option>${state.name}</option>`;
    });
});

/* 🔹 FORM SUBMIT + VALIDATION + POPUP */
document.getElementById("bookingForm").addEventListener("submit", function(e){
    e.preventDefault();

    const f = this;

    if(f.name.value.trim() === ""){
        alert("Enter your name"); return;
    }

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(f.email.value)){
        alert("Enter valid email"); return;
    }

    if(f.phone.value.length!==10 || isNaN(f.phone.value)){
        alert("Enter valid 10-digit phone number"); return;
    }

    if(f.bus_type.value===""){
        alert("Select bus type"); return;
    }

    if(f.pickup_date.value==="" || f.return_date.value===""){
        alert("Select pickup and return date"); return;
    }

    if(new Date(f.return_date.value) < new Date(f.pickup_date.value)){
        alert("Return date cannot be before pickup date"); return;
    }

    if(f.pickup_location.value==="" || f.return_location.value===""){
        alert("Select locations"); return;
    }
    if(f.message.value.trim() !== "" && f.message.value.trim().length < 10){
    alert("Additional information must be at least 10 characters");
    return;
}
    openPopup();
    f.reset();
});

function goBack(){
    if(confirm("Are you sure you want to exit form?")){
        window.location.href="index.html";
    }
}
