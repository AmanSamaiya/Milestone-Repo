// receiving data from local storage

const bloginfo = localStorage.getItem('blogData');
  const blogdesc = JSON.parse(bloginfo);


  // getting the clicked button id
const button = localStorage.getItem("id");
const buttonid = JSON.parse(button);
const buttonpureid = parseInt(buttonid.id);




// getting the clicked button data
 const clickedbuttondata = blogdesc[buttonpureid];



 
// parsing data according to the button id 

document.getElementById("cardimg").setAttribute("src" , clickedbuttondata.url);
document.getElementById("title").innerHTML = clickedbuttondata.title ;
document.getElementById("description").innerHTML = clickedbuttondata.description;
document.getElementById("textdata").innerHTML = clickedbuttondata.textdata;
