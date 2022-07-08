 //변수를 지역화 하기 위해서 모든 함수들에대한 이벤트들을 선언동시에 함수를 만듬
//  window.onload = function() {
    window.addEventListener("load",function(){
        var btnPrint = document.getElementById('btn-print');
        
        
        var add = function(x,y){
            return x + y;
        };
    
    
        btnPrint.onclick = function () {
        
           // var btnPrint = document.getElementById('btn-print'); 
            var x, y;
            x = prompt("x 값을 입력하세요", 0);
            y = prompt("y 값을 입력하세요", 0);
    
            x = parseInt(x);
            y = parseInt(y);
    
            alert(x + y);
            //해당 속성이 있는 태그 
            btnPrint.value = x + y;
            btnPrint.type = "text";
            //해당속성이 없는 태그
            span1.innerText += " " + (x + y);
    
        };
    });

    