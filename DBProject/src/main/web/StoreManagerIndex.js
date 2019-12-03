var id = GetRequest();
var stringA = JSON.stringify(id);
var obj = JSON.parse(stringA);
ProductOnload();


function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}


function  ProductOnload() {
    var Url="";
    $.ajax({
        type: "post",
        url: Url,
        data: {
            store_manager_id: obj.value,
        },
        dataType: "json",
        success: function(msg) {
            var data=eval(msg);
            var str = JSON.stringify(data);
            var product = JSON.parse(str);
            for( var i = 0; i<product.length; i++) {
                var picture = product[i].picture;
                var name = product[i].name;
                var price = product[i].price;
                var sales = product[i].sales;
                var profit = parseInt(price) * parseInt(sales);
                var inventory = product[i].inventory;
                document.getElementById('ListTable').innerHTML = document.getElementById('ListTable').innerHTML + "\n" +
                    "    <tr>\n" +
                    "        <td style=\"width: 90px;background-image: url(" + picture + "); background-size: cover\"></td>\n" +
                    "        <td>" + name + "</td>\n" +
                    "        <td>" + price + "</td>\n" +
                    "        <td>" + sales + "</td>\n" +
                    "        <td>" + profit + "</td>\n" +
                    "        <td>" + inventory + "</td>\n" +
                    "    </tr>";
            }

        },
        error: function (request, status, error) {
            //alert(request.responseText);

        }
    });
}


function SearchBusiness() {

    var keyWord = document.getElementById('SearchInput').value;
    if (keyWord  == ''){
        ProductOnload();
    }
    var Url="";
    $.ajax({
        type: "post",
        url: Url,
        data: {
            keyword: keyWord,
            id: obj.value,
        },
        dataType: "json",
        success: function(msg) {
            var data=eval(msg);
            var str = JSON.stringify(data);
            var product = JSON.parse(str);
            var picture = product.picture;
            var name = product.name;
            var price = product.price;
            var sales = product.sales;
            var profit = parseInt(price) * parseInt(sales);
            var inventory = product.inventory;
            document.getElementById('ListTable').innerText =document.getElementById('ListTable').innerText + "\n" +
                "    <tr>\n" +
                "        <td style=\"width: 90px;background-image: url("+picture+"); background-size: cover\"></td>\n" +
                "        <td>"+name+"</td>\n" +
                "        <td>"+price+"</td>\n" +
                "        <td>"+sales+"</td>\n" +
                "        <td>"+profit+"</td>\n" +
                "        <td>"+inventory+"</td>\n" +
                "    </tr>";

        },
        error: function (request, status, error) {
            //alert(request.responseText);

        }
    });
}

function SearchPress() {

    if(event.keyCode==13)
    {
        SearchBusiness();
    }

}

function SortChange(){
    //alert(document.getElementById('Sort').value);
    var sort = document.getElementById('Sort').value;
    var Url="";
    $.ajax({
        type: "post",
        url: Url,
        data: {
            id: obj.value,
            sort: sort,

        },
        dataType: "json",
        success: function(msg) {
            var data=eval(msg);
            var str = JSON.stringify(data);
            var product = JSON.parse(str);
            var picture = product.picture;
            var name = product.name;
            var price = product.price;
            var sales = product.sales;
            var profit = parseInt(price) * parseInt(sales);
            var inventory = product.inventory;
            document.getElementById('ListTable').innerText =document.getElementById('ListTable').innerText + "\n" +
                "    <tr>\n" +
                "        <td style=\"width: 90px;background-image: url("+picture+"); background-size: cover\"></td>\n" +
                "        <td>"+name+"</td>\n" +
                "        <td>"+price+"</td>\n" +
                "        <td>"+sales+"</td>\n" +
                "        <td>"+profit+"</td>\n" +
                "        <td>"+inventory+"</td>\n" +
                "    </tr>";

        },
        error: function (request, status, error) {
            //alert(request.responseText);

        }
    });
}
$(document).ready(function(){
    $('#ListTable').on('click','tr', function() {
        EnterProductSalesDetail();
    });
});

function EnterProductSalesDetail(){
    window.location.href = "ProductSalesDetail.html?value=" + obj.id + "&pid" + obj.pid;
}


