// Blog Data

var blogData = [

  { url : "/assets/one.webp" , title : "How to Get Good at <br> JavaScript" ,
  description : " So you want to be a JavaScript expert,<br /> right? Well, you have picked an" , 
  textdata : "JavaScript is a powerful programming language that is widely used to build interactive and dynamic web applications. As the demand for JavaScript developers continues to grow, it is essential to constantly improve your skills in this language. Whether you are a beginner or an experienced developer, there are always new things to learn and new techniques to master. Before you start learning new techniques and tools, it is important to have a solid understanding of the basics. Make sure you understand how to write functions, variables, loops, and conditional statements in JavaScript. Practice these basics by building simple web applications and experimenting with different techniques. Collaborating with other developers is a great way to improve your skills. You can join a coding community, attend meetups, or find a mentor who can guide you in your development journey. By working with others, you will learn from their experiences and gain exposure to new techniques and tools. With a lot of practice, patience, and passion, you can learn JavaScript and become a true coding rockstar. When it comes to writing JavaScript code that is optimized and performs well, it is necessary to have a solid understanding of algorithms. With the right algorithms, developers can build effective and powerful web applications."},

  { url : "/assets/two.webp" , title : "Embrace the Beauty of <br> Material Design Colors" ,
  description : "  Hello, design enthusiasts and color lovers! <br>Today, I’m thrilled to introduce you to" , 
  textdata : "Material Design Colors are part of Google’s Material Design language, which is known for its clean, user-friendly, and visually appealing interface design. These colors are specifically chosen for their harmony, usability, and aesthetic appeal in digital interfaces. Material Design Colors are crafted to create visually appealing and harmonious interfaces, enhancing user experience. Whether you’re working on a web project, mobile app, or digital artwork, these colors offer a wide range of options to suit any design need.  Using Material Design Colors ensures consistency across various digital platforms, providing a cohesive look and feel. In the dynamic world of digital design, having the right color palette at your fingertips is crucial. Material Design Colors on hexcolor.co offers a unique resource for designers to explore, learn, and apply the language of color with confidence and creativity. It’s a comprehensive hub for design knowledge, offering insights into office paint colors, the role of colors in branding, color psychology, and much more. It’s the perfect destination for anyone looking to deepen their understanding of design and color theory. It’s more than just a tool; it’s a step towards creating more engaging, visually appealing, and user-friendly designs."},

  { url : "/assets/three.webp" , title : "Is Django Dying? <br> An Honest Look at the Future" ,
  description : "Tired of clickbait titles declaring Django’s death? I know I am.  It’s like they haven’t" , 
  textdata : "Frankly, calling Django “dying” is more out-of-touch than using Internet Explorer. Let’s dive into why Django remains a top player. Ever had a coding question at 2 am and someone answered? That’s the magic of Django’s community. Stack Overflow, dedicated forums, and tons of experienced devs mean you’ve got a whole team in your corner. This makes Django way more approachable and fun to learn. If Django was truly on its way out, would companies like Instagram, Spotify, and The Washington Post be building on it? Nope. These heavy hitters recognize Django’s power to scale and handle complex web applications. Django’s devs don’t sit around twiddling their thumbs. Recent updates brought us goodies like asynchronous views (hello, speed boost!) and built-in JSON field support (data handling just got smoother). Web development trends change faster than my mind about what to order for lunch. But Django’s adaptability is legendary. Powerful data handling, seamless API creation, and a focus on security mean it’s still a go-to choice for everything from social media sites to serious data-driven platforms."}

]

   // added to local storage
   if(!localStorage.getItem('blogData')){
    var myDataString = JSON.stringify(blogData);
    localStorage.setItem('blogData', myDataString);
   }
  
  //  getting data from local storage
   const bloginfo = localStorage.getItem('blogData');
   const blogdesc = JSON.parse(bloginfo);
 

// adding data to blog cards from here
blogdesc.map((blog , index)=>{
  const cardDiv = document.createElement("div");
  cardDiv.setAttribute("class" , "card")


  const cardImg = document.createElement("img");
  cardImg.setAttribute("src" , blog.url)
  cardImg.setAttribute("class" , "images")


  const card_h3 = document.createElement("h3");
  card_h3.innerHTML = blog.title


  const card_p = document.createElement("p");
  card_p.innerHTML = blog.description

  
  const card_btn = document.createElement("button");
  card_btn.innerHTML = "Read"
  card_btn.setAttribute("class" , "ReadButton");
  card_btn.setAttribute("id" , index)

 cardDiv.appendChild(cardImg);
 cardDiv.appendChild(card_h3);
 cardDiv.appendChild(card_p);
 cardDiv.appendChild(card_btn);


 document.getElementById("cards_container").appendChild(cardDiv)

})

// 

// Form section script

//opening Form
document.getElementById("AddBlogButton").addEventListener("click", ()=>{
  document.getElementById("form").style.display = "flex"
  document.getElementById("form").classList.toggle('show'); 
  document.getElementById("page").classList.toggle('blur'); 
});

// closing Form

document.getElementById("closeForm").addEventListener("click",()=>{
  document.getElementById("form").classList.toggle('show'); 
  document.getElementById("page").classList.toggle('blur'); 
})


// adding blog 

document.getElementById("formAddBlogBtn").addEventListener("click",()=>{
  let submitForm = document.getElementById("formdata");

  submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let url = document.getElementById("url");
    let title = document.getElementById("title");
    let description = document.getElementById("description");
    let textdata = document.getElementById("textdata");

  
    if (url.value == "" || title.value == "" || description.value == "" || textdata.value == "") {
      alert("Ensure you input a value in all the fields!");
    } else {
      blogdesc.push({url:url.value , title : title.value , description : description.value , textdata : textdata.value})
      var myDataString = JSON.stringify(blogdesc);
      localStorage.setItem('blogData', myDataString);
      submitForm.submit();
    }

  });
})



// redirecting to blog page
 const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  if(button.classList[0] == "ReadButton"){
    button.addEventListener("click",()=>{
      var id = {id : button.id};
      var buttonId = JSON.stringify(id);
      localStorage.setItem('id', buttonId);
      window.location.href = "http://127.0.0.1:8081/BlogPage/Blog.html";
    })
  }
});


