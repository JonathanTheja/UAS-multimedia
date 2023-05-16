let nav = $('#nav');

nav.html(`
<ul class="navbar">
    <li id="logo">
        <img id="img_logo" src="assets/TeaPot (Logo).png" alt="">
        <div class="font_logo" style="display: inline;color: #8CC63F;">Tea</div>
        <div class="font_logo" style="display: inline;color: black;">Pot</div>
    </li>
    <div id="navbar_menu"></div>
</ul>`
);

let navbar_menu = $('#navbar_menu');

function generateMenu(menus) {
    navbar_menu.html('');
    $.each(menus, function (index, menu) {
        let currentUrl = window.location.href;
        currentUrl = currentUrl.split('/');
        currentUrl = currentUrl[currentUrl.length-1];
        // console.log(currentUrl);
        navbar_menu.append(`<li><a class="${currentUrl.includes(menu.href) ? 'page_now' : ''}" href="${menu.href}">${menu.menu}</a></li>`);
    });
};
generateMenu(menus);