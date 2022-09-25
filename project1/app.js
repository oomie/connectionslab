window.addEventListener('load', () => {
    console.log('page is loaded');

    //audio effect:
    let ding = document.getElementById("ding");

    let recreational = document.getElementById('recreational');
    recreational.addEventListener('click', () => {
        fetch("http://www.boredapi.com/api/activity?type=recreational")
        .then(response => response.json())
            .then(data => {
                let nameelement = this.document.getElementById("activity-name");
                nameelement.innerHTML = data.activity;
            })
            ding.play();
        })

    let education = document.getElementById('education');
    education.addEventListener('click', () => {
        fetch("http://www.boredapi.com/api/activity?type=education")
        .then(response => response.json())
            .then(data => {
                let nameelement = this.document.getElementById("activity-name");
                nameelement.innerHTML = data.activity;
            })
            ding.play();
        })

    let social = document.getElementById('social');
    social.addEventListener('click', () => {
        fetch("http://www.boredapi.com/api/activity?type=social")
        .then(response => response.json())
            .then(data => {
                let nameelement = this.document.getElementById("activity-name");
                nameelement.innerHTML = data.activity;
            })
            ding.play();
        })

    let diy = document.getElementById('diy');
    diy.addEventListener('click', () => {
        fetch("http://www.boredapi.com/api/activity?type=diy")
        .then(response => response.json())
            .then(data => {
                let nameelement = this.document.getElementById("activity-name");
                nameelement.innerHTML = data.activity;
            })
            ding.play();
        })
    
    let charity = document.getElementById('charity');
    charity.addEventListener('click', () => {
        fetch("http://www.boredapi.com/api/activity?type=charity")
        .then(response => response.json())
            .then(data => {
                let nameelement = this.document.getElementById("activity-name");
                nameelement.innerHTML = data.activity;
            })
            ding.play();
        })
    
    let cooking = document.getElementById('cooking');
    cooking.addEventListener('click', () => {
        fetch("http://www.boredapi.com/api/activity?type=cooking")
        .then(response => response.json())
            .then(data => {
                let nameelement = this.document.getElementById("activity-name");
                nameelement.innerHTML = data.activity;
            })
            ding.play();
        })
     
    let relaxation = document.getElementById('relaxation');
    relaxation.addEventListener('click', () => {
        fetch("http://www.boredapi.com/api/activity?type=relaxation")
        .then(response => response.json())
            .then(data => {
                let nameelement = this.document.getElementById("activity-name");
                nameelement.innerHTML = data.activity;
            })
            ding.play();
        })

    let music = document.getElementById('music');
    music.addEventListener('click', () => {
        fetch("http://www.boredapi.com/api/activity?type=music")
        .then(response => response.json())
            .then(data => {
                let nameelement = this.document.getElementById("activity-name");
                nameelement.innerHTML = data.activity;
            })
            ding.play();
        })

    let busywork = document.getElementById('busywork');
    busywork.addEventListener('click', () => {
        fetch("http://www.boredapi.com/api/activity?type=busywork")
        .then(response => response.json())
            .then(data => {
                let nameelement = this.document.getElementById("activity-name");
                nameelement.innerHTML = data.activity;
            })
            ding.play();
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
            ding.play();

    })

    

}) //end

    // link to api https://www.boredapi.com/
