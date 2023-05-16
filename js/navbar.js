let nav = $('#nav .container');

nav.html(`
<ul class="navbar">
    <li id="logo">
        <img id="img_logo" src="assets/TeaPot (Logo).png" alt="">
        <div class="font_logo" style="display: inline;color: #8CC63F;">Tea</div>
        <div class="font_logo" style="display: inline;color: black;">Pot</div>
    </li>
    <div id="navbar_menu"></div>
    <i class="bi bi-filter-left" id="burger_icon" onclick="sidebarToggle()"></i>
</ul>
<div id="burger_menu"></div>
`
);

let navbar_menu = $('#navbar_menu');
let burger_menu = $('#burger_menu');

function generateMenu(menus) {
    navbar_menu.html('');
    burger_menu.html('');
    $.each(menus, function (index, menu) {
        let currentUrl = window.location.href;
        currentUrl = currentUrl.split('/');
        currentUrl = currentUrl[currentUrl.length - 1];
        // console.log(currentUrl);
        navbar_menu.append(`<li><a class="${currentUrl.includes(menu.href) ? 'page_now' : ''}" href="${menu.href}">${menu.menu}</a></li>`);
        burger_menu.append(`<a class="burger_detail ${currentUrl.includes(menu.href) ? 'burger_page_now' : ''}" href="${menu.href}">${menu.menu}</a>`);
    });
};
generateMenu(menus);

function sidebarToggle(){
    let burger_menu = document.getElementById('burger_menu');
    burger_menu.style.display = burger_menu.style.display == 'block' ? 'none' : 'block';
}