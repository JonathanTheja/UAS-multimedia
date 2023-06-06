
let contentPage = 12;
let selectedMinuman;

function cetakMinuman(page) {
    document.getElementById('minuman').innerHTML = '';
    selectedMinuman.forEach((m, index) => {
        let id = minuman.findIndex(mm => mm.nama == m.nama);
        if (index >= page * contentPage && index < (page + 1) * contentPage) {
            document.getElementById('minuman').innerHTML += `
            <div class="card card-color m-3" style="width: 17rem;">
                <img src="./assets/${m.image ? m.image : ""}" class="card-img-center img-product" alt="...">
                <div class="card-body d-flex flex-column justify-content-end align-items-center">
                    <p class="card-title namaproduct text-center">${m.nama}</p>
                    <p class="card-text">${formatRupiah(m.harga)}</p>
                    <p class="card-text dibeli">30 Kali Dibeli</p>
                    <div class='d-flex justify-content-evenly align-items-center w-100'>
                        <a href="#" class="btn btn-success">Beli</a>
                        <a href='./detail.html#minuman${id}' class='btn btn-warning text-light' onclick='setTimeout(() => {window.location.reload()}, 500)'>Detail</a>
                    </div>
                </div>
            </div>
            `;
        }
    });
}

function cetakKue(page) {
    document.getElementById('kue').innerHTML = '';
    kue.forEach((k, index) => {
        if (index >= page * contentPage && index < (page + 1) * contentPage) {
            document.getElementById('kue').innerHTML += `
            <div class="card card-color m-3" style="width: 17rem;">
                <img src="./assets/${k.image ? k.image : ""}" class="card-img-center img-product" alt="...">
                <div class="card-body d-flex flex-column justify-content-end align-items-center">
                    <p class="card-title namaproduct text-center">${k.nama}</p>
                    <p class="card-text">${formatRupiah(k.harga)}</p>
                    <p class="card-text dibeli">30 Kali Dibeli</p>
                    <div class='d-flex justify-content-evenly align-items-center w-100'>
                        <a href="#" class="btn btn-success">Beli</a>
                        <a href='./detail.html#kue${index}' class='btn btn-warning text-light' onclick='setTimeout(() => {window.location.reload()}, 500)'>Detail</a>
                    </div>
                </div>
            </div>
            `;
        }
    });
}

function changePageMinuman(page) {
    const pageItems = document.querySelectorAll('.pagination .page-item.minuman');
    pageItems.forEach((item) => {
        if (item.innerText == page + 1) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    cetakMinuman(page);
}

function changePageKue(page) {
    const pageItems = document.querySelectorAll('.pagination .page-item.kue');
    pageItems.forEach((item) => {
        if (item.innerText == page + 1) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    cetakKue(page);
}

function cetakPageMinuman(isFirst) {
    let paginationHTML = `
    <div class='d-flex justify-content-center align-items-center'>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
    `;

    for (let i = 0; i < parseInt(Math.ceil(selectedMinuman.length / contentPage)); i++) {
        if (isFirst && i == 0) {
            paginationHTML += `
            <li class="page-item minuman active" onclick='changePageMinuman(${i})'><a class="page-link" href='#navPaginationMinuman'>${i + 1}</a></li>
            `;
        } else {
            paginationHTML += `
            <li class="page-item minuman" onclick='changePageMinuman(${i})'><a class="page-link" href='#navPaginationMinuman'>${i + 1}</a></li>
            `;
        }
    }
    paginationHTML += `
            </ul>
        </nav>
    </div>
    `;

    document.getElementById('paginationMinuman').innerHTML += paginationHTML;
}

function updateMinuman(jenis) {
    if (jenis == 'semua') {
        selectedMinuman = minuman;
        cetakMinuman(0);
    } else if (jenis == 'teh') {
        selectedMinuman = minuman.filter(m => m.jenis == 'teh');
        cetakMinuman(0);
    } else {
        selectedMinuman = minuman.filter(m => m.jenis == 'kopi');
        cetakMinuman(0);
    }
    document.getElementById('paginationMinuman').innerHTML = '';
    cetakPageMinuman(true);
}
updateMinuman('semua');


function cetakPageKue(isFirst) {
    let paginationHTML = `
    <div class='d-flex justify-content-center align-items-center'>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
    `;

    for (let i = 0; i < parseInt(Math.ceil(kue.length / contentPage)); i++) {
        if (isFirst && i == 0) {
            paginationHTML += `
            <li class="page-item kue active" onclick='changePageKue(${i})'><a class="page-link" href='#navPaginationKue'>${i + 1}</a></li>
            `;
        } else {
            paginationHTML += `
            <li class="page-item kue" onclick='changePageKue(${i})'><a class="page-link" href='#navPaginationKue'>${i + 1}</a></li>
            `;
        }
    }
    paginationHTML += `
            </ul>
        </nav>
    </div>
    `;

    document.getElementById('paginationKue').innerHTML += paginationHTML;
}
cetakPageKue(true);
cetakKue(0);