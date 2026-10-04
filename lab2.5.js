//телефони в массиві
const phones = [
    {name: "Maxim",phone: "+38098232123"},
    {name: "nekit",phone: "+38099898085"},
    {name: "Vitalya",phone: "+38045444552"},
    {name: "Andro",phone: "+38098223122"}
];

function findPhoneByName (name) {
    for(let i=0; i<phones.length;i++){
        if(phones[i].name===name){
            return phones[i].phone;
        }
    }
    return "телефон не знайденно";

}
console.log(findPhoneByName("Maxim"));
console.log(findPhoneByName("nekit"));
console.log(findPhoneByName("Vitalya"));
console.log(findPhoneByName("Andro"));




const hash = {
    "Maxim": "+38098232123",
    "nekit": "+38099898085",
    "Vitalya": "+38045444552",
    "Andro": "+38098223122"
};
function findPhoneByNameHash (name){
    return hash [name];
}
console.log(findPhoneByNameHash("Maxim"));
console.log(findPhoneByNameHash("nekit"));
console.log(findPhoneByNameHash("Vitalya"));
console.log(findPhoneByNameHash("Andro"));