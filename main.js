let bars = document.querySelector("#bars");
let sidebar = document.querySelector("#sidebar");

bars.addEventListener("click",() =>{
        bars.style.display = "none";
        sidebar.style.display="block"; 
        console.log("ok");  
});

let bars_sec = document.querySelector("#bars_sec");

bars_sec.addEventListener("click",() =>{
         sidebar.style.display="none";
         bars.style.display="block";
});