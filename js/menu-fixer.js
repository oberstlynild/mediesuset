let main_menu_login_desktop = document.getElementById('main-menu-login-desktop');
let main_menu_login_mobile = document.getElementById('main-menu-login-mobile');
let main_menu_min_side_desktop = document.getElementById('main-menu-min-side-desktop');
let main_menu_min_side_mobile = document.getElementById('main-menu-min-side-mobile');

if (sessionStorage.getItem('loggedin')) {
    main_menu_login_desktop.style.display = "none";
    main_menu_login_mobile.style.display = "none";
    main_menu_min_side_desktop.style.display = "inline-block";
    main_menu_min_side_mobile.style.display = "block";
} else {
    main_menu_login_desktop.style.display = "inline-block";
    main_menu_login_mobile.style.display = "block";
    main_menu_min_side_desktop.style.display = "none";
    main_menu_min_side_mobile.style.display = "none";
}