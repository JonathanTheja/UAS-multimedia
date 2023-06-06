const formatRupiah = (angka) => {
    var rupiah = '';
    var angkaRev = angka.toString().split('').reverse().join('');

    for (var i = 0; i < angkaRev.length; i++) {
        if (i % 3 === 0) {
            rupiah += angkaRev.substr(i, 3) + '.';
        }
    }

    return 'Rp ' + rupiah.split('', rupiah.length - 1).reverse().join('');
}