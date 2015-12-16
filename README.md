<b>Welcome to ca$htag - a quick web app to browse the instagram photos you wish to see. </b>

<i>How it works</i> <br>
1) Write in a hashtag (one) that you’d like to search <br>
2) Pick your constraint dates <br>
3) Click “Show me the money!” <br>
4) If you’d like to continue searching the same hashtag and dates, simply click “load more!” <br>
5) Click on the photo/video to go directly to the instagram desktop site. <br>


<i>What you did</i> <br>
I worked on front-end. I first drew out the concept, and then coded out a static HTML and CSS page. (I hand wrote the logo hehe). 
After, I had to learn everything about API’s and hosting it on a server. I chose node.js for my backend after reading on some express tutorials. Then it was time to “get” my first API and translate it over so my static site can process and display. I started with pulling images at first, and then moved onto pulling videos (proved more difficult since I was getting “undefined” returned), following that I chose the date constraints but first I had to convert the users dates into the unix timestamp. 
All of this was learned during this exercise, and all of it was so exciting!


<i>Why you made some choices you made</i> <br>
At first I was going to enable the infinite scroll feature, but due to time constraints (need to learn it) I decided to add in the “load more” button instead. I also chose to add in the controls feature vs autoplay for the videos. Not too sure if this would be considered a “feature” but making the input type “date” added for better usability (I originally had it so the user would have to manually input the date in the correct format).


<i>What you would improve next if you had more time</i> <br>
For sure lots of error checking. I’d like to check if the date ranges were wrong, if the user never added a hashtag, if the user adds more than one hashtag (also add in multiple hashtags as a feature). I’d also like to implement the implement that inifite scrolling feature I talked about earlier. I think the next most important “feature” (wouldn’t really call it a feature but would be the next thing I’d work on) would be to make it mobile friendly!
