function Hoskeper(name , age ){
    this.name=name;
    this.age=age;
    this.clean = function(){
        console.log("clesning going on ");
    }
}

var hos1= new Hoskeper("tata","34");
 hos1.clean();
console.log(hos1);