function addall() {
    var input = document.getElementById('inputfield');
    input.style.margin = "12px"



    var lielement = document.createElement('li');


    var text = document.createTextNode(input.value);


    lielement.appendChild(text);


    // ***  delete button **



    var btn = document.createElement('button')
    var dele = document.createTextNode("Delete")
    btn.appendChild(dele)
    lielement.appendChild(btn)
    btn.setAttribute("onclick", "deleteitem(this)");
    btn.style.backgroundColor = 'red'
    btn.style.color = "white"
    btn.style.margin = "10px"


    // *** edite button ***


    var edt = document.createElement('button')
    var deit = document.createTextNode('edit')
    edt.appendChild(deit)
    lielement.appendChild(edt)
    edt.setAttribute("onclick", "edtitem(this)");
    edt.style.backgroundColor = 'blue'
    edt.style.color = "white"
    edt.style.margin = "10px"



    var list = document.getElementById('list');


    list.style.margin = "12px"

    list.appendChild(lielement);



    input.value = "";


}



function deleteall() {
    var list = document.getElementById('list');
    list.innerHTML = "";

}



function deleteitem(x) {

    x.parentNode.remove();


}


function edtitem(e) {
    var input = prompt("enter update value..");
    e.parentNode.firstChild.nodeValue = input;
}


var sty = {
    name: "Hamza",
    age: "25",
    email: "Hamza@gmail.com",
    address: "karachi",
    fatherNane: "Hussain",
    thyname: function () {

        return this.name
    }
};



delete sty.email
console.log(sty)