 var request = new XMLHttpRequest();
 request.open('GET','https://restcountries.eu/rest/v2/all',true);
 request.send();
 request.onload=function(){
 var data=JSON.parse(this.response);
 console.log(data);
 var count=data.filter((ele)=>ele.region==="Asia"); 
 console.log(count);
 var pop=data.filter((ele)=>ele.population<200000); 
 console.log(pop);
 let curr=data.filter((ele)=>{
     for(var i in ele.currencies){
         if(ele.currencies[i].code==='USD'){
             return true;
         }
     }
 }).map(ele=>console.log(ele.name));
 data.forEach(element => {
     console.log(element.name+" "+element.capital+" "+element.flag);
 });
 var res=data.reduce(function foo(acc,ele){
     return acc+ele.population;
 }, 0);
 console.log(res);
 }
 
 
 