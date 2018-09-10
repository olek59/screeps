module.exports = {
    run: function(creep) {
	

            target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS)
            

            if(target) {
                result = creep.attack(target)
                if(result == OK){
                    
                }else if(result == ERR_NOT_IN_RANGE){
                    creep.moveTo(target)
                } 
            } else {
                creep.move(_.sample([TOP, TOP_RIGHT, RIGHT, BOTTOM_RIGHT, BOTTOM, BOTTOM_LEFT, LEFT, TOP_LEFT]))
            }
       
	}
};

