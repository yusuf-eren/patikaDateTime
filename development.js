let ad = prompt("Lütfen Adınızı Giriniz")

document.querySelector("#isim").innerHTML = `Merhaba, ${ad} Hoşgeldiniz!`

let tarih = new Date();
let saat = tarih.getHours();
let dakika = tarih.getMinutes();
let saniye = tarih.getSeconds();
let gun = tarih.getDay()
switch(gun){
    case 1:
        gun = "Pazartesi"
    case 2:
        gun = "Salı"
    case 3:
        gun = "Çarşamba"
    case 4:
        gun = "Perşembe"
    case 5:
        gun = "Cuma"
    case 6:
        gun = "Cumartesi"
    case 7:
        gun = "Pazar"
}

tarih_total = `${gun} ${saat}:${dakika}:${saniye}`
document.querySelector("#tarih").innerHTML = `${tarih_total}`