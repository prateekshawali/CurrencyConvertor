// const URL="https://cat-fact.herokuapp.com/facts"
// const factPara=document.querySelector("#fact");
// const btn=document.querySelector("#btn");

//  const getFacts= async()=>{
//     console.log("getting data...");
//     let response=await fetch(URL);
//     console.log(response);
//     let data=await response.json();
//    //  console.log(data[0].text);
//     factPara.innerText=data[4].text;
//  }


//  by promise chain//

// function getFacts(){
//    fetch(URL)
//    .then((response) => {
//       return response.json();

//    })
//    .then((data) =>{
//       console.log(data);
//       factPara.innerText=data[4].text
//    });
// }
   
// btn.addEventListener("click",getFacts);









// currency convtor project//
const base_URL="https://2024-03-06.currency-api.pages.dev/v1/currencies";
const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");


for( let select of dropdowns)
{
   for( Currcode in countryList){
      let newOption=document.createElement("option");
      newOption.innerText=Currcode;
      newOption.value=Currcode;
      if(select.name==="from"&& Currcode==="USD"){
         newOption.selected="selected";
      }else if(
         select.name==="to" && Currcode==="INR"){
         newOption.selected="selected";
         }
      select.append(newOption);
   }
   select.addEventListener("change",(evt)=>{
      updateFlag(evt.target);
   })
}


const updateFlag=(element)=>{
   let Currcode=element.value;
   let countryCode=countryList[Currcode];
   let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
   let img=element.parentElement.querySelector("img");
   img.src=newSrc;



};

btn.addEventListener("click",async(evt)=>{
   evt.preventDefault();
   
   let amount=document.querySelector(".Amount");
   let amtVal=amount.value;
   if(amtVal==="" || amtVal<1){
      amtVal=1;
      amount.value="1";

   }
   const URL=`${base_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
   let response=await fetch(URL);
   let data=await response.json();
   let rate =data[toCurr.value.toLowerCase()];
   let finalAmount=amtVal*rate;
   msg.innerText=`${amtVal}${fromCurr.value}=${finalAmount}${toCurr.value}`;
});