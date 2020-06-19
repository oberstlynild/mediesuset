let loader_wrapper = document.getElementsByClassName('loader-wrapper')[0]


function removeWrapper() {
    document.getElementsByClassName('loader')[0].style.display = "none";
    loader_wrapper.style.display = "block";
}