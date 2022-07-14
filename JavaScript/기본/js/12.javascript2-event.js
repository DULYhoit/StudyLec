//EX7-마우스 이벤트 객체 :드래그 방식으로 박스 옮기기
window.addEventListener("load" , function(){
    var section = document.querySelector("#section7");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");
    var dragging = false;
    var offset ={x:0,y:0};
    
    container.onmousedown = function(e){
        if(e.target == box)
        dragging = true;
        offset.x = e.offsetX;
        offset.y = e.offsetY
        
    };
    container.onmousemove = function(e){
        if(!dragging) return;
        box.style.left = e.pageX-offset.x+"px";
        box.style.top = e.pageY-offset.y+"px";
    };
    
    container.onmouseup = function(e){
        dragging = false;
    };
    box.onmousedown = function(){
        offset.x = e.offsetX;
        offset.y = e.offsetY;
    };
      

        
});
//EX6-마우스 이벤트 객체 :마우스 좌표
window.addEventListener("load" , function(){
    var section = document.querySelector("#section6");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");

    container.onclick = function(e){
        //좌표구하는 이벤트메소드
        //e.x, e.y / e.offsetX,e.offsetY / e,clientX, e.pageX....
        //e.x,e.y는 클라이언트 전체웹문서기준
        
        console.log("(x,y)"+e.x+","+e.y);
        console.log("client(x,y)"+e.clientX+","+e.clientY);
        console.log("page(x,y)"+e.pageX+","+e.pageY);
        console.log("offset(x,y)"+e.offsetX+","+e.offsetY);
        box.style.position = "absolute";
        box.style.left = e.x+"px";
        box.style.top = e.y+"px";

        
    };
});

//EX5-Trigger
window.addEventListener("load" , function(){
    var section = document.querySelector("#section5");
    var fileButton = section.querySelector(".file-button");
    var fileTriggerButton = section.querySelector(".file-trigger-button");

    fileTriggerButton.onclick = function(){
        var event = new MouseEvent("click",{
            'view':window,
            'bubbles':true,
            'cancelable':true
        })
        fileButton.dispatchEvent(event);
    };
});
//EX4-서로 다른 기능의 여러 버튼을 가진 화면에서 이븐트를 처리하는 방법
window.addEventListener("load" , function(){
    var section = document.querySelector("#section4");

    var tbody =section.querySelector(".notice-list tbody");

    tbody.onclick = function(e){
       //첫번째 td를 버튼을보면 하이퍼링크 태그로 만들어져있음
       //a태그는 눌름과동시에 페이지를 반환하는기능
       //onclick이벤트가 발생하고 a태그의 기능이 발생될텐데 이후의 이벤트를막는 함수
       //e.preventDefault();를사용
        e.preventDefault();

        var target = e.target;
        if(target.nodeName != "A") return;
        
        //자식태그가 여려개의 이벤트를 가져야할때 세분화시키는법
        //html 클래스속성이 다중이라면 classList.contains :클래스속성 안에
        //이름중 하나가 있느냐를 찾아주는 메소드
        if(target.classList.contains("sel-button")){
            //선택을 눌렀을경우 해당row의 색을바꿈
            var tr = target.parentElement;
            for(;tr.nodeName!="TR"; tr=tr.parentElement);
                tr.style.background = "yellow";
            
            
        }
        else if(target.classList.contains("edit-button")){
            //해당 row의제목td를 text로바꿈
        }
        else if(target.classList.contains("del-button")){
            //해당 row를 remove
        }
    };
});

//EX 3-이벤트 버블링 멈추기
window.addEventListener("load" , function(){
    var section = document.querySelector("#section3");
    var imgList = section.querySelector(".img-list");
    var addButton = section.querySelector(".add-button");
    var currentImg = section.querySelector(".current-img");
    imgList.onclick = function(e){
        console.log("img");
        if(e.target.nodeName !="IMG") return;
        currentImg.src = e.target.src;
    };
    addButton.onclick = function(e){
        e.stopPropagation();
        console.log("addButton.onclick");
        var img = document.createElement("img");
        img.src = "/images/img1.jpg";
        currentImg.insertAdjacentElement("afterend", img);
    };
    //addButton을 누르는순간 버블링이 발생함
});
//EX 2-버블링을 이용한 사용자 이벤트 처리하기
window.addEventListener("load" , function(){
    var section = document.querySelector("#section2");
    var imgList = section.querySelector(".img-list");
    // var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".current-img");
    imgList.onclick = function(e){
        if(e.target.nodeName !="IMG") return;
        currentImg.src = e.target.src;
    };
    
});
//연습문제 1-선택된 레코드 삭제하기:event target
window.addEventListener("load" , function(){
    var section = document.querySelector("#section1-1");
    var inputs = section.querySelectorAll(".del-button");
    var input = section.querySelector(".tbody");
    // for(var i=0; i<inputs.length;i++){
    //     //for문을이용한 이벤트처리는 효율이 떨어진다
    //     inputs[i].onclick = function(e){
    //         var tr = e.target.parentElement.parentElement;
    //         tr.remove();
            
    //     };
    // };
    //위 for문을 효율성있게 고쳐보자
    input.onclick = function(e){
        if(e.target.nodeName != "INPUT") return;
        var tr = e.target.parentElement.parentElement;
        tr.remove();
    };
});
//EX 1 -선택된 이미지 보여주기:event target
window.addEventListener("load" , function(){

    var section = document.querySelector("#section1");

    var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".current-img");
    for(var i=0; i<imgs.length;i++){
        imgs[i].onclick = function(e){
            currentImg.src = e.target.src;
        };

    }
    
});