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
   stuff.push(new houseitem(stolenItems))
   houseitem.total()
   class houseitem {
     constructor(item) {
       this.n=item
     }
     total(){
       for(i=0, i<this.n.length, i++){
         this.t=this.n.socks[i]+this.n.spoons[i]+this.n.nutella_jar[i]
       }
       if(stolenItems.length==0){
         t="Lucky You"
       } else{
         t=stolenItems.length
       }
       console.log(t)
     }
   }