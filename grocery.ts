class Grocery {
    name: string;
    quantity: number;

    constructor(name: string, quantity: number){
        this.name = name;
        this.quantity = quantity; 
    }
}

var apples = new Grocery("apples", 1);
var grapes = new Grocery("grapes", 2);
var bananas = new Grocery("bananas", 3);

var groceries:Grocery[];
groceries = [apples, grapes, bananas];

for (var i = 0; i < groceries.length; i++) {
    document.write(groceries[i].name);
    document.write("<br>");
}


