let sellTaxNumber = document.getElementById('sellTaxNumber').textContent;
let sellName = document.getElementById('sellName').textContent;
let sellAdd = document.getElementById('sellAdd').textContent;
let sellTel = document.getElementById('sellTel').textContent;
let buyTaxNumber = document.getElementById('buyTaxNumber').textContent;
let buyName = document.getElementById('buyName').textContent;
let buyAdd = document.getElementById('buyAdd').textContent;
let buyTel = document.getElementById('buyTel').textContent;
let invoiceNumber = document.getElementById('invoiceNumber').textContent;
let invoiceDate = document.getElementById('invoiceDate').textContent;
let invoiceTime = document.getElementById('invoiceTime').textContent;

/*發票的新增及刪除功能 */
let btn = document.querySelector('.btnAdd');
btn.addEventListener('click', addTbody);

function addTbody() {
    let tr = document.createElement("tr");
    tr.id = new Date().getTime();
    tr.innerHTML = `<th scope="row">D</th>
    <td><input type="text" class="form-control itemName" placeholder="品名" aria-label="Username"
            aria-describedby="basic-addon1"></td>
    <td><input type="text" class="form-control amount" placeholder="數量" aria-label="Username"
            aria-describedby="basic-addon1"></td>
    <td><input type="text" class="form-control unitPrice" placeholder="單價(未稅)"
            aria-label="Username" aria-describedby="basic-addon1"></td>
    <td>
        <div id="subtotal"></div>
    </td>
    <td><button type="button" class="btn btn-danger btnCal">刪除</button></td>`
    document.getElementById('invoiceform').appendChild(tr);
    let delBtnAll = document.querySelectorAll('.btnCal');
    delBtnAll.forEach(function (item, i, arry) {
        // console.log(item); //現在元素
        // console.log(i); //現在元素的位置
        // console.log(arry); //完整的陣列
        item.addEventListener('click', del);
    })
}

function del(e) {
    let trId = e.target.parentNode.parentNode.id;
    let trDel = document.getElementById(`${trId}`);
    console.log(trDel);

    document.getElementById('invoiceform').removeChild(trDel)
}

/*發票金額的計算*/
let trAmount = document.querySelector('#firstTr input.amount')
trAmount.addEventListener('change', count);

let trPrice = document.querySelector('#firstTr input.unitPrice')
trPrice.addEventListener('keyup', count);

function count(el) {
    let amount = parseInt(document.querySelector('amount').textContent);
    let unitPrice = parseInt(document.querySelector('unitPrice').value);

    console.log(el);
    console.log("yaaa");
}
