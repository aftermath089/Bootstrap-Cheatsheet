export default class Model {

    constructor(data = []) {
      this.$collection = []

      if(data.length){
          this.record(data)
      }
    }
  
    record(data) {     //takes value and record it
        this.$collection.push(...data)
    }

    all() {             // get all item in collection
        //return only copy of the array so the original array isnot changeable
        return this.$collection.map(entry => Object.assign({}, entry))
    }       
    update() { }    //update a specific value

    find(value) {       // find a specific value
        const primaryKey = 'id'
        const entry =  this.$collection.find(entry => entry[primaryKey] === value)
        
        return entry ? Object.assign({}, entry) : null //make sure to always return the copy so its ucnchageable
    }
  }