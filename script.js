var nav = document.body.querySelector(".nav");
var display = document.body.querySelector(".display");

var pages = [
  {
    title:"Home",
    content:""
  },
  {
    title:"About",
    content:"Sean"
  },
  {
    title:"Interact",
    content:"Interact Content"
  }
  
]

for(var i=0; i<pages.length; i++){
  new pageMaker(pages[i]);
}

function pageMaker(input){
  this.button = document.createElement("button");
  this.button.innerHTML = input.title;
  this.button.addEventListener("click",function(){
    writepage(input.title, input.content)
                          })
  nav.appendChild(this.button);
}

console.log("check1");


function writepage(title,content){
  display.innerHTML="";
  if(title === "Interact"){
    interact(title);    
  }//end if
  else{  writecontent(title,content);
       }//end else
}//end writepage

function writecontent(title,content){
  
  var header = document.createElement("h1");
  var contentinput = document.createElement("h3");
  
  header.innerHTML = title;
  contentinput.innerHTML = content;
  
  display.appendChild(header);
  display.appendChild(contentinput);
  
}//end writecontent

function interact(title){

var header = document.createElement("h1");
header.innerHTML = title;
display.appendChild(header);

var nbr = 0;
var nbrOutput = document.createElement("div");
var counter = document.createElement("button");
nbrOutput.innerHTML = "Counter: " + nbr;


counter.innerHTML = "Don't Do It";
counter.addEventListener("click",function(){clicked()})
counter.onclick = "clicked()";
display.appendChild(counter);
display.appendChild(nbrOutput);

function clicked(){
nbr = nbr + 1; 
nbrOutput.innerHTML = "Counter: " + nbr;
display.appendChild(nbrOutput);
  
}//end clicked


}//end interact

writepage(pages[0].title, pages[0].content);