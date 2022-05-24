export default class Node{
    #data = null;
    get Data(){
        return this.#data;
    }
    set Data(data){
        this.#data = data;
    }
    constructor(data){
        this.Data = data;
    };
}