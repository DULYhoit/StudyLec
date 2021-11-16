//Ex10 : 클릭한 컬럼을 기준으로 레코드 정렬하기 #1
window.addEventListener("load", function () {
    var notices = [
        {id:1,title:"유투브에 끌려다니지 않으려고 했는데",regDate:"2019-01-26",writerId:"홍길동",hit:"51534"},
        {id:2,title:"자바 스크립트란",regDate:"2032-04-12",writerId:"우왁굳",hit:"122"},
        {id:3,title:"기본기가 튼튼해야",regDate:"2032-04-12",writerId:"별",hit:"31422"},
        {id:4,title:"근데 조회수가",regDate:"2032-04-12",writerId:"네모",hit:"31222"}

    ];

    var section = document.querySelector("#section10");
    var noticeList = section.querySelector(".notice-list");
    var titleTd = section.querySelector(".title")
    var tbodyNode = noticeList.querySelector("tbody");
    var bindData = function(){
        var template = section.querySelector("template");

        for(var i=0;i<notices.length;i++){
            var cloneNode = document.importNode(template.content,true);
            var tds = cloneNode.querySelectorAll("td");
            
            tds[0].textContent = notices[i].id;
            
            var aNode = tds[1].children[0];
            aNode.href=notices[i].id;
            aNode.textContent = notices[i].title;

            tds[2].textContent = notices[i].regDate;
            tds[3].textContent = notices[i].writerId;
            tds[4].textContent = notices[i].hit;

            tbodyNode.appendChild(cloneNode);
        }
    };

    bindData();

    var titleSorted = false;

    titleTd.onclick = function(){
        
        tbodyNode.innerHTML = "";
        if(!titleSorted)
        notices.sort(function(a,b){
            titleSorted = true;
            

            if(a.title < b.title)
            return -1;
            else if(a.title >b.title)
                return 1;
                else return 0 ;
        });
        else
            notices.reverse();
            
        

        bindData();

    };

});
//Ex9 : 다중 노드선택 방법과 일괄삭제, 노드의 자리바꾸기 
window.addEventListener("load", function () {
    var section = document.querySelector("#section9");

    var noticeList = section.querySelector(".notice-list");
    var tbody = noticeList.querySelector("tbody");

    var allCheckbox = section.querySelector(".overall-checkbox");
    var alldelButton = section.querySelector(".alldel-button");
    var changeNodeButton = section.querySelector(".changeNode-button");
    
    allCheckbox.onclick = function(){
        var inputs = tbody.querySelectorAll("input[type='checkbox']");
        for(var i=0;i<inputs.length;i++){
            inputs[i].checked = allCheckbox.checked;

        };
        
       
        

    };

    alldelButton.onclick = function(){  
        var inputs = tbody.querySelectorAll("input[type='checkbox']:checked");
        console.log(inputs.length);
        // if(inputs[0].checked){
        //     inputs[0].parentElement.parentElement.remove();
        // };

        for(var i=0;i<inputs.length; i++){
            inputs[i].parentElement.parentElement.remove();
        };
       

    };
    
    changeNodeButton.onclick = function(){
        var inputs = tbody.querySelectorAll("input[type='checkbox']:checked");

        if(inputs.length !=2){
            alert("엘리먼트는 2개를 선택해야만 합니다.");
            return;
        }
        var trs = [];
        for(var i=0;i<inputs.length;i++){
            trs.push(inputs[i].parentElement.parentElement);
            
        }

            var cloneNode = trs[0].cloneNode(true);
            trs[1].replaceWith(cloneNode);
            trs[0].replaceWith(trs[1]);
            

            


    };


});

//Ex8 : 노드 삽입과 바꾸기
window.addEventListener("load", function () {
    var notices = [{id:5,title:"퐈이야~~~",regDate:"2019-01-26",writerId:"홍길동",hit:"5134"}
                   ,{id:6,title:"무야호~~~",regDate:"2032-04-12",writerId:"우라칸",hit:"3122"}                    
];

var section = document.querySelector("#section8");

var noticeList = section.querySelector(".notice-list");
var tbodyNode = noticeList.querySelector("tbody");
var upButton = section.querySelector(".up-button");
var downButton = section.querySelector(".down-button");

var currentNode = tbodyNode.firstElementChild;


downButton.onclick = function(){
    var nextNode = currentNode.nextElementSibling;
   
    if(nextNode == null){
        alert("더이상 이동할수 없습니다.");
        return;
    }

    // tbodyNode.removeChild(nextNode);
    // tbodyNode.insertBefore(nextNode,currentNode);
    currentNode.insertAdjacentElement("beforebegin",nextNode)
};

upButton.onclick = function(){
    var prevNode = currentNode.previousElementSibling;
   
    if(prevNode == null){
        alert("더이상 이동할수 없습니다.");
        return;
    }
    // tbodyNode.removeChild(currentNode);
    // tbodyNode.insertBefore(currentNode,prevNode);
    currentNode.insertAdjacentElement("afterend",prevNode);

};



});


//Ex7 : 노드 복제와 템플릿 태그
window.addEventListener("load", function () {
    var notices = [{id:5,title:"퐈이야~~~",regDate:"2019-01-26",writerId:"홍길동",hit:"5134"}
                   ,{id:6,title:"무야호~~~",regDate:"2032-04-12",writerId:"우라칸",hit:"3122"}                    
];

var section = document.querySelector("#section7");

var noticeList = section.querySelector(".notice-list");
var tbodyNode = noticeList.querySelector("tbody");

var cloneButton = section.querySelector(".clone-button");
var templateButton = section.querySelector(".template-button");

cloneButton.onclick = function(){
    var trNode = noticeList.querySelector("tbody tr");
    var cloneNode = trNode.cloneNode(true);
    var tds =cloneNode.querySelectorAll("td");
    tds[0].textContent = notices[0].id;
    tds[1].innerHTML = '<a href="'+notices[0].id+'">' + notices[0].title + '</a>';
    tds[2].textContent = notices[0].regDate;
    tds[3].textContent = notices[0].writerId;
    tds[4].textContent = notices[0].hit;
    

    tbodyNode.append(cloneNode);
};

templateButton.onclick = function(){
    var template = section.querySelector("template");
    var cloneNode = document.importNode(template.content,true);
    var tds =cloneNode.querySelectorAll("td");
    tds[0].textContent = notices[0].id;
    // tds[1].innerHTML = '<a href="'+notices[0].id+'">' + notices[0].title + '</a>';
    
    var aNode = tds[1].children[0];
    aNode.href = notices[0].id;
    aNode.textContent = notices[0].title;



    tds[2].textContent = notices[0].regDate;
    tds[3].textContent = notices[0].writerId;
    tds[4].textContent = notices[0].hit;
    tbodyNode.append(cloneNode);
};



});

//Ex6-노드조작 : 메뉴추가(createTextNode, Element)
window.addEventListener("load", function () {
    var section = document.querySelector("section6");
    
    var titleInput =document.querySelector(".title-input");
    var menuListUl =document.querySelector(".menu-list");
    var menuListUl2 = document.querySelector(".menu-list2");
    var addButton =document.querySelector(".add-button");
    var delButton =document.querySelector(".del-button");

    addButton.onclick = function(){
        
        var title = titleInput.value;
        var html = '<a href="">' + title + '</a>';
        var li = document.createElement("li");
        li.innerHTML = html;
        
        menuListUl.appendChild(li);

        var title2 = titleInput.value;
        var html2 = '<a href="">'+title+'</a>';
        var li2 = document.createElement("li");
        li2.innerHTML = html2;

        menuListUl2.append(li2);

       
        


        // var title = titleInput.value;
        
        // var textNode = document.createTextNode(title);//텍스트 노드추가

        // var aNode = document.createElement("a"); //a태그노드추가
        // aNode.href = ""; //a태그에 href 속성추가
        // aNode.appendChild(textNode);

        // var liNode = document.createElement("li");//li 태그추가
        // liNode.appendChild(aNode);//li노드에 a노드 자식으로추가
        
        // menuListUl.appendChild(liNode);

        // var title = titleInput.value;
        // var textNode = document.createTextNode(title);
        // menuListDiv.appendChild(textNode);
    };
    delButton.onclick = function(){
        // var txtNode = menuListUl.childNodes[0];
       
        var liNode = menuListUl.children[0];
        // menuListUl.removeChild(liNode);
        liNode.remove();

    };
});
//Ex5 : 엘리먼트 노드의 속성 & CSS 속성 변경
window.addEventListener("load", function () {
    var section = document.querySelector("#section5");
    var srcInput = section.querySelector(".src-input");
    var imgSelect = section.querySelector(".img-select")
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");
    var colorInput = section.querySelector(".color-input");  
    
    changeButton.onclick = function(){
    img.src = "images/" + srcInput.value;
    // img.src = "images/"+imgSelect.value;

    // img.style["border-color"] = colorInput.value;
    img.style.borderColor = colorInput.value;
    console.log(img.className);
    }
});
//Ex4 : childeNodes를 이용한 노드 선택
window.addEventListener("load", function () {
    var section4 = document.querySelector("#section4");
    var box = section4.querySelector(".box"); 
    var input1 = box.children[0];
    var input2 = box.children[1];

    input1.value = "hello";
    input2.value = "okay";
});
//Ex3 : Selectors API Level1
window.addEventListener("load", function () {
    var section3 = document.getElementById("section3");
    
    var txtX = section3.querySelector("input[name='txt-x']");
    var txtY = section3.querySelector(".txt-y");
    var btnAdd = section3.querySelector(".btn-add");
    var txtSum = section3.querySelector(".txt-sum");

    btnAdd.onclick = function () {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);
        txtSum.value = x + y;

    };
});
//Ex2 : 엘리멘트 선택방법 개선하기
window.addEventListener("load", function () {
    var section2 = document.getElementById("section2");
    
    var txtX = section2.getElementsByClassName("txt-x")[0];
    var txtY =section2.getElementsByClassName("txt-y")[0];
    var btnAdd = section2.getElementsByClassName("btn-add")[0];
    var txtSum = section2.getElementsByClassName("txt-sum")[0];


   
   
    /*
    var inputs = section2.getElementsByTagName("input");


    var txtX = inputs[0];
    var txtY = inputs[1];
    var btnAdd = inputs[2];
    var txtSum = inputs[3];
    */
    btnAdd.onclick = function () {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);
        txtSum.value = x + y;

    };
});
//Ex1 : 계산기 프로그램
window.addEventListener("load", function () {

    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var btnAdd = document.getElementById("btn-add");
    var txtSum = document.getElementById("txt-sum");

    btnAdd.onclick = function () {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);
        txtSum.value = x + y;

    };
});

