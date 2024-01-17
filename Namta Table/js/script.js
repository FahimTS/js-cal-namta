
// let table = document.querySelector('.table');

for(var i = 1; i <= 100; i++){
  document.write(`<table border="1" class="namta_box"><thead><th colspan="10" style="text-align: center;">${i} ঘরের নামতা</th></thead>`)
    document.write(`<tr>`)
    for(var j = 1; j <= 10; j++){
        document.write(`<td> ${i} X ${j} = ${i * j} </td>`);
    }
    document.write('</table>')
}
