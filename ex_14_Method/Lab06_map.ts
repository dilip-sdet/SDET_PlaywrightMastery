let probable11:string[] = ["Abhishek Sharm", "Sanju Samson", "Ishan Kishan", "Shreyas Iyer", "Tilak Verma", "Shivam Dube", "Naman Dir", "Axar Patel", "Arshdeep Singh", "Prince Yadav", "Kuldeep Yadav", "Mayank Yadav"];
let team = probable11.map(function(list,index):string{
    return `${index} => ${list.toUpperCase()}`
})
console.log(team)