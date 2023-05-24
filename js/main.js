const firebaseConfig = {
    apiKey: "AIzaSyC2Tt9Np1c18CgvP1PrWSioZcQZYatRJJY",
    authDomain: "cursuri-56b3f.firebaseapp.com",
    projectId: "cursuri-56b3f",
    storageBucket: "cursuri-56b3f.appspot.com",
    messagingSenderId: "299522476858",
    appId: "1:299522476858:web:416cb2656f6c22e9301e03",
    measurementId: "G-BF24DBS351"
};

const postareBtn = document.getElementById('postare-btn');
const admin = "NX8L7dQUnSTNy9M68IQ6lrpivOx1";

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// referinta la baza de date
const db = firebase.firestore();

//referinta la colectia teme din Baza de date
const temeDb = db.collection("teme");

let user = null;

const yearElement = document.getElementById('year');

if (yearElement) {
    let date = new Date();
    yearElement.innerHTML = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " ©️";

}

function mobileMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "") {
        x.className = "mobile";
    } else {
        x.className = "";
    }
}


function refresh() {
    window.location.reload();
}

function isAdmin() {
    if (user == null) {
        return false;
    }
    return admin == user.uid;
}

function formatareData(stamp) {

    let data = new Date(stamp);

    let an = data.getFullYear();
    let luna = data.getMonth() + 1;
    let zi = data.getDate();

    let result = zi + "-" + luna + "-" + an;
    
    return result;
}
auth.onAuthStateChanged( function(fuser) {
    user = fuser;
    
    if (isAdmin() == true) {
        postareBtn.style.display = "block";
    }
    else {
        postareBtn.style.display = "none";
    }

    document.querySelector("body").style.display = "block";
});

