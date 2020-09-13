//Unit data

let unitObj ={
    gold:['Kg|Kilogram','gm|Gram','pound|Pound'],
    silver:['celsius|Celsius','farenheight|Farenheight','kelvin|Kelvin'],
    platinum:['mph| Miles per hour', 'fps|Foot per second','m/s| meter per second','km/h|kilometer per hour',"knot|Knot"],
    paladium:['sq-m|Square metre','sq-km|Square Kilometre','sq-mile|Square Mile','sq-foot|Square Foot'],
    rhodium:['s|Second','min|Minute','h|Hour']
}

let requestURl = "https://metals-api.com/api/latest?access_key=6nqzjexwctjdsjm4sng58bku84a9slq3q5x3972sr0ayvh1ujl2pa94ogyu3&base=INR&symbols=XAU%2CXAG%2CXPD%2CXPT%2CXRH"
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var metals = JSON.parse(this.responseText);
    //console.log(metals);
    if(metals.success){
        document.addEventListener("DOMContentLoaded",()=>{
            document.getElementById('date').innerHTML = metals.date;
            document.getElementById("metal").addEventListener("change", ()=>{
                let choice = document.getElementById("metal").value;
                if(choice =="Gold"){
                    var array = unitObj.gold;
                }else if (choice == "Silver"){
                    var array = unitObj.silver;
                }else if (choice == "Platinum"){
                    var array = unitObj.platinum;
                }else if (choice == "Paladium"){
                    var array = unitObj.paladium;
                }else if (choice == "Rhodium"){
                    var array = unitObj.rhodium;
                }
            });
        });
    }

  }
};
xmlhttp.open("GET", requestURl, true);
xmlhttp.send();