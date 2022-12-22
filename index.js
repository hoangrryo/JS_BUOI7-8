var arr = [];
var arr2 = [];
function addNumber() {
    var numb = document.getElementById("Num").value*1;
    document.getElementById("Num").value = "";
    arr.push(numb);
    document.getElementById("showArea1").innerHTML = `Chuỗi số đã nhập là: ${arr}`
}

function tongSoDuong() {
    var sum = 0;
    console.log(arr);
    arr.map(function(item){
        if (item > 0)
        {
            sum += item;
        }
        
        document.getElementById("showArea2").innerHTML = `=> Kết quả: ${sum}`;
    })
}

function demSoDuong() {
    var countSoDuong = 0;
    arr.map(function(item){
        if (item > 0)
        {
            countSoDuong++;
        }
    })
    document.getElementById("showArea3").innerHTML = `=> Có ${countSoDuong} số dương`;
}

function timMin() {
    var min = arr[0];
    arr.map(function(item){
        if (min > item)
        {
            min = item;
        }
    })
    document.getElementById("showArea4").innerHTML = `=> Kết quả: ${min}`;
}

function timlastSoChan() {
    var lastSochan = -1;
    arr.map(function(item){
        if (item % 2 == 0)
        {
            lastSochan = item;
        }
    })
    document.getElementById("showArea5").innerHTML = `=> Kết quả: ${lastSochan}`;
}

function doiViTri(){
    var a = document.getElementById('viTri1').value*1;
    var b = document.getElementById('viTri2').value*1;
    if (a < 0 || a >= arr.length)
    {
        if (b < 0 || b>= arr.length)
        {
            document.getElementById("showArea6").innerHTML = `Không tìm thấy vị trí số ${a} và ${b}`;
        }
        else
        {
            document.getElementById("showArea6").innerHTML = `Không tìm thấy vị trí số ${a}`;
        }
    }
    else if (b < 0 || b>= arr.length)
    {
        document.getElementById("showArea6").innerHTML = `Không tìm thấy vị trí số ${b}`;
    }
    else
    {
        arr[a] = arr[a] + arr[b];
        arr[b] = arr[a] - arr[b];
        arr[a] = arr[a] - arr[b];
        document.getElementById("showArea6").innerHTML = `=> Mảng sau khi đổi vị trí: ${arr}`;
    }
}

function xepTangDan() {
    var a = arr.length - 2;
    var j = 1;
    for (var i = 0 ; i < arr.length ; i++)
    {
        for (var j = i+1; j < arr.length ; j++)
        {
            if (arr[i] > arr[j])
            {
                arr[i] = arr[i] + arr[j];
                arr[j] = arr[i] - arr[j];
                arr[i] = arr[i] - arr[j];
            }
        }
    }
    document.getElementById("showArea7").innerHTML = `=> Mảng sau khi sắp xếp: ${arr}`;
}

function timSoNT() {
    arrSoNT = [];
    var isNT = true;
    arr.map(function(item) {
        if(item >= 2)
        {
            for (var i = 2 ; i < item ; i++)
            {
                if (item % i ==0)
                {
                    console.log("item = ",item);
                    console.log("i = ",i);
                    isNT = false;
                    break;
                }
                else if(i = item - 1)
                {
                    arrSoNT.push(item);
                }
            }
        }
    })

    if(!arrSoNT.length)
    {
        document.getElementById("showArea8").innerHTML = `=> -1`;
    }
    else
    {
        document.getElementById("showArea8").innerHTML = `=> Số nguyên tố đầu tiên trong mảng là ${arrSoNT[0]}`;
    }
}

function addNumber2() {
    var numb = document.getElementById("Num2").value*1;
    document.getElementById("Num2").value = "";
    arr2.push(numb);
    document.getElementById("showArea10").innerHTML = `Mảng vừa nhập là: ${arr2}`
}

function checkSoNguyen() {
    var countInterger = 0;
    if(!arr2.length)
    {
        document.getElementById("showArea11").innerHTML = `=> 0`;
    }
    else
    {
        arr2.map(function(item) {
            if(Number.isInteger(item))
            {
                countInterger++;
            }
        })
        document.getElementById("showArea11").innerHTML = `=> trong mảng có ${countInterger} số nguyên`;
    }
}    

function soSanhAmDuong() {
    var countSoAm = 0;
    var countSoDuong = 0;
    arr.map(function(item){
        if (item > 0)
        {
            countSoDuong++;
        }
        else
        {
            countSoAm++;
        }
    })
    if(!arr.length)
    {
        document.getElementById("showArea9").innerHTML = `=> Vui lòng nhập số`;
    }
    else if (countSoAm > countSoDuong)
    {
        document.getElementById("showArea9").innerHTML = `=> ${countSoAm} số âm & ${countSoDuong} số dương =>> Số âm nhiều hơn số dương`;
    }
    else if (countSoAm < countSoDuong)
    {
        document.getElementById("showArea9").innerHTML = `=> ${countSoAm} số âm & ${countSoDuong} số dương =>> Số âm ít hơn số dương`;
    }
    else if (countSoAm = countSoDuong)
    {
        document.getElementById("showArea9").innerHTML = `=> ${countSoAm} số âm & ${countSoDuong} số dương =>> Số âm bằng số dương`;
    }
}