
function getPassword(){
    //stock les caractere voulue 
    let chars= "azertyuiopqsdfghjklmwxcvbn0123456789$%£µ*#@€¤;.,/:!§";
    //taille du mots de passe
    let passwordLength = 16;
    //vide pour etre remplie dynamiquement
    let password = "";

    
     for(let i = 0; i <passwordLength; i++){
         //ajoute aléatoirement les caractere du variable chars
        let randomNumber = Math.floor(Math.random() * chars.length);
         
        //attribut la valeur a password 
         password += chars.substring(randomNumber, randomNumber+1)
    document.querySelector("#password").value = password;
     }

};

