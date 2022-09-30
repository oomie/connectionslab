# Connections Lab Project 1: Activity Finder
## Working Link: https://oomie.github.io/connectionslab/project-1/
### Made Using Bored API https://www.boredapi.com

## Concept
For Project 1, I decided to work with the Bored API, which suggests random activities for you to do. For my website, I wanted users to be able to get random activity suggestions based on the type they pick, such as music or social activities. I wanted the website to be fun, so I wanted the activity types to bounce around the screen and the suggestions to pop up when you click on one of the types. There is also a random button for when users can't decide what type to go for, it suggests any type of activity.

## Process
I wanted the website to be a one-page scrollable site, because I wanted to try out a scrollable site. I separated my content into three sections, one for the title, one for the activity types, and one for the random button. The sections snap to your screen when you scroll through them. I think it gave the site a cool effect and divided my content neatly. I added two fonts which I loaded from google fonts, and picked a different background color for each section.

There are 9 activity types in the API, so I made 9 cirlce PNG images, one for each category. The bouncing images were made with p5.js. I made a button class for all the buttons, and in the constructor I added a type and image parameter, so that I was able to specify the type and image when I made the buttons in setup. Each button has a show function (to display and move the image), an edge function so that the buttons don't go off screen, and a clicked function to check for when the mouse has clicked on the button. The clicked function fetches the api and plays a sound when a button is clicked. Each time a button is clicked, it gets a different random speed, a feature which makes clicking on the buttons more fun in my opinion!

For the random button, I choose to use an image of a question mark/mystery box from Super Mario, I thought it would be a fun additon to the site. Unfortunately, the random button does not bounce around like the other types, as I was unable to figure out how to add multiple canvases to my site. I tried to add a second canvas, but that resulted in errors and none of the canvases displaying on screen.


## Challenges
My biggest challenge while making this site was figuring out how to use P5.JS and getting my bubbles to bounce around the screen and sucessfully display the correct activity suggestion when clicked. The activity types were not stored in an array, so it was a bit hard to figure out how to call each API url with the type, but when I added this.type to my button constructor, I got it to work!
Another issue I had which I mentioned above was trying to display two canvases on the same page. I tried making two separate classes and two separate canvases, but it didn't work. 

## Next Steps
My P5 code is slightly redundant since I made the 9 type buttons individually instead of making them into an array, which wouldve been more concise. In my future projects, I will try my best to make my code less redundant and work on putting an API into an array when it wasn't initially in one.
I will also practice more with P5 and get used to the syntax and functions it offers. I would also like to learn how to add more than one canvas to a single webpage!
I would also like to add some fun animation when clicling the random button, such as confetti falling onto the screen, because I think it would make the experience of clicking the button more exciting for the user! 

## Conclusion
My website turned out pretty well in the end! I'm glad I was able to figure it out (with Prof. Mathura's guidance and patience, thank you!!)
I am so happy that the bouncing images worked out successfully and the site is complete!

