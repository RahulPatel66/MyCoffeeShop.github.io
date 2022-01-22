 document.getElementById("menu-btn").onclick=()=>{
     document.querySelector(".second-navlist").classList.toggle('active');
     //alert("hoot");
 }


//  search bar js here 
document.querySelector("#search-btn").onclick=()=>{
   document.querySelector("#search").classList.toggle('active');
   //alert("hloe");
    
}
document.querySelector("#close-btn").onclick=()=>{
    document.querySelector("#search").classList.remove('active');
   
}


// add to cart start here 
// document.querySelector("#shop-btn").onclick=()=>{
//     document.querySelector("#cart").classList.toggle('active');
//     // alert("hloe");
     
//  }
//  document.querySelector("#cartclose-btn").onclick=()=>{
//      document.querySelector("#cart").classList.remove('active');
    
//  }