let stolenItems = [
  {
   socks: 7,
   spoons: 20,
   nutella_jar: 5,
   keys: 0,
   shoelaces: 4,
   rotisserie_chicken:1
 },
 
 {
   socks: 2,
   spoons: 2,
   nutella_jar: 0,
   keys: 0,
   shoelaces: 4, 
   rotisserie_chicken: 2
 },
   
 {
   socks: 0,
   spoons: 0,
   nutella_jar: 0,
   keys: 0,
   shoelaces: 0,
   rotisserie_chicken: 0
 },
 
   {
   socks: 2,
   spoons: 10,
   nutella_jar: 4,
   keys: 4,
   shoelaces: 12,
   rotisserie_chicken: 0
 }, 
   
 {
   socks: 12,
   spoons: 17,
   nutella_jar: 0,
   keys: 2,
   shoelaces: 0,
   rotisserie_chicken: 0
 },
 
 {
   socks: 0,
   spoons: 0,
   nutella_jar: 2,
   keys: 0,
   shoelaces: 0,
   rotisserie_chicken: 0
 }, 
   
 {
   socks: 2,
   spoons: 2,
   nutella_jar: 0,
   keys: 4,
   shoelaces: 1,
   rotisserie_chicken: 0
 }, 
   
 {
   socks: 43,
   spoons: 10,
   nutella_jar: 50,
   keys: 2,
   shoelaces: 0,
   rotisserie_chicken: 0
 }, 
 
 {
   socks: 0,
   spoons: 2,
   nutella_jar: 0,
   keys: 3,
   shoelaces: 0,
   rotisserie_chicken: 0
 }, 
 {
   socks: 0,
   spoons: 0,
   nutella_jar: 0,
   keys: 0,
   shoelaces: 14,
   rotisserie_chicken: 0
 }
 ]

 //part 1
 amount=0; //var for amount of obj stolen
   function total(){ //checks total amount of object from each household
     for (let i=0; i<stolenItems.length; i++) {
       amount=stolenItems[i].socks+stolenItems[i].spoons+stolenItems[i].nutella_jar+stolenItems[i].keys+stolenItems[i].shoelaces+stolenItems[i].rotisserie_chicken; //adds eveything from 1 house
       if(amount==0){ //if nothing stolen
        amount="Lucky You";
      }
      console.log("house"+(i+1)+": "+amount); //projects amount
      }
   }
  total();

  //part 2
  obj=["socks","spoons","nutella_jar","keys","shoelaces","rotisserie_chicken"]; //array of all types of item (latter used to find if this item is stolen from each home)
  function stolen(house,object,which){
    if(which==1){
      if(house[object]==0){ //checks if the house's object has 0 item stolen or not ex. house 1's sock should be 7 so false
        return "nope";
      } else{
        return "yes";
      }
    }
    if(which==2){
      return house[object]
    }
   }
  for (let i=0; i<stolenItems.length; i++) { //checks all houses
    for(let k=0; k<6; k++){ //checks all item
    console.log("Is house"+(i+1)+"'s "+obj[k]+" stolen? "+stolen(stolenItems[i],obj[k],1)) //shows if the house has a certain item stolen
   }
  }

//part 3
  totalstolen=[0,0,0,0,0,0] //all amount of stolen item
  for (let i=0; i<stolenItems.length; i++) { //checks all houses
    for(let k=0; k<6; k++){ //checks all item
    totalstolen[k]=totalstolen[k]+stolen(stolenItems[i],obj[k],2) //adds the amount of object to there correct values in array
   }
  }
  console.log("The most amount of stolen item is: "+obj[totalstolen.indexOf(Math.max(...totalstolen))]) //math.max finds the highest value of array and then i need to find the index of the highest to see which object it was then i just anounce which object it is

//part 4 just read along the crime investigstion and who the real culpruit is
console.log(" ")
console.log("Loaction: Noah Noah Police Station         Time: 2:48P.M.")
console.log("It's been an hour since we investigated the crime scene and got are main suspects and interviewed them")
console.log(" ")
console.log("Me: When I interview yall said this: cat was sleeping at home, squirrel was eating nuts, seagull was flying, fox was hanging out with your bros")
console.log("Most of yall have an alibi except you fox: cat's house had keys lock and no way to escape home, squril likes nuts and the stolen item didnt include nuts, there were suspects of seagul flying at that time so he has alibi, fox you were hanging with your bros doing what? also theres still one of your socks that you stole on your head")
console.log("I think the suspect is you, Fox.")
console.log(" ")
console.log("Fox: I told you I was playing uh-- games with my bros. You can ask them if you want. eh he he")
console.log(" ")
console.log("Me: hmmmm. then what's in that bag of yours?")
console.log(" ")
console.log("Fox: Uh umm a birthday pressent I was gonna give to my pal.")
console.log(" ")
console.log("Im pretty sure thats not it. It seems pretty big to be a birthday pressent. Also here Ill give you rabbit meat if you confess.")
console.log(" ")
console.log("Fox: Fine you got me. I pled guilty.")
console.log(" ")
console.log("Thats how I, Detective Noah became evryone's favorite detective in the city. THE END")