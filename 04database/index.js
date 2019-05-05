var config = require("./class.json");

// console.log(config.length);

var s = config.find(function(x){
    return x.name === "1A";
});


console.log(s.students);    