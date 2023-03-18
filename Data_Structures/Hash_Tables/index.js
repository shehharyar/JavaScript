

class HashTable{
    constructor(size){
        this.data= new Array(size);
        // [['grapes', 10000]]

        
    }
    
    
    _hash(key){
        let hash = 0;
        for (let i =0; i< key.length; i++){
            hash= (hash + key.charCodeAt(i) *i) %this.data.length
        }
        return hash;
    }
    set(key, value){
        let address=this._hash(key);
        if(!this.data[address]){
            this.data[address]=[];
            // console.log(this.data)
        }
        this.data[address]= this.data.push([key, value]);
        return this.data;

    }

    get (key){
        let address = this._hash(key)
        const currentBucket= this.data[address];
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0]== key){
                    console.log(currentBucket[i][0])
                    return currentBucket[i];
                }
            }
        }

        // console.log(currentBucket);
        return undefined;
    }
    keys(){
        const keysArray= [];
        for (let i = 0; i < this.data.length; i++){
            if(this.data[i]){
                    // console.log(this.data[i][0])
                keysArray.push(this.data[i][0])
            }
        for (var key in keysArray){
            // console.log(keysArray[key])
            return keysArray[key];
        }
        }
    }

}

const myHashTable= new HashTable(500);

myHashTable.set('apples', 100);
myHashTable.set('bananas', 54);
myHashTable.set('apples', 67);
myHashTable.set('grapes', 10000);
myHashTable.get('apples');
console.log(myHashTable.keys())

// var gethash=myHashTable.get('grapes');
// console.log(myHashTable)
