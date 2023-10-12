const fs = require("node:fs");
const herolist = require("./assets/heroes-list.json");
const cityList = require("./assets/cityList.json");
const data = require("./data/data.json");

const randomHero = Math.round(Math.random() * (herolist.length - 1));
const randomCity = Math.round(Math.random() * (cityList.length - 1));

const newHero = {
  title: herolist[randomHero],
  power: Math.round( Math.floor(Math.random() * 10) + 1), 
  city: cityList[randomCity], 
  poster: herolist[randomHero] +".jpg"
};


data.avengers.push(newHero);

console.log(data);


fs.writeFileSync("data/data.json", JSON.stringify(data, null, 2), "utf-8");


// let writehero=function(){
//     fs.writeFile("data/data.json",'{"avengers":[{ "title" : "", "power" : "", "city" : " ", "poster" : " "  }]}',function(error,data){
//         if(error){
//             console.warn("ERROR",error);
//         }else{
//             console.warn(data);
//         }
//     })
// }

// if(fs.existsSync("data/data.json")){
//     console.log("folder already exist");
//     writehero();
    
// }else{fs.mkdirSync("data")
//     writehero();
//     console.log("folder Created and file uploaded");
    
// }