
var logger = {
    x: 0,
    updateCount: function(){
        this.x++;
        console.log(this.x);
    }
}

logger.updateCount();