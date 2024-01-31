let deze = 100;
let talpa = 35;


if(deze > talpa){
    let k = 0;
    do {
        deze -= talpa;
        k = k + 1;
    } while (deze >= 0);
    
    console.log(`Sunkvezimis nuvaziuos ${k} kartu(s) kad pervezti visas dezes.`);
} else if(deze < talpa){
    console.log(`Sunkvezimis nuvaziuos 1 karta kad pervezti visas dezes.`)
}