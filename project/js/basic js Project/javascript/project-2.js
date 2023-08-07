const p=document.querySelector('.quote')
const p2=document.getElementById('p2')
const generatequote=document.querySelector('button')
const container=document.querySelector('.container')
const quotesWithNames = [
    {
      name: "Albert Einstein",
      quote: "Imagination is more important than knowledge.",
    },
    {
      name: "Steve Jobs",
      quote: "Stay hungry, stay foolish.",
    },
    {
      name: "Nelson Mandela",
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    },
    {
      name: "Maya Angelou",
      quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    },
    {
      name: "Walt Disney",
      quote: "The way to get started is to quit talking and begin doing.",
    },
    {
      name: "Mahatma Gandhi",
      quote: "Be the change that you wish to see in the world.",
    },
    {
      name: "Mother Teresa",
      quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    },
    {
      name: "Abraham Lincoln",
      quote: "In the end, it's not the years in your life that count. It's the life in your years.",
    },
    {
      name: "Martin Luther King Jr.",
      quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
    },
    {
      name: "John Lennon",
      quote: "Life is what happens when you're busy making other plans.",
    },
    {
      name: "Oprah Winfrey",
      quote: "The biggest adventure you can take is to live the life of your dreams.",
    },
    {
      name: "Helen Keller",
      quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    },
    {
      name: "Eleanor Roosevelt",
      quote: "No one can make you feel inferior without your consent.",
    },
    {
      name: "Mark Twain",
      quote: "The two most important days in your life are the day you are born and the day you find out why.",
    },
    {
      name: "Coco Chanel",
      quote: "The most courageous act is still to think for yourself. Aloud.",
    },
    {
      name: "Winston Churchill",
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    },
    {
      name: "Rosa Parks",
      quote: "You must never be fearful about what you are doing when it is right.",
    },
    {
      name: "Bob Marley",
      quote: "The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.",
    },
    {
      name: "Thomas Edison",
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
    },
    {
      name: "Steve Martin",
      quote: "Be so good they can't ignore you.",
    },
  ];

function playing(){
    let random=Math.floor(Math.random()*quotesWithNames.length)
    p.style.display='block'
    p2.style.display='block'
    p.textContent = "Name: " + quotesWithNames[random].name;
    p2.textContent= "Quote: " + quotesWithNames[random].quote;
    container.style.height='15rem'
}

generatequote.onclick=playing
console.log(quotesWithNames.length)