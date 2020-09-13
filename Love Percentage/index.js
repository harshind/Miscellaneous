const lovePercentage = ()=>{
    return Math.floor(Math.random() * 100);
}

document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector("#calc").addEventListener('click',()=>{
        let name1 = document.getElementById("name1").value;
        console.log(typeof name1);
        var letters = /^[a-zA-Z]+$/;
        let name2 = document.getElementById("name2").value;
        if(!letters.test(name1) || !letters.test(name2)){
            alert("AlphaNumric and Numbers not allowed");
        }else if(name1.length >=3 && name2.length >=3){
            document.getElementById("result").innerHTML =`${lovePercentage()} %`;
        }else {
            alert("Minimum 3 Character required ")
        }
        
    });
    document.querySelector("#reset").addEventListener('click',()=>{
        document.getElementById("result").innerHTML ="";
        document.getElementById("name1").value ="";
        document.getElementById("name2").value ="";  
    });
})