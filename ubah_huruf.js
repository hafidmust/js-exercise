
/**
 * 
 * Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string.
 * Function akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya.
 * Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.
 * 
 */


function ubahHuruf(kata) {
    // you can only write your code here!
    var all_chars = kata.split("");
    for (var i = 0; i < all_chars.length; i++) {
        var n = all_chars[i].charCodeAt() - 'a'.charCodeAt();
        n = (n + 1) % 26;
        all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt());
    }
    return all_chars.join("");
}
  
// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
