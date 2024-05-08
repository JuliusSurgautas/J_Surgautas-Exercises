function sequence(a)
{
    if (a.length == 0)
        return [0, 0]
   
    let s = 0
    let e = a.length - 1
    while (s < e)
    {
        let m = Math.floor((s + e) / 2);
   
       
        if (a[m] >= m + a[0])
            s = m + 1
   
        else
            e = m
    }
    return [a[s], a.length - (
                a[a.length - 1] - a[0])]
}

let p = sequence([1, 2, 3, 4, 4, 4, 5, 6])
document.write("elementai kurie kartojasi "+ p[0]+
             ", jie kartojasi "+ p[1]+ " kartu")