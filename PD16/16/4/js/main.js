let n = 5; 
 
function faktorialas(n) { 
    let sk = 1; 
     
    if(n === 0)
        return 1;
    for (let i = 2; i <= n; i++) 
        sk = sk * i; 
    return sk; 
}
 
console.log(faktorialas(n));