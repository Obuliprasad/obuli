let number ="025468"
let num=number.split('')
sum=""
for(let i=0;i<num.length;i++){
 if(num[i]%2==0 && num[i+1]%2==0){
    sum+=num[i]+"-";
 }
 else{
    
    sum+=num[i]
 }
}
console.log(sum)

