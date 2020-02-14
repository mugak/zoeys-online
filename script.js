var pink = "#ee209c";
var lime = "#d3f971";
var green = "#4b917d";

var index = 0;
var max_index = 7;
var back = document.querySelector(".buttons").firstElementChild;
var fwd = document.querySelector(".buttons").lastElementChild;
var screen = document.querySelector(".screen");
var interval;
handlePages();
document.getElementById('player').pause();

back.addEventListener("click", () => {
    if(index > 0) {
        index--;
    }   
    handlePages();
});

fwd.addEventListener("click", () => {
    if(index < max_index) {
        index++;
    }
    handlePages();
});

function handlePages() {
    clearInterval(interval);
    if(index == 0) {
        back.style.visibility = "hidden";
        fwd.style.visibility = "visible";

    } 
    else if(index == max_index) {
        back.style.visibility = "visible";
        fwd.style.visibility = "hidden";

    } 
    else {
        back.style.visibility = "visible";
        fwd.style.visibility = "visible";

    }

    switch(index) {
        case 0:
            handlePage0();
            break;
        case 1:
            handlePage1();
            break;
        case 2: 
            handlePage2();
            break;
        case 3:
            handlePage3();
            break;
        case 4:
            handlePage4();
            break;
        case 5:
            handlePage5();
            break;
        case 6:
            handlePage6();
            break;
        case 7:
            handlePage7();
            break;
    }
}

function handlePage0() {
    screen.style.background = "#000";
    const strs = ["Zoey Hou,", "Happy <span>Birthday</span> Valentine's Day", "Ready for your year wrapped?", "Relive and discover the biggest events of your year."];
    const colors = [lime, green, pink, lime];
    const paras = [];
    strs.forEach((str, i) => paras.push(createPara(str, colors[i])));
    addParas(paras);

    paras.forEach((p, i) => {
        p.style.width = "60%";
        p.style.fontSize = "3rem";
        p.style.top = "10%";

        if((i + 1) % 2 == 1) {
            p.style.textAlign = "left";
        }

        if(window.matchMedia("(max-width: 768px)").matches && window.matchMedia("(min-height: 640px)").matches ) {
            p.style.marginTop = "2rem";
        }
    })

    paras[3].style.fontSize = "1.2rem";
    paras[3].style.textAlign = "center";
    paras[3].style.marginTop = "3rem";
}

function handlePage1() {
    var now = new Date().getTime();
    var oldDate = new Date("May 10, 2019 18:32:00").getTime();
    var timeleft = now - oldDate;
        
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    screen.style.background = green;
    const strs = ["You met your <em>first boyfriend</em>.", `You've been together for <em id="date">${days} days</em>, <em id="date">${hours} hours</em>, <em id="date">${minutes} minutes</em>, and <em id="date">${seconds} seconds</em>, surviving <em>5 fights</em>.`];
    const paras = []
    strs.forEach((str, i) => paras.push(createPara(str, "#000")));
    addParas(paras);

    paras.forEach(p => {
        p.style.width = "60%";
        p.style.fontSize = "2.5rem";
        p.style.top = "30%";
    })

    document.querySelectorAll("em").forEach((e) => e.style.color = lime);
    paras[1].style.fontWeight = "500";
    paras[1].style.marginTop = "2rem";
    paras[1].style.fontSize = "2rem";

    interval = setInterval(function() {

        var now = new Date().getTime();
        var timeleft = now - oldDate;
            
        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        var times = [days, hours, minutes, seconds];
        var timeStrings = ["days", "hours", "minutes", "seconds"];
        document.querySelectorAll("#date").forEach((e, i) => e.innerHTML = times[i] + " " + timeStrings[i]);
    }, 1000);
}

function handlePage2() {
    screen.style.background = lime;

    const strs = ["You moved out of <em>Malcolm</em>, into your new apartment.", "You took approximately <em>2639 pictures</em>, documenting your college memories."];
    const paras = []
    strs.forEach((str, i) => paras.push(createPara(str, "#000")));
    addParas(paras);
    
    paras.forEach(p => {
        p.style.width = "60%";
        p.style.fontSize = "2.5rem";
        p.style.top = "30%";
    })

    document.querySelectorAll("em").forEach((e) => e.style.color = pink);
    paras[1].style.fontWeight = "500";
    paras[1].style.marginTop = "2rem";
    paras[1].style.fontSize = "2rem";
}

function handlePage3() {
    screen.style.background = pink;
    const strs = ["You studied abroad in <em>Thailand</em> over the summer.", "You made a fundraiser, raising <em>$755</em> for your students."];
    const paras = []
    strs.forEach((str, i) => paras.push(createPara(str, "#000")));
    addParas(paras);
    
    paras.forEach(p => {
        p.style.width = "60%";
        p.style.fontSize = "2.5rem";
        p.style.top = "30%";
    })

    document.querySelectorAll("em").forEach((e) => e.style.color = lime);
    paras[1].style.fontWeight = "500";
    paras[1].style.marginTop = "2rem";
    paras[1].style.fontSize = "2rem";
}

function handlePage4() {
    screen.style.background = "#000";
    const strs = ["You developed a healthier image of your body.", "You went from <em>??? lbs</em> to <em>??? lbs</em>, exercising almost <em>4 days</em> a week."];
    const paras = []
    strs.forEach((str, i) => paras.push(createPara(str, lime)));
    addParas(paras);
    
    paras.forEach(p => {
        p.style.width = "60%";
        p.style.fontSize = "2.5rem";
        p.style.top = "30%";
    })

    document.querySelectorAll("em").forEach((e) => e.style.color = pink);
    paras[1].style.fontWeight = "500";
    paras[1].style.marginTop = "2rem";
    paras[1].style.fontSize = "2rem";
}

function handlePage5() {
    screen.style.background = green;

    const strs = ["You grieved for the loss of a loved one."]
    const paras = []
    strs.forEach((str, i) => paras.push(createPara(str, "#000")));
    addParas(paras);
    
    paras.forEach(p => {
        p.style.width = "60%";
        p.style.fontSize = "2.5rem";
        p.style.top = "35%";
    })
}


function handlePage6() {
    screen.style.background = green;

    const strs = ["You've been very strong."]
    const paras = []
    strs.forEach((str, i) => paras.push(createPara(str, "#000")));
    addParas(paras);
    
    paras.forEach(p => {
        p.style.width = "60%";
        p.style.fontSize = "2.5rem";
        p.style.top = "40%";
    })
}

function handlePage7() {
    screen.style.background = lime;

    const strs = ["You've <em>experienced</em>, <em>accomplished</em>, and <em>grown</em> so much over the past year.", "What will your <em>20s</em> have in store?"];
    const paras = []
    strs.forEach((str, i) => paras.push(createPara(str, "#000")));
    addParas(paras);
    
    paras.forEach(p => {
        p.style.width = "60%";
        p.style.fontSize = "2.5rem";
        p.style.top = "25%";
    })

    document.querySelectorAll("em").forEach((e) => e.style.color = pink);
    paras[1].style.fontWeight = "500";
    paras[1].style.marginTop = "2rem";
    paras[1].style.fontSize = "2rem";
    var ems = document.querySelectorAll("em");
}

function createPara(str, color) {
    para = document.createElement("p");
    para.innerHTML = str;
    para.style.color = color;
    return para;
}

function addParas(paras) {
    var frame = document.querySelector(".frame");
    frame.innerHTML = '';
    paras.forEach(para => frame.appendChild(para));
}

function startPage() {
    const name = document.querySelector("#name").value.toLowerCase();
    const dob = document.querySelector("#dob").value;
    if((name == "zoey" || name == "zoey hou") && dob == "2000-02-08") {
        document.getElementById('player').play();
        setTimeout(() => { 
            document.querySelector("#form").style.display = "none";
            document.querySelector(".container").style.display = "initial";
            //document.getElementById('player').play();
        }, 900);
    }
    else {
        if(!document.querySelector(".error")) {
            error = document.createElement("div");
            error.style.color = "red";
            error.style.marginTop = "10px";
            error.textContent = "error: incorrect login details"
            error.setAttribute("class", "error");
            document.querySelector("#form").appendChild(error);
        }
    }
}