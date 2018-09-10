module.exports = {
    run: function(creep) {
	

            target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS)
            let flag2 = Game.flags.Flag2;

            if(target) {
                result = creep.attack(target)
                if(result == OK){
                    
                }else if(result == ERR_NOT_IN_RANGE){
                    creep.moveTo(target)
                } 
            } else {
                 creep.moveTo(flag2);
            }
       
	}
};