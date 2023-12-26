let navLink = document.querySelectorAll('.nav-link');

function responsiveNavbar() {
    for (var i = 0; i < navLink.length; i++) {
        navLink[i].classList.toggle('active');
    }
}

function toggleIcon() {
    var iconContainer = document.getElementById('iconContainer');

    if (iconContainer.classList.contains('fa-bars')) {
        iconContainer.classList.remove('fa-bars');
        iconContainer.classList.add('fa-times');
    } else {
        iconContainer.classList.remove('fa-times');
        iconContainer.classList.add('fa-bars');
    }
}
