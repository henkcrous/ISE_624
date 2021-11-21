var rmvBtn = document.getElementById('delete');

rmvBtn.addEventListener('click', function () {
    var rmvCheckBoxes = document.getElementsByName('products');

    for (var i = 0; i < rmvCheckBoxes.length; i++) {
        if (rmvCheckBoxes[i].checked) {
            removeElm(rmvCheckBoxes[i]);
        }
    }
});

function removeElm(elm) {
    elm.parentElement.removeChild(elm);
}
