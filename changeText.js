function changeText() {
  let div1 = document.getElementById("signup-form");
  let div2 = document.getElementById("login-form");

  let btn1 = document.getElementById("signupbtn");
  let btn2 = document.getElementById("loginbtn");

  if (div2.style.display === "none" && div1.style.display === "block") {
    btn1.style.color="#A49E9E";
    btn1.style.h
    btn1.style.borderBottom = "none";
    
    btn2.style.color = "black";
    btn2.style.borderBottom = "1px solid black";

    div2.style.display = "block";
    div1.style.display = "none";
  } 
  
  else {
    btn2.style.color = "#A49E9E";
    btn2.style.borderBottom = "none";

    btn1.style.color = "black";
    btn1.style.borderBottom = "1px solid black";

    div2.style.display = "none";
    div1.style.display = "block";
  };
}


