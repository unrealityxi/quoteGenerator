$(document).ready(function(){
  /* Random Quote Machine v 0.1 */
  /* ======================================= */  
  var quotes = { //collapse this to save yourself some scrolling
        "life": [ 
            {
            "quote": "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
            "author": "Buddha"
            },
            {
                "quote": "Life isn't about finding yourself. Life is about creating yourself.",
                "author": "George Bernard Shaw"
            },
            {
                "quote": "Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.",
                "author": "Sholom Aleichem"
            },
            {
                "quote": "Life is not a problem to be solved, but reality to be experienced",
                "author": "Soren Kierkegaard"
            },
            {
                "quote": "Life is a series of natural and spontaneous changes. Don't resist them - that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.",
                "author": "Lao Tzu"
            },
            {
                "quote": "Our prime purpose in this life is to help others. And if you can't help them, at least don't hurt them.",
                "author": "Dalai Lama"
            },
            {
                "quote": "Be yourself. Everyone else is already taken!",
                "author": "Oscar Wilde"
            },
            {
                "quote": "If you love life, don't waste time, for time is what life is made up of.",
                "author": "Bruce Lee"
            },
            {
                "quote": "Life would be infinitely happier if we could only be born at the age of eighty and gradually approach eighteen.",
                "author": "Mark Twain"
            },
            {
                "quote": "Life imitates art far more then art imitates life.",
                "author": "Oscar Wilde"
            }

        ],
    
        
        "relationships":[
            {
                "quote": "Truth is everybody is going to hurt you: you just gotta find the ones worth suffering for.",
                "author": "Bob Marley"
            },
            {
                "quote": "You can discover more about a person in an hour of play than in a year of conversation.",
                "author": "Plato"
            },
            {
                "quote": "Men should only believe half of what women say. But which half?",
                "author": "Jean Giraudoux"
            },
            {
                "quote": "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.",
                "author": "Carl Yung"
            },
            {
                "quote": "People are lonely because they build walls instead of bridges.",
                "author": "Joseph F. Newton Men"
            },
            {
                "quote": "True friendship comes when the silence between two people is comfortable.",
                "author": "David Tyson Gentry"
            },
            {
                "quote": "An eye for eye only ends up making the whole world blind.",
                "author": "Mahatma Ghandi"
            },
            {
                "quote": "Shared joy is a double joy; shared sorrow is half a sorrow.",
                "author": "Swedish Proverb"
            },
            {
                "quote": "Friendship is born at that moment when one person says to another, ‘What! You too? I thought I was the only one!‘",
                "author": "C. S. Lewis"
            },
            {
                "quote": "There’s one sad truth in life I’ve found <br> While journeying east and west –<br> The only folks we really wound <br> Are those we love the best.<br> We flatter those we scarcely know,<br> We please the fleeting guest,<br> And deal full many a thoughtless blow<br> To those who love us best",
                
                "author": "Ella Wheeler Wilcox"
            }
            
        
        
        
        
        
        ],
        
        "god": [
            {
                "quote": "I cannot conceive of a God who rewards and punishes his creatures, or has a will of the type of which we are conscious in ourselves. An individual who should survive his physical death is also beyond my comprehension, nor do I wish it otherwise; such notions are for the fears or absurd egoism of feeble souls.",
                "author": "Albert Einstein"
            },
            {
                "quote": "God is that infinite All of which man knows himself to be a finite part.",
                "author": "Leo Tolstoy",
            },
            {
                "quote": "I cannot help thinking that the best way of knowing God is to love many things. Love this friend, this person, this thing, whatever you like, and you will be on the right road to understanding Him better.",
                "author": "VINCENT VAN GOGH, letter to Theo van Gogh, Jul. 1880"
            },
            {
                "quote": "So long as you believe in a Two-Faced God, you will create ecstasy and terror side by side. You have imagined a God who is the epitome of both, and by telling yourself that you are created in the Image and Likeness of God, you have given yourself the moral authority to demonstrate both. You love and hate in the name of God.",
                "author": "NEALE DONALD WALSCH, Tomorrow's God"
            },
            {
                "quote": "Man ... has an inborn religious sentiment that whispers of a God to his inmost soul, as a shell taken from the deep yet echoes forever the ocean's roar.",
                "author": "HORACE MANN"
            },
            {
                "quote": "What were a God who only gave the world a push from without, or let it spin around His finger? I look for a God who moves the world from within, who fosters nature in Himself, Himself in nature; so that naught of all that lives and moves and has its being in Him ever forgets His force or His spirit.",
                "author": "JOHANN WOLFGANG VON GOETHE"
            },
            {
                "quote": "Coincidence is God’s way of remaining anonymous.",
                "author": "Albert Einstein"
            },
            {
                "quote": "Every evening I turn my worries over to God. He's going to be up all night anyway. ",
                "author": "Mary C. Crowley"
            },
            {
                "quote": "Maybe the atheist cannot find God for the same reason a thief cannot find a policeman.",
                "author": "Author Unknown"
            },
            {
                "quote": "God's last name is not 'Dammit.'",
                "author": "Author Unknown"
            }
            
        ],
        
        "science": [
            {
                "quote": "I know that much of the structure and plan of the universe is beyond my understanding and not at all similar to anything of our earthly world that I have experienced so far. I marvel at the intellect and attention to detail, the precision manifested by the workings of this great and often unseen force of which we are all a part.",
                "author": "ROSEMARY ALTEA"
            },
            {
                "quote": "The universe is like a river. The river keeps on flowing. It doesn't care whether you are happy or sad, good or bad; it just keeps flowing. Some people go down to the river and they cry. Some people go down to the river and they are happy, but the river doesn't care; it just keeps flowing. We can use it and enjoy it, or we can jump in and drown. The river just keeps flowing because it is impersonal, and so it is with the universe. The universe that we live in can support us or destroy us. It's our interpretation and use of the laws that determine our effects or results.",
                "author": "ROBERT ANTHONY"
            },
            {
                "quote": "Through our eyes, the universe is perceiving itself. Through our ears, the universe is listening to its harmonies. We are the witnesses through which the universe becomes conscious of its glory, of its magnificence.",
                "author": "ALAN WATTS"
            },
            {
                "quote": "We are not lords of the universe. We're one small part of it. We may be its consciousness, but being the consciousness of the universe does not mean turning it all into a mirror image of us. It means rather fitting into it as it is, and worshipping it with our attention.",
                "author": "KIM STANLEY ROBINSON"
            },
            {
                "quote": "Those afraid of the universe as it really is, those who pretend to nonexistent knowledge and envision a Cosmos centered on human beings will prefer the fleeting comforts of superstition. They avoid rather than confront the world. But those with the courage to explore the weave and structure of the Cosmos, even where it differs profoundly from their wishes and prejudices, will penetrate its deepest mysteries.",
                "author": "CARL SAGAN"
            },
            {
                "quote": "It may be -- I hope it is -- redemption to guess and perhaps perceive that the universe, the hell which we see for all its beauty, vastness, majesty, is only part of a whole which is quite unimaginable.",
                "author": "WILLIAM GOLDING"
            },
            {
                "quote": "Science can only ascertain what is, but not what should be, and outside of its domain value judgements of all kinds remain necessary.",
                "author": "Albert Einstein"
            },
            {
                "quote": "When a distinguished but elderly scientist states that something is possible, he is almost certainly right. When he states that something is impossible, he is very probably wrong.",
                "author": "Arthur C. Clarke"
            },
            {
                "quote": "Our scientific power has outrun our spiritual power. We have guided missiles and misguided men.",
                "author": "Martin Luther King Jr."
            },
            {
                "quote": "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",
                "author": "Isaac Asimov"
            }
            
        ]
  }; // List of quotes arranged by subjects
  var subjects = []; // List of all the subjects
  var userChoice = ""; // User's choice of subject
  var quoteIndex = ""; // Index of quote within subject field
  var prevQuotes = []; // List of all quote indices user has clicked on so far
  var prevChoices = []; // list of all the subject fields, paired up with quotes from above 
  var whatever = true; // keeps track of state - full on random ( true ) or random within frame of certain subject
        
  for (var key in quotes){ // Parses through quotes and populates subjects list
      subjects.push(key);
    }; 
  
  /* ============================*/
  /* Helper functions */
  
  function getRandomInt(max) { // Random number gen
  return Math.floor(Math.random() * max);
  };
  function getRandomChoice() { // Gets random subject field 
    return subjects[getRandomInt(subjects.length)]
  };
  function getRandomQuoteIndex() { // Gets random int for a quote index
    return getRandomInt(quotes[userChoice].length)
  };
  
  function quoteInit() { // Initializes random subject and random quote for first run of the program, as well as for "whatever" mode
    userChoice = getRandomChoice();
    quoteIndex = getRandomQuoteIndex();
  };    
  function setQuote() { // Draws the quote into the page, also tracks down subject of the quote and marks corresponding button as "current", changes "tweet button content to reflect quote. 
    
    $("#quote").html(quotes[userChoice][quoteIndex].quote);
    $("#author").html(quotes[userChoice][quoteIndex].author);
    $(".choice").removeClass("current");
    $("#" + userChoice).addClass("current");
    $("#tweetQuote").attr("href","https://twitter.com/intent/tweet?text=" + quotes[userChoice][quoteIndex].quote + "\n \n" + "-" + quotes[userChoice][quoteIndex].author );
    
 

  };
  function pushOldQuote(){ // Pushes quote related data (subject and index) into lists as a mean of tracking state for "previous" button. 
    prevQuotes.push(quoteIndex);
    prevChoices.push(userChoice);
  };
  
  function drawSubjects(){ // uses "subjects" list to draw one button per subject as well as assign them with corresponding IDs
      var content = ""
      for (let key of subjects){
          content += "<div class='col-sm-6 col-xs-12'><button id=" + key + " class='btn btn-block btn-info choice'>" + key.toUpperCase() + "</button>" + "<br>" +"</div>"
      };
      
      $("#subjects").html(content);
  };
  
  /* ================================= */
  /* Get Things Rollin'! */
  
  drawSubjects(); 
  quoteInit(); 
  setQuote();   
  /* ================================= */ 
  
  /* Click/event handlers */ 
  
  $(".choice, .navigation").click(function(event){ // excludes previous button from updating quote lists and pushes quote to history after it changes
     if (event.target.id == "previous"){
         return;
     }
     pushOldQuote();
     
     
  });
  
  $(".choice").click(function(event){ //determines where has the user clicked, whether it should use full on random mode, and sets the subject field + random index;
    userChoice = event.target.id;
    if (userChoice == "whatever"){
      whatever = true;
      quoteInit();
    
    }
    else {
      whatever = false;
      quoteIndex = getRandomQuoteIndex();
    
    }
    
    setQuote(); // draws the quote from subject depending on factors above
    
  });
    
    
  $(".navigation").click(function(event){ // Handles the navigation
    if (event.target.id == "next"){ // If "next" button is clicked, determines if whatever mode is on, if yes, gives fully random quote, else just sets quote index and keeps old selected subject
        if (whatever){
            userChoice = getRandomChoice();   
        }
        quoteIndex = getRandomQuoteIndex();
        setQuote();
        
    }
    else {                                      // if "previous" is clicked, goes through list of previous quotes, seting them again as active and removing them from history list. Catches if list is empty and Chills Out if so. 
        if (prevQuotes.length > 0 ){
            userChoice = prevChoices.pop();
            quoteIndex = prevQuotes.pop();
            setQuote();

        }
    }
  });
          
  
  
        
       
    
});