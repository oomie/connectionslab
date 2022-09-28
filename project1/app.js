window.addEventListener('load', () => {
    console.log('page is loaded');

    //audio effect:
    let pop = document.getElementById("pop");
    let bling = document.getElementById("bling");

    let recreational = document.getElementById('recreational');
    recreational.addEventListener('click', () => {
        fetch("https://www.boredapi.com/api/activity?type=recreational")
        .then(response => response.json())
            .then(data => {
                let nameelement = this.document.getElementById("activity-name");
                nameelement.innerHTML = data.activity;
            })
            pop.play();
        })

    let education = document.getElementById('education');
    education.addEventListener('click', () => {
        fetch("https://www.boredapi.com/api/activity?type=education")
        .then(response => response.json())
            .then(data => {
                let nameelement = this.document.getElementById("activity-name");
                nameelement.innerHTML = data.activity;
            })
            pop.play();
        })

    let social = document.getElementById('social');
    social.addEventListener('click', () => {
        fetch("https://www.boredapi.com/api/activity?type=social")
        .then(response => response.json())
            .then(data => {
                let nameelement = this.document.getElementById("activity-name");
                nameelement.innerHTML = data.activity;
            })
            pop.play();
        })

    let diy = document.getElementById('diy');
    diy.addEventListener('click', () => {
        fetch("https://www.boredapi.com/api/activity?type=diy")
        .then(response => response.json())
            .then(data => {
                let nameelement = this.document.getElementById("activity-name");
                nameelement.innerHTML = data.activity;
            })
            pop.play();
        })
    
    let charity = document.getElementById('charity');
    charity.addEventListener('click', () => {
        fetch("https://www.boredapi.com/api/activity?type=charity")
        .then(response => response.json())
            .then(data => {
                let nameelement = this.document.getElementById("activity-name");
                nameelement.innerHTML = data.activity;
            })
            pop.play();
        })
    
    let cooking = document.getElementById('cooking');
    cooking.addEventListener('click', () => {
        fetch("https://www.boredapi.com/api/activity?type=cooking")
        .then(response => response.json())
            .then(data => {
                let nameelement = this.document.getElementById("activity-name");
                nameelement.innerHTML = data.activity;
            })
            pop.play();
        })
     
    let relaxation = document.getElementById('relaxation');
    relaxation.addEventListener('click', () => {
        fetch("https://www.boredapi.com/api/activity?type=relaxation")
        .then(response => response.json())
            .then(data => {
                let nameelement = this.document.getElementById("activity-name");
                nameelement.innerHTML = data.activity;
            })
            pop.play();
        })

    let music = document.getElementById('music');
    music.addEventListener('click', () => {
        fetch("https://www.boredapi.com/api/activity?type=music")
        .then(response => response.json())
            .then(data => {
                let nameelement = this.document.getElementById("activity-name");
                nameelement.innerHTML = data.activity;
            })
            pop.play();
        })

    let busywork = document.getElementById('busywork');
    busywork.addEventListener('click', () => {
        fetch("https://www.boredapi.com/api/activity?type=busywork")
        .then(response => response.json())
            .then(data => {
                let nameelement = this.document.getElementById("activity-name");
                nameelement.innerHTML = data.activity;
            })
            pop.play();
    })

    let randomtextappear = document.getElementById("randomtextappear");
    randomtextappear.style.display = "none";
    //the text doesnt appear until you click the button

    let random = document.getElementById('random');
    random.addEventListener('click', () => {
        fetch("https://www.boredapi.com/api/activity")
        .then(response => response.json())
            .then(data => {
                let nameelement = this.document.getElementById("random-activity");
                nameelement.innerHTML = data.activity;
            })
            randomtextappear.style.display = "flex";
            bling.play();

    })

// //p5:
// function setup() {
//     createCanvas(window.four.innerWidth, window.four.innerHeight);
//   }

//   function draw() {
//     background(100,124,34);
//     circle(100,100,100);
//   }  


}) //end

    // link to api https://www.boredapi.com/
