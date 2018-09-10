// import modules
require('prototype.spawn')();
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleWallRepairer = require('role.wallRepairer');
var roleLongDistanceHarvester = require('role.longDistanceHarvester');
var roleClaimer = require('role.claimer');
var roleMiner = require('role.miner');
var roleLorry = require('role.lorry');
var roleSoldier = require('role.soldier');
var roleAttacker = require('role.attacker');
var roleHealer = require('role.healer');

module.exports.loop = function () {
    // check for memory entries of died creeps by iterating over Memory.creeps
    for (let name in Memory.creeps) {
        // and checking if the creep is still alive
        if (Game.creeps[name] == undefined) {
            // if not, delete the memory entry
            delete Memory.creeps[name];
        }
    }




//*******************************************************

let flag1 = Game.flags.Flag1;  // produkcja wojownikow (jest tez ustawiona autoatycznie)
let flag2 = Game.flags.Flag2;  // goto


// console.log('ok jestem przed if');

// if (flag1) {  
//     let creepnowy = Game.creeps.attacker;
    
//     if (creepnowy) { 
//         if (creepnowy.pos.roomName === flag1.pos.roomName) {
//             let spawn = creepnowy.room.find(FIND_HOSTILE_SPAWNS)[0];
//             let outcome = creepnowy.attack(spawn);
//             if (outcome === ERR_NOT_IN_RANGE) creep.moveTo(spawn)
//         }
//         else {  
//             creepnowy.moveTo(flag2)
//         }
//     }
//     else {  
//         Game.spawns.Spawn1.createCreep([MOVE,MOVE,MOVE,ATTACK], "attacker")
//     }
// }

if (flag1) {  
    

     Game.spawns.Spawn1.createCreep([MOVE,MOVE,MOVE,WORK,WORK,WORK,MOVE,CARRY], undefined, {role:'attacker', working:false});
     

}


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
 
 
 
 

//********************************************************


    // for every creep name in Game.creeps
    for (let name in Game.creeps) {
        // get the creep object
        var creep = Game.creeps[name];

        // if creep is harvester, call harvester script
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        // if creep is upgrader, call upgrader script
        else if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        // if creep is builder, call builder script
        else if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        // if creep is repairer, call repairer script
        else if (creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
        // if creep is wallRepairer, call wallRepairer script
        else if (creep.memory.role == 'wallRepairer') {
            roleWallRepairer.run(creep);
        }
        // if creep is longDistanceHarvester, call longDistanceHarvester script
        else if (creep.memory.role == 'longDistanceHarvester') {
            roleLongDistanceHarvester.run(creep);
        }
        // if creep is claimer, call claimer script
        else if (creep.memory.role == 'claimer') {
            roleClaimer.run(creep);
        }
        // if creep is miner, call miner script
        else if (creep.memory.role == 'miner') {
            roleMiner.run(creep);
        }
        // if creep is lorry, call miner lorry
        else if (creep.memory.role == 'lorry') {
            roleLorry.run(creep);
        }

                // if creep is soldier, call soldier
                else if (creep.memory.role == 'soldier') {
                    roleSoldier.run(creep);
                }
                
                
                // if creep is attcker, call attacket
                else if (creep.memory.role == 'attacker') {
                    roleAttacker.run(creep);
                }
                
                                // if creep is attcker, call attacket
                else if (creep.memory.role == 'healer') {
                    roleHealer.run(creep);
                }
    }

    // find all towers
    var towers = _.filter(Game.structures, s => s.structureType == STRUCTURE_TOWER);
    // for each tower
    for (let tower of towers) {
        // find closes hostile creep
        var target = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        // if one is found...
        if (target != undefined) {
            // ...FIRE!
            tower.attack(target);
        }
    }

    // iterate over all the spawns
    for (let spawnName in Game.spawns) {
        /** @type {Spawn} */
        let spawn = Game.spawns[spawnName];
        let creepsInRoom = spawn.room.find(FIND_MY_CREEPS);
        /** @type {Room} */
        let room = spawn.room;

        // count the number of creeps alive for each role in this room
        // _.sum will count the number of properties in Game.creeps filtered by the
        //  arrow function, which checks for the creep being a specific role
        var numberOfHarvesters = _.sum(creepsInRoom, (c) => c.memory.role == 'harvester');
        var numberOfUpgraders = _.sum(creepsInRoom, (c) => c.memory.role == 'upgrader');
        var numberOfBuilders = _.sum(creepsInRoom, (c) => c.memory.role == 'builder');
        var numberOfRepairers = _.sum(creepsInRoom, (c) => c.memory.role == 'repairer');
        var numberOfWallRepairers = _.sum(creepsInRoom, (c) => c.memory.role == 'wallRepairer');
        var numberOfMiners = _.sum(creepsInRoom, (c) => c.memory.role == 'miner');
        var numberOfLorries = _.sum(creepsInRoom, (c) => c.memory.role == 'lorry');
        // count the number of long distance harvesters globally
        var numberOfLongDistanceHarvestersW13S49 = _.sum(Game.creeps, (c) =>
            c.memory.role == 'longDistanceHarvester' && c.memory.target == 'W13S49');
        var numberOfLongDistanceHarvestersW52N78 = _.sum(Game.creeps, (c) =>
            c.memory.role == 'longDistanceHarvester' && c.memory.target == 'W52S55');
        var numberOfSoldiers = _.sum(creepsInRoom, (c) => c.memory.role == 'soldier');   
        
        var numberOfClaimers = _.sum(Game.creeps, (c) => c.memory.role == 'claimer'); 
        //console.log(numberOfClaimers);
        
                var numberOfAttackers = _.sum(Game.creeps, (c) => c.memory.role == 'attacker'); 
        //console.log(numberOfAttacker);

        var energy = spawn.room.energyCapacityAvailable;
        var name = undefined;

        // if no harvesters are left AND either no miners or no lorries are left
        //  create a backup creep
        

        if (numberOfHarvesters == 0 && numberOfLorries == 0) {
            // if there are still miners left
            if (numberOfMiners > 0 ||
                (spawn.room.storage != undefined && spawn.room.storage.store[RESOURCE_ENERGY] >= 150 + 550)) {
                // create a lorry
                
                name = spawn.createLorry(150);
            }
            // if there is no miner left
            else {
               
                // create a harvester because it can work on its own
                name = spawn.createCustomCreep(spawn.room.energyAvailable, 'harvester');
            }
        }
        // if no backup creep is required
        else {
            // check if all sources have miners
             
            let sources = spawn.room.find(FIND_SOURCES);
            // iterate over all sources
            for (let source of sources) {
                // if the source has no miner
                if (!_.some(creepsInRoom, c => c.memory.role == 'miner' && c.memory.sourceId == source.id)) {
                    // check whether or not the source has a container
                    let containers = source.pos.findInRange(FIND_STRUCTURES, 1, {
                        filter: s => s.structureType == STRUCTURE_CONTAINER
                    });
                    // if there is a container next to the source
                    if (containers.length > 0) {
                        // spawn a miner
                        console.log(energy);
                
                        
                        name = spawn.createMiner(source.id);
                        break;
                    }
                }
            }
        }

        // if none of the above caused a spawn command check for other roles



        
        if (name == undefined) {
            // if not enough harvesters
            if (numberOfHarvesters < spawn.memory.minHarvesters) {
                // try to spawn one
                name = spawn.createCustomCreep(energy, 'harvester');
            }
            // if not enough lorries
            else if (numberOfLorries < spawn.memory.minLorries) {
                // try to spawn one
                name = spawn.createLorry(150);
               // console.log(numberOfLorries);
                //console.log(spawn.memory.minLorries);


            }
            
            // if there is a claim order defined
            //else if (spawn.memory.claimRoom != undefined) {
            else if (numberOfClaimers >2) {                         // >2 to sie nie robia 
                // try to spawn a claimer
                
                spawn.memory.claimRoom = 'W14S47'; //ustawiam recznie
                
                name = spawn.createClaimer(spawn.memory.claimRoom);
                // if that worked
               // if (!(name < 0)) {
                    // delete the claim order
                //    delete spawn.memory.claimRoom;
                //}
            }
            // if not enough upgraders
            else if (numberOfUpgraders < spawn.memory.minUpgraders) {
                // try to spawn one
                name = spawn.createCustomCreep(energy, 'upgrader');
            }
            // if not enough repairers
            else if (numberOfRepairers < spawn.memory.minRepairers) {
                // try to spawn one
                name = spawn.createCustomCreep(energy, 'repairer');
            }
            // if not enough builders
            else if (numberOfBuilders < spawn.memory.minBuilders) {
                // try to spawn one
                name = spawn.createCustomCreep(energy, 'builder');
            }
            // if not enough wallRepairers
            else if (numberOfWallRepairers < spawn.memory.minWallRepairers) {
                // try to spawn one
                name = spawn.createCustomCreep(energy, 'wallRepairer');
            }
            // if not enough longDistanceHarvesters for W13S49
                    //console.log('przed probowaniem wyspawnowania long distance spwanac w main linia 308');
    // oryg        else if (numberOfLongDistanceHarvestersW13S49 < spawn.memory.minLDHW13S49) {
                
             else if (numberOfLongDistanceHarvestersW13S49 < 3) {               
                
                // try to spawn one
                console.log('probuje long distance spwanac w main linia 311');

                name = spawn.createLongDistanceHarvester(energy, 1, spawn.room.name, 'W13S49', 0);
            }
            // if not enough longDistanceHarvesters for W52N78
           // else if (numberOfLongDistanceHarvestersW54S78 > spawn.memory.minLDHW54S78) {
                // try to spawn one
                

            //    name = spawn.createLongDistanceHarvester(energy, 1, spawn.room.name, 'W52S55', 0);
           // }
            // if not enough soldiers
         

            else if (numberOfSoldiers < spawn.memory.minSoldiers) {
                // try to spawn one
               // console.log("doszedlem do soldiers tworzenia");

                name = spawn.createSoldier(energy, 'soldier');
            }
            
            else if (numberOfAttackers > 3) {   // wieksza niz 3 czyli nigdy. wylaczylem attackers ktory byli builderami dla nowej kolonii w sumie. kolonia ok juz wiec nie trzeba
                // try to spawn one


                name = spawn.createAttacker(energy, 'attacker');
            }


            else {

            
                // else try to spawn a builder
                // name = spawn.createCustomCreep(energy, 'builder');
                name = -1;
            }
        }

        // te dane wchodza do pamieci recznie Game.spawns.Spawn1.memory.minLorries claimRoom W52S55
        // Game.spawns.Spawn1.memory.minSoldiers = 5
        // Game.spawns.Spawn1.memory.claimRoom = 'W52S55'



        // print name to console if spawning was a success
        // name > 0 would not work since string > 0 returns false
        if (!(name < 0)) {
            console.log(spawnName + " spawned new creep: " + name + " (" + Game.creeps[name].memory.role + ")");
            console.log("Harvesters    : " + numberOfHarvesters + "  min number  : " + spawn.memory.minHarvesters);
            console.log("Upgraders     : " + numberOfUpgraders + "  min number  : "+ spawn.memory.minUpgraders);
            console.log("Builders      : " + numberOfBuilders+ "  min number  : "+ spawn.memory.minBuilders);
            console.log("Repairers     : " + numberOfRepairers+ "  min number  : "+ spawn.memory.minRepairers);
            console.log("WallRepairers : " + numberOfWallRepairers + "  min number  : "+ spawn.memory.minWallRepairers);
            console.log("Miners        : " + numberOfMiners+ "  min number  : "+ spawn.memory.minMiners);
            console.log("Lorries       : " + numberOfLorries+ "  min number  : "+ spawn.memory.minLorries);
            console.log("W13S49    : " + numberOfLongDistanceHarvestersW13S49 + "  min number   : " + spawn.memory.minLDHW13S49);
            console.log("Claim room    : " + spawn.memory.claimRoom);
            console.log("Soldiers    : " + numberOfSoldiers + "  min number  : "+ spawn.memory.minSoldiers);
            console.log("Claimers    : " + numberOfClaimers + "  min number  : " + 2);
            console.log("Attackers    : " + numberOfAttackers + "  min number  :  3");
            
        }
    }
};