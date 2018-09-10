module.exports = function() {
    
    
    var maxnumberOfParts = 3;
    
    // create a new function for StructureSpawn
    StructureSpawn.prototype.createCustomCreep =
        function(energy, roleName) {
            // create a balanced body as big as possible with the given energy
            var numberOfParts = Math.floor(energy / 200);
            
            if (numberOfParts > maxnumberOfParts) {
                numberOfParts = maxnumberOfParts;
            }
            
            var body = [];
            for (let i = 0; i < numberOfParts; i++) {
                body.push(WORK);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(CARRY);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }

            // create creep with the created body and the given role
            return this.createCreep(body, undefined, { role: roleName, working: false });
        };

    // create a new function for StructureSpawn
    StructureSpawn.prototype.createLongDistanceHarvester =
        function (energy, numberOfWorkParts, home, target, sourceIndex) {
            // create a body with the specified number of WORK parts and one MOVE part per non-MOVE part
            console.log('probuje long distanca w pototype spawn');
            
            var body = [];
            for (let i = 0; i < numberOfWorkParts; i++) {
                body.push(WORK);
            }

            // 150 = 100 (cost of WORK) + 50 (cost of MOVE)
            energy -= 150 * numberOfWorkParts;

            var numberOfParts = Math.floor(energy / 100);
            
               if (numberOfParts > maxnumberOfParts) {
                numberOfParts = maxnumberOfParts;
            }
            
            
            for (let i = 0; i < numberOfParts; i++) {
                body.push(CARRY);
            }
            for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
                body.push(MOVE);
            }

            // create creep with the created body
            return this.createCreep(body, undefined, {
                role: 'longDistanceHarvester',
                home: home,
                target: target,                           // orugonslnir bylo target: target, zminilem 
                sourceIndex: sourceIndex,
                working: false
            });
        };
    
    // create a new function for StructureSpawn
    StructureSpawn.prototype.createClaimer =
        function (target) {
            // to oryginalna linia return this.createCreep([CLAIM, MOVE], undefined, { role: 'claimer', target: target });
            return this.createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE, MOVE, MOVE], undefined, { role: 'claimer', target: target });
        };

    // create a new function for StructureSpawn
    StructureSpawn.prototype.createMiner =
        function (sourceId) {  
            console.log('proba robienia minera');
            return this.createCreep([ WORK, WORK, WORK, WORK, WORK, MOVE], undefined,
                                    { role: 'miner', sourceId: sourceId });  // zmniejszylem work bo nie dalo rady a pozniej wrocilem na 5 work POTRZEBA 5X EXTENSION!
        };

    // create a new function for StructureSpawn
    StructureSpawn.prototype.createLorry =
        function (energy) {
            // create a body with twice as many CARRY as MOVE parts
            var numberOfParts = Math.floor(energy / 150);
            var body = [];
            for (let i = 0; i < numberOfParts * 2; i++) {
                body.push(CARRY);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }

            // create creep with the created body and the role 'lorry'
            return this.createCreep(body, undefined, { role: 'lorry', working: false });
        };

    // create a new function for StructureSpawn
    StructureSpawn.prototype.createSoldier =
        function (energy) {
            // create a body with twice as many Attack as MOVE parts
            var numberOfParts = Math.floor(2);
            var body = [];

            for (let i = 0; i < numberOfParts * 2; i++) {
                body.push(ATTACK);
            }
            for (let i = 0; i < numberOfParts; i++) {
                body.push(MOVE);
            }

            //console.log('robie soldier w prototype  : ' + numberOfParts);

            // create creep with the created body and the role 'soldier'
            return this.createCreep(body, undefined, { role: 'soldier', working: false });
        };
        
    // create a new function for StructureSpawn
    StructureSpawn.prototype.createAttacker =
        function (energy) {
            // create a body with same  many Attack as MOVE parts
            var numberOfParts = Math.floor(2);
            numberOfParts = 1;  //ograniczam na swarm
            var body = [];

            for (let i = 0; i < numberOfParts * 4; i++) {
                body.push(WORK);
            }
            for (let i = 0; i < numberOfParts * 4; i++) {
                body.push(MOVE);
            }
             for (let i = 0; i < numberOfParts * 1; i++) {
                body.push(CARRY);
            }


            // create creep with the created body and the role 'soldier'
            return this.createCreep(body, undefined, { role: 'attacker', working: false });
        };

};