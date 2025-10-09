let umur = 16;
let tinggi = 125;

let tarif; //Variabel untuk menyimpan hasil tarif

//logika penentuan tarif
if (umur < 1) {
    console.log("Dilarang masuk");
} else if (umur < 3) {
    tarif = 30000;
    if (tinggi > 70) {
        tarif += 10000;
    }
    console.log(`Umur anak: ${umur} tahun`);
    console.log(`Tinggi anak: ${tinggi} cm`);
    console.log(`Tarif: Rp${tarif}`);
} else if (umur < 7) {
    tarif = 40000;
    if (tinggi > 120) {
        tarif += 15000;
    }
    console.log(`Umur anak: ${umur} tahun`);
    console.log(`Tinggi anak: ${tinggi} cm`);
    console.log(`Tarif: Rp${tarif}`);
} else if (umur < 10) {
    tarif = 50000;
    if (tinggi > 150) {
        tarif += 20000;
    }
    console.log(`Umur anak: ${umur} tahun`);
    console.log(`Tinggi anak: ${tinggi} cm`);
    console.log(`Tarif: Rp${tarif}`);
} else {
    tarif = 80000;
    console.log(`Umur anak: ${umur} tahun`);
    console.log(`Tinggi anak: ${tinggi} cm`);
    console.log(`Tarif: Rp${tarif}`);
}