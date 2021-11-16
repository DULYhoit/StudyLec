//Ex 4-서로 다른 기능의 여러 버튼을 가진 화면에서 이벤트를 처리하기
window.addEventListener("load",function(){
    var section = document.querySelector("#section5");
    var tbody = section.querySelector(".notice-list tbody");

    tbody.onclick = function(e){
        var target =e.target;
        e.preventDefault();
        

        if(target.nodeName != "A") return;
        
        if(target.classList.contains("sel-button")){
            var tr = target.parentElement;
            for(; tr.nodeName !="TR"; tr=tr.parentElement){
                 tr.style.background = "yellow";
            }

        }else if(target.classList.contains("edit-button")){

        }else if(target.classList.contains("del-button")){

        }
         
    };

    });

//Ex 3-이벤트 버블링 멈추기
window.addEventListener("load",function(){
    var section = document.querySelector("#section4");
    var imgList = section.querySelector(".img-list");
    var addButton = section.querySelector(".add-button");
    var currentImg = section.querySelector(".currentImg");
    
    imgList.onclick=function(e){
        console.log("imgList.onclick");
        if(e.target.nodeName !="IMG") return;
        currentImg.src = e.target.src;

    };
    addButton.onclick=function(e){
        console.log("addButton.onclick");
        e.stopPropagation();
        var img = document.createElement("img");
        img.src = "images/img1.jpg";
        currentImg.insertAdjacentElement("afterend",img);
    };
    
   
    });

//Ex 2-버블링을 이용한 사용자 이벤트 처리하기
window.addEventListener("load",function(){
    var section = document.querySelector("#section3");
   
    var imgList = section.querySelector(".img-list");
    // var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".currentImg");

    imgList.onclick = function(e){
        if(e.target.nodeName != "IMG") return;
        
        currentImg.src = e.target.src;
    };
   
   
    // for(var i=0;i<imgs.length;i++){
    //     imgs[0].onclick = function(e){
    //       currentImg.src = e.target.src; 
    //     };

    // }
   
    });

        
        

   
//연습문제 1-선택된 레코드 삭제하기:event target
window.addEventListener("load",function(){
    var sectionEx = document.querySelector("#sectionEx");
    var tbodyNode = sectionEx.querySelector(".tbody");

    tbodyNode.onclick = function(e){
        console.log(e.target.nodeName);
        if(e.target.nodeName !="INPUT") return;
        
        var tr = e.target.parentElement.parentElement;
        tr.remove();
    };
   
    

        
        

   
});
//Ex1 -선택된 이미지 보여주기:event target
window.addEventListener("load",function(){
    var section = document.querySelector("#section1");
   
    var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".currentImg");
    for(var i=0;i<imgs.length;i++){
        imgs[0].onclick = function(e){
          currentImg.src = e.target.src; 
        };

    }
   
});