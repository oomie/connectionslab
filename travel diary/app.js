
let castle = document.getElementById("castle");
let swiss = document.getElementById("swiss");
let swiss2 = document.getElementById("swiss2");


  castle.addEventListener('mouseenter' , () => {
    castle.src="images/3.jpg";
  });
    castle.addEventListener('mouseleave' , () => {
      castle.src="images/1.jpg";
    });
    castle.addEventListener('click', () => {
     alert('Location:\nSleeping Beauty Castle, Disneyland Paris!');
     console.log("hi u clicked?");
     });


     swiss.addEventListener('mouseenter' , () => {
     swiss.src="images/7.jpg";
    });
      swiss.addEventListener('mouseleave' , () => {
      swiss.src="images/6.jpg";
      });
      swiss.addEventListener('click', () => {
        alert('Location:\nMontreux, Switzerland!');
        });


      swiss2.addEventListener('mouseenter' , () => {
          swiss2.src="images/10.jpg";
        });
        swiss2.addEventListener('mouseleave' , () => {
          swiss2.src="images/8.jpg";
          });
          swiss2.addEventListener('click', () => {
            alert('Location:\n Interlaken, Switzerland!');
            });

           // image slider js code 
          
                const swiper = new Swiper('.swiper', {
                    // Optional parameters
                    loop: true,
                  
                    // If we need pagination
                    pagination: {
                      el: '.swiper-pagination',
                      clickable: true,
                    },
                  
                    // Navigation arrows
                    navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    },
                  
                  });
                
          
   
