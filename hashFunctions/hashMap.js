class HashMap {
    constructor(hashFunc = defaultHashFunction, capacity = 16) {
        this.defaultHashFunction = defaultHashFunction;
        this.capacity = capacity;
        this.bucket = bucket;
    }
    defaultHashFunction(key){
        const str = String(key);
        let hash =0
        for(let i = 0; i < str.length; i++){
            hash= hash*31+ str.charCodeAt(i)
        }
        return hash;
    }

    getBucketIndex(key){
        const hash = this.defaultHashFunction(key);

    }
    set(key,value) {

    }
    get(key) {

    }
    delete(key) {

    }
    has(key) {

    }
    values(){
       return this.bucket.flat().map((entry) =>entry.value())

    }
    keys(){
        return this.buckets.flat().map(entry => entry.key);
    }

}