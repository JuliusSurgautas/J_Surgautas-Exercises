let seimNariai = window.prompt("kiek jus turite seimos nariu? (max:2)");
let parent1 = 0;
let parent2 = 0;
let pajamos = 0;
let bendrPajamos;

//redo with switch case

if(seimNariai == 1){
    parent1 = window.prompt("1 seimos nario pajamos per menesi?");
    pajamos = parent1 > 1500 ? "Bankas suteiks paskola." : "Bankas paskolos nesuteiks.";
    console.log(pajamos);
} else if(seimNariai == 2){
    parent1 = window.prompt("1 seimos nario pajamos per menesi?");
    parent2 = window.prompt("2 seimos nario pajamos per menesi?");
    bendrPajamos = parent1 + parent2;
    pajamos = bendrPajamos > 5000 ? "Bankas suteiks paskola." : "Bankas paskolos nesuteiks.";
    console.log(pajamos);
} else {
    console.log("Turi daugiau nei 2 tevus. Tai neimanoma.")
}