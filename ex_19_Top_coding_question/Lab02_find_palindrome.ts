let palindromeName : string = "Markram";
let reverse : string = "";
for(let i=palindromeName.length-1;i>=0;i--){
    reverse = reverse + palindromeName.charAt(i);
}
console.log(palindromeName.toLowerCase());
console.log(reverse.toLowerCase());
if(reverse.toLowerCase()===palindromeName.toLowerCase()){
    console.log("Name is Palindrome");
}else{
    console.log("Name is not Palindrome");
}

