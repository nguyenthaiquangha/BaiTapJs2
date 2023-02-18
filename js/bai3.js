
var tienThue = 0
function tinhThue() {
    var hoTen = document.getElementById("hoten").value;
    var tongthuNhap = Number(document.getElementById("tongthunhap").value);
    var soNguoi = Number(document.getElementById("songuoi").value);
    var tinhTienThue = 0;
    if (tongthuNhap <= 60000000) {
     tinhTienThue = 60000000*0.05 + (tongthuNhap-60000000)*0.05;
     tienthue(tinhTienThue,soNguoi);
    }else if (tongthuNhap > 60000000 && tongthuNhap <= 120000000) {
        tinhTienThue = 60000000*0.05 + (tongthuNhap-60000000)*0.1
        tienthue(tinhTienThue,soNguoi);
    }else if(tongthuNhap > 120000000 && tongthuNhap <= 210000000 ) {
        tinhTienThue = 60000000*0.05 + 120000000*0.1+ (tongthuNhap-120000000)*0.15;
        tienthue(tinhTienThue,soNguoi);
    }else if(tongthuNhap > 210000000 && tongthuNhap <= 384000000) {
        tinhTienThue = 60000000*0.05 + 120000000*0.1 + 210000000*0.2 + (tongthuNhap-120000000)*0.2;
        tienthue(tinhTienThue,soNguoi);
    }else if(tongthuNhap > 384000000 && tongthuNhap <= 624000000) {
        tinhTienThue = 60000000*0.05 + 120000000*0.1 + 210000000*0.2 + 384000000*0.25 + (tongthuNhap-120000000)*0.25;
        tienthue(tinhTienThue,soNguoi);
    }else if(tongthuNhap > 624000000 && tongthuNhap <= 960000000){
        tinhTienThue = 60000000*0.05 + 120000000*0.1 + 210000000*0.2 + 384000000*0.25 + 624000000*0.3 (tongthuNhap-120000000)*0.3;
        tienthue(tinhTienThue,soNguoi);
    }else {
        tinhTienThue = 60000000*0.05 + 120000000*0.1 + 210000000*0.2 + 384000000*0.25 + 624000000*0.3+ 960000000*0.35 (tongthuNhap-120000000)*0.35;
        tienthue(tinhTienThue,soNguoi);
    }

    
    document.getElementById("txtResult").innerHTML = "Họ tên: " + hoTen + "<br>Thu nhập chịu thuế: " + tienThue.toLocaleString();
}

function tienthue(tinhTienThue,soNguoi){
   return tienThue = tinhTienThue/soNguoi; 
}
document.getElementById("btnThuThuNhap").onclick = tinhThue;