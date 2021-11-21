var i = 1;


function createChk(obj) {

    if (obj.value !== '') {

        var chk = document.createElement('input');
        chk.setAttribute('type', 'checkbox');
        chk.setAttribute('id', 'prodName' + i);
        chk.setAttribute('value', obj.value);
        chk.setAttribute('name', 'products');

        var lbl = document.createElement('label');
        lbl.setAttribute('for', 'prodName' + i);
        lbl.setAttribute('name', 'txt');


        lbl.appendChild(document.createTextNode(obj.value));


        if (i > 1) {

            var br = document.createElement("br");
            container.appendChild(br);
            container.appendChild(chk);
            container.appendChild(lbl);
        }
        else {
            container.appendChild(chk);
            container.appendChild(lbl);
        }


        obj.value = '';
        document.getElementById(obj.id).focus();

        i = i + 1;

    }

    else {
        window.alert('Enter Task Name');
    }
}


