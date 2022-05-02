// write js code here corresponding to matches.html

var info=JSON.parse(localStorage.getItem("schedule"))
displaydata(info)
// console.log(info)
var favorit=JSON.parse(localStorage.getItem("favorites")) || [];




document.querySelector("#filterVenue").addEventListener("change",venuefilter)

function venuefilter(){
    var venuedata=document.querySelector("#filterVenue").value


    if(venuedata == "Mumbai")
    {
        favorit.sort(function(a,b){
            if(a>b)
            {
                return 1;
            }
            if(a,b)
            {
                return -1
            }
            return 0
        })

    //  console.log(info)
     displaydata(info)
    }

    if(venuedata == "Banglore")
    {
        favorit.sort(function(a,b){
            if(a>b)
            {
                return 1;
            }
            if(a,b)
            {
                return -1
            }
            return 0
        })

    //  console.log(info)
     displaydata(info)
    }

    if(venuedata == "Hyderabad")
    {
        favorit.sort(function(a,b){
            if(a>b)
            {
                return 1;
            }
            if(a,b)
            {
                return -1
            }
            return 0
        })

    //  console.log(info)
     displaydata(info)
    }

    if(venuedata == "Delhi")
    {
        favorit.sort(function(a,b){
            if(a>b)
            {
                return 1;
            }
            if(a,b)
            {
                return -1
            }
            return 0
        })

    //  console.log(info)
     displaydata(info)
    }

    if(venuedata == "Pune")
    {
        favorit.sort(function(a,b){
            if(a>b)
            {
                return 1;
            }
            if(a,b)
            {
                return -1
            }
            return 0
        })

    //  console.log(info)
     displaydata(info)
    }
}






function displaydata(info){
    

info.forEach(function(elem){
    // document.querySelector("tbody").innerHTML=""
    // console.log(elem)

    var tr=document.createElement("tr")

    var td1=document.createElement("td")
    td1.innerText=elem.matchNum

    var td2=document.createElement("td")
    td2.innerText=elem.teamA

    var td3=document.createElement("td")
    td3.innerText=elem.teamB

    var td4=document.createElement("td")
    td4.innerText=elem.date

    var td5=document.createElement("td")
    td5.innerText=elem.venue

    var td6=document.createElement("td")
    td6.innerText="favorite"
    td6.style.color="green"
    td6.style.cursor="pointer"

    td6.addEventListener("click",function(){
         addtofav(elem)
    })

    tr.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(tr)
})
}

function addtofav(elem){

favorit.push(elem)
localStorage.setItem("favorites",JSON.stringify(favorit))

}
