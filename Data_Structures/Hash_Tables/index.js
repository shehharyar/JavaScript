

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
        console.log(currentBucket);
    }


}

const myHashTable= new HashTable(50);
// var hash= myHashTable.getHash();

// console.log(hash)
myHashTable.set('apples', 100);myHashTable.set('bananas', 54);myHashTable.set('apples', 67);
let hashedData=myHashTable.set('grapes', 10000);
myHashTable.get('apples');

// console.log(hashedData)

// var gethash=myHashTable.get('grapes');
// console.log(myHashTable)
