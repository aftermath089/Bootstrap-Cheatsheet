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

    all() { }       // get all item in collection
    update() { }    //update a specific value
    find() { }      // find a specific value
  }