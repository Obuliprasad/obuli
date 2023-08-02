function my (){
    event.preventDefault();
    const input=document.getElementById("input").value
    const res=document.getElementById("result")
    let n=input;
    let reverse="";
    let length = n.length;
    for (let i= length -1; i >= 0; i--)
    reverse=reverse+n.charAt(i);
    if (n==reverse) {
    let res1="palindrom" 
    res.innerHTML= res1;
    }
    else {
    let res1="Not Palindrom"
    res.innerHTML= res1;
    }
}