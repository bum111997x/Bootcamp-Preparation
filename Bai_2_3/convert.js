function convert() {
    let a=(document.getElementById('nhap').value);
    let b=(document.getElementById('fromcurrency').value);
    let c=(document.getElementById('tocurrency').value);
    kq= (a*b)/c;
    document.getElementById(kq).value=kq;
}