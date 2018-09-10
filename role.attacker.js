module.exports = {
    run: function(creep) {
	
           let flag2 = Game.flags.Flag2;  //gotp
           let flag3 = Game.flags.Flag3;  //dismantle stru

            target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS)
            

            if(target) {
                result = creep.rangedAttack(target)
                if(result == OK){ 
                    
                }else if(result == ERR_NOT_IN_RANGE){
                    creep.moveTo(target)
                } 
            } else if (flag3) {
                
        console.log(creep.room.controller);        

        if(creep.room.controller && !creep.room.controller.my) {
            
            console.log('jestem ', creep.attackController(creep.room.controller));
            if(creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                
                console.log('ruszam na control');
                creep.moveTo(creep.room.controller);
                
            }
        }                
                
                
                
//                creep.dismantle(flag3);
//                creep.attackController(creep.room.controller);
//                creep.moveTo(flag3);
            } 
            
            
            
            
            else {
               // creep.moveTo(flag2)
                
                
                var pos1 = creep.pos

                var pos2 = flag2.pos

                if (pos1.isEqualTo(pos2)) {

                 console.log('arrives changing to builder...');
                 creep.memory.role = 'builder';
                 
                    
                    
                    
                }
                
                let result = creep.moveTo(pos2);
                console.log(`${creep} tried moving to ${flag2}. Result: ${result}`, pos1, pos2, creep.memory.role);
            }
       
	}
};

// ////
// ////
// if(creep.room.controller && !creep.room.controller.my) {
//     if(creep.attackController(creep.room.controller) == ERR_NOT_IN_RANGE) {
//         creep.moveTo(creep.room.controller);
//     }
// }


//////////////////// dzila ////////////
// module.exports = {
//     run: function(creep) {
	
//           let flag2 = Game.flags.Flag2;  //gotp
//           let flag3 = Game.flags.Flag3;  //dismantle stru

//             target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS)
            

//             if(target) {
//                 result = creep.attack(target)
//                 if(result == OK){
                    
//                 }else if(result == ERR_NOT_IN_RANGE){
//                     creep.moveTo(target)
//                 } 
//             } else {
//                 creep.moveTo(flag2)
//             }
       
// 	}
// };
// ////////////////////////////////////////////////

















//  module.exports = {
//     run: function(creep) {
	
//              let flag2 = Game.flags.Flag2;  //gotp
//              let flag3 = Game.flags.Flag3;  //dismantle stru
             
//              console.log('jestem w attacker');
            
//              target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
             
             
             
//                 if(target) {
//                                  result = creep.attack(target)
                                 
//                                  if(result == OK){}
                                 
//                                  else if(result == ERR_NOT_IN_RANGE){
//                                     creep.moveTo(target)
                        
                        
                        
                        
//                 }  else {  console.log('jestem moveto)');
//                 creep.moveTo(flag2);
                
//                 if(!target) { creep.moveTo(flag2);}
            
           
//     }//function
//  };//modul             
             

//             if(target) {
//                 result = creep.attack(target)
//                 if result == OK) {}
                    
//             }else if(result == ERR_NOT_IN_RANGE){
//                     creep.moveTo(target)
//             }else if(flag3)  {
// //            creep.dismantle();
//             creep.moveTo(flag3);
//             } else {
//                  creep.moveTo(flag2)
//             }
//     
//	}
// };

// oryginal
// module.exports = {
//     run: function(creep) {
	
//             let flag2 = Game.flags.Flag2;  //gotp
//             let flag3 = Game.flags.Flag3;  //dismantle stru
            
//             target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
//             target2 = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES);

//             if(target) {
//                 result = creep.attack(target)
//                 if(result == OK){
                    
//                 }else if(result == ERR_NOT_IN_RANGE){
//                     creep.moveTo(target)
//                 } 
//             } else {
//                  creep.moveTo(flag2);
//             }
       
// 	}
// };






// function costCallbackIgnoreRamparts(roomName, cm) {
//   var ramparts = Game.rooms[roomName].find(FIND_STRUCTURES, {filter: i => i.structureType == STRUCTURE_RAMPART || i.structureType == STRUCTURE_WALL});
//   ramparts.forEach(i => cm.set(i.pos.x, i.pos.y, 0));
// }


///
            // if(target) {
            //     result = creep.attack(target)
            //     if(result == OK){}
                
            //     else if(result == ERR_NOT_IN_RANGE){
            //         creep.moveTo(target)
            //     } 

            // else if(target2) {
            //     result = creep.attack(target)
            //     if(result == OK){}
                
            //     else if(result == ERR_NOT_IN_RANGE){
            //         creep.moveTo(target)
            //     } 


// if (flag2) {   
//     let creepnowy = Game.creeps.attacker;
    
    
    

//             target = creepnowy.pos.findClosestByPath(FIND_HOSTILE_CREEPS)
            

//             if(target) {
//                 result = creepnowy.attack(target)
//                 if(result == OK){
                    
//                 }else if(result == ERR_NOT_IN_RANGE){
//                     creepnowy.moveTo(target)
//                 } 
//             }    
    
    
    
    
//     if (creep) { 
       
//             creep.moveTo(flag2)
        
//     }
// }

//  console.log('ok jestem po calym kodzie');