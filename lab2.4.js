function fn() {
    const user1 = {
        name: "Ivan"
    };
    let user2 = {
        name:"Sanya"
    };

    user1.name = "Max";
    user2.name = "Vlad";
    console.log(user1);
    console.log(user2);
    
    user2 = {
        name: "Tim"
    };
    console.log(user2);   
}
fn();



function createUser(name,city){
    return {
        name: name,
        city: city,
    }
}
console.log(createUser("Nekit","Kyiv"))