var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

for (var i in users){
    if(users[i].name == "John"){
        console.log((users[i].age));
    }
}

console.log((users[0].name));

for (var i in users){
    console.log(users[i].name, "-", users[i].age);
}