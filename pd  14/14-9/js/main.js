let lastelės = 1;

const laikoIntervalas = 3;

const laikoTarpai = [3, 6, 9, 12, 15, 18, 21, 24];

for (let laikas = 0; laikas <= 24; laikas++) {
    if (laikoTarpai.includes(laikas)) {
        console.log(`Po ${laikas} valandų bus ${lastelės} lastelės.`);
    }
    if (laikas % laikoIntervalas === 0) {
        lastelės *= 2;
    }
}