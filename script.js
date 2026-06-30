// ==========================
// Ambil semua elemen
// ==========================

const pages = document.querySelectorAll(".page");

const lihatBtn = document.getElementById("lihatBtn");
const gangguBtn = document.getElementById("gangguBtn");
const tebakBtn = document.getElementById("tebakBtn");
const lanjutCoklat = document.getElementById("lanjutCoklat");
const coklatBtn = document.getElementById("coklatBtn");

const trex = document.getElementById("trex");
const dialog = document.getElementById("dialog");
const tebak = document.getElementById("tebak");
const loading = document.getElementById("loading");
const happyTrex = document.getElementById("happyTrex");
const happyText = document.getElementById("happyText");

// ==========================
// Fungsi pindah halaman
// ==========================

function showPage(id){

    pages.forEach(page=>page.classList.remove("active"));

    document.getElementById(id).classList.add("active");

}

// ==========================
// PAGE 1
// ==========================

lihatBtn.addEventListener("click",()=>{

    showPage("page2");

});

// ==========================
// PAGE 2
// ==========================

let marah = 0;

const dialogMarah = [

"APA SIH!! 😠",

"AKU LAGI BETE TAU!! 😤",

"JANGAN GANGGU!! 😡",

"HUFFFF!! 💨",

"Capek juga marah-marah... 😮‍💨"

];

gangguBtn.addEventListener("click",()=>{

    trex.classList.add("shake");

    dialog.innerHTML = dialogMarah[marah];

    marah++;

    if(marah >= dialogMarah.length){

        trex.classList.remove("shake");

        trex.innerHTML="🦖😮‍💨";

        gangguBtn.innerHTML="Lanjut ➜";

        gangguBtn.onclick=function(){

            showPage("page3");

        }

    }

});

// ==========================
// PAGE 3
// ==========================

let tebakStep=0;

tebakBtn.addEventListener("click",()=>{

    tebakStep++;

    if(tebakStep==1){

        tebak.innerHTML="Kayaknya T-Rex ini...";

    }

    else if(tebakStep==2){

        tebak.innerHTML="Mirip seseorang deh... 🤔";

    }

    else if(tebakStep==3){

        tebak.innerHTML="Namanya...";

    }

    else{

        showPage("page4");

        mulaiLoading();

    }

});

// ==========================
// Loading
// ==========================

function mulaiLoading(){

    let persen=0;

    loading.innerHTML="0%";

    const timer=setInterval(()=>{

        persen+=5;

        loading.innerHTML=persen+"%";

        if(persen>=100){

            clearInterval(timer);

            setTimeout(()=>{

                showPage("page5");

            },700);

        }

    },80);

}

// ==========================
// PAGE 5
// ==========================

lanjutCoklat.addEventListener("click",()=>{

    showPage("page6");

});

// ==========================
// PAGE 6
// ==========================

coklatBtn.addEventListener("click",()=>{

    happyTrex.innerHTML="🦖🍫";

    happyText.innerHTML="Hmm...";

    setTimeout(()=>{

        happyText.innerHTML="Enak juga ya coklatnya 🍫";

    },1000);

    setTimeout(()=>{

        happyTrex.innerHTML="🦖😊";

        happyText.innerHTML="Udah nggak bete lagi 😆";

    },2500);

    setTimeout(()=>{

        showPage("page7");

    },4500);

});
