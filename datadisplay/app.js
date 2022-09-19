window.addEventListener('load', () => {
    console.log('page is loaded');
    
    //basically just getting a random activity from each type. the api randomizes it for you!

    let recreational = document.getElementById('recreational');
    recreational.addEventListener('click', () => {
        fetch("http://www.boredapi.com/api/activity?type=recreational")
        .then(response => response.json())
            .then(data => {
                let nameelement = this.document.getElementById("activity-name");
                nameelement.innerHTML = data.activity;
            })
    })

    let education = document.getElementById('education');
    education.addEventListener('click', () => {
        fetch("http://www.boredapi.com/api/activity?type=education")
        .then(response => response.json())
            .then(data => {
                let nameelement = this.document.getElementById("activity-name");
                nameelement.innerHTML = data.activity;
            })
    })

    let social = document.getElementById('social');
    social.addEventListener('click', () => {
        fetch("http://www.boredapi.com/api/activity?type=social")
        .then(response => response.json())
            .then(data => {
                let nameelement = this.document.getElementById("activity-name");
                nameelement.innerHTML = data.activity;
            })
    })

    let diy = document.getElementById('diy');
    diy.addEventListener('click', () => {
        fetch("http://www.boredapi.com/api/activity?type=diy")
        .then(response => response.json())
            .then(data => {
                let nameelement = this.document.getElementById("activity-name");
                nameelement.innerHTML = data.activity;
            })
    })
    
    let charity = document.getElementById('charity');
    charity.addEventListener('click', () => {
        fetch("http://www.boredapi.com/api/activity?type=charity")
        .then(response => response.json())
            .then(data => {
                let nameelement = this.document.getElementById("activity-name");
                nameelement.innerHTML = data.activity;
            })
    })
    
    let cooking = document.getElementById('cooking');
    cooking.addEventListener('click', () => {
        fetch("http://www.boredapi.com/api/activity?type=cooking")
        .then(response => response.json())
            .then(data => {
                let nameelement = this.document.getElementById("activity-name");
                nameelement.innerHTML = data.activity;
            })
    })
     
    let relaxation = document.getElementById('relaxation');
    relaxation.addEventListener('click', () => {
        fetch("http://www.boredapi.com/api/activity?type=relaxation")
        .then(response => response.json())
            .then(data => {
                let nameelement = this.document.getElementById("activity-name");
                nameelement.innerHTML = data.activity;
            })
    })

    let music = document.getElementById('music');
    music.addEventListener('click', () => {
        fetch("http://www.boredapi.com/api/activity?type=music")
        .then(response => response.json())
            .then(data => {
                let nameelement = this.document.getElementById("activity-name");
                nameelement.innerHTML = data.activity;
            })
    })

    let busywork = document.getElementById('busywork');
    busywork.addEventListener('click', () => {
        fetch("http://www.boredapi.com/api/activity?type=busywork")
        .then(response => response.json())
            .then(data => {
                let nameelement = this.document.getElementById("activity-name");
                nameelement.innerHTML = data.activity;
            })
    })

}) //end

    // link to api https://www.boredapi.com/documentation#endpoints-type
