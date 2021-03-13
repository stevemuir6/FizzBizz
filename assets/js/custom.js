
// // reverse word input from input7 and display in output 7 and in reverse in output6



document.getElementById("btnRevWord").addEventListener("click", function(){
    let word2 = document.getElementById("input6").value;
    
     // Non-word character regex
     let reg = /[\W_]/g

     // convert input to lower case
     var word3 = word2.toLowerCase().replace(reg, "")
     var word5 = word3.split('').length

     // Reverse string
    let word4 = word3.split('').reverse().join('');
    if(word5 == 0)
    {
        document.getElementById('output7').innerText= "You need to enter a word to check"
    }else{
        if (word4 == word3){
            document.getElementById('output7').innerText= `"${word2}" is a Palindrome!`
        } 
        
        else {
            document.getElementById('output7').innerText =`"${word2}" is not a Palindrome!`
        }
    }
    
});

// clear output 7
document.getElementById("btnClear2").addEventListener("click", function(){
    document.getElementById("input6").value = "";
    document.getElementById("output7").innerText = "";
});