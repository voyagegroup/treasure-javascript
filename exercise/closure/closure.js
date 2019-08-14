function counter() {
    let n = 0;

    return {
        increment: function() {
            n = n + 1;
        },

        total:function(){
            return n
        }
    }
}

const n2 = counter()
n2.increment()
n2.increment()

class counter{
    constructor(){
        this.n = 0
    }

    increment(){
        this.n = this.n + 1;
    }

    total() { 
        return this.n
    }
}