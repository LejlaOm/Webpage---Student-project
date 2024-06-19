function validacija_unosa(){

    var ime = document.getElementById("ime").value; 
    var broj = document.getElementById("broj").value;
    var email = document.getElementById("email").value;
    var poruka = document.getElementById("poruka").value;
    var greska = document.getElementById("greska");
    
  if(ime=="") {
    alert("Niste ispravno pupunili sva polja.");
    text = "Molimo Vas da unesete Vaše ime.";
    greska.innerHTML = text;
    return false;
  }
  else{ 
      if(ime.length < 3 || ime.length > 20) { 
    alert("Niste ispravno pupunili sva polja.");
    text = "Vaše ime mora sadržavati između 3 i 20 karaktera.";
    greska.innerHTML = text;
    return false;
  }}
  
  
   if(broj==""){
    alert("Niste ispravno pupunili sva polja.");
    text = "Molimo Vas da unesete Vaš broj telefona.";
    greska.innerHTML = text;
       return false;
   }
   else{ 
       if(isNaN(broj)){
    alert("Niste ispravno pupunili sva polja.");
    text = "Molimo Vas da koristite samo cifre od 0 do 9..";
    greska.innerHTML = text;
    return false;
  }
   else{
       if(broj.length < 6){
    alert("Niste ispravno pupunili sva polja.");
    text = "Vaš broj telefona mora sadržavati najmanje 6 cifara.";
    greska.innerHTML = text;
    return false;
   }    }   }
    
   
   if(email==""){    
    alert("Niste ispravno pupunili sva polja.");
    text = "Molimo Vas da unesete Vaš e-mail.";
    greska.innerHTML = text;
    return false;
       
   }
   
  else {
      if(email.indexOf("@") == -1 || email.length <7 ){
    alert("Niste ispravno pupunili sva polja.");
    text = "Vaš e-mail treba biti oblika xxx@ sa najmanje 7 karaktera.";
    greska.innerHTML = text;
    return false;
  }}
  
  if(poruka==""){
    alert("Niste ispravno pupunili sva polja.");
    text = "Molimo Vas da unesete Vašu poruku.";
    greska.innerHTML = text;
    return false;     
  }
  
  else {
      if(poruka.length <10 || poruka.length >= 100){
    alert("Niste ispravno pupunili sva polja.");
    text = "Vaša poruka mora sadržavati između 10 i 100 karaktera.";
    greska.innerHTML = text;
    return false;
  }}
  
  alert("Vaša poruka je poslana. Naš tim će vas kontaktirati u roku od 3 dana.");
  return true;
}