
function updateText(){
    let userText = document.getElementById("user_text");
    let memeText = document.getElementById("meme_text");

    memeText.innerHTML = userText.value;
}

function updateImage(){
    let img = document.querySelector('img');
    let file = document.querySelector('input[type=file]').files[0];
    img.src =  window.URL.createObjectURL(file);

    
    let dlt= document.querySelector("#deletebutton")
    dlt.addEventListener("click", function(e){
    img.src = window.URL.revokeObjectURL(file);

    })
}


