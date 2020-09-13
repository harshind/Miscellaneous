const Flames = (count)=>{
    if (count%6 == 0 ){
        return "Siblings";
    }else if(count%6 == 1 ){
        return "FriendShip";
    }else if(count%6 == 2 ){
        return "Love";
    }else if(count%6 == 3 ){
        return "Affection";
    }else if(count%6 == 4 ){
        return "Marriage"
    }else if(count%6 == 5 ){
        return "Enemy"
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector("#calc").addEventListener('click',()=>{
        let name1 = document.getElementById("name1").value.toLowerCase();
        let name2 = document.getElementById("name2").value.toLowerCase();
        //var letters = /^[0-9a-zA-Z]+$/;
        var letters = /^[a-zA-Z]+$/;
        //console.log(name1, name2)
        let a1 = Array.from(Array(26), () => 0);
        let a2 = Array.from(Array(26), () => 0);
        let totalChar = name2.length + name1.length;
        for(let i=0; i< name1.length; i++){
            a1[name1.charCodeAt(i) -97]+=1;
        }
        for(let i=0; i< name2.length; i++){
            //console.log(name2[i]);
            a2[name2.charCodeAt(i) -97]+=1;
        }
        let count=0;
        for(let i=0; i< 26; i++){
            if (a1[i] != 0 && a2[i] != 0){
                count+= Math.min(a1[i], a2[i])*2;
            }
        }
        totalChar-=count;
        //console.log(totalChar);
        if(!letters.test(name1) || !letters.test(name2)){
            alert("AlphaNumric and Numbers not allowed");
        }else if(name1.length >=3 && name2.length >=3){
            document.getElementById("result").innerHTML =`${Flames(totalChar)}`;
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