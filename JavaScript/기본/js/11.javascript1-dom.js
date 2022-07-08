//Ex연습 : 노드조작하기
window.addEventListener("load", function () {
    //title에 글자를 입력하고 추가를 누르면 li태그를 생성
    //삭제를누르면 첫번째로 넣은것을 첫번째삭제 두번째삭제 전부삭제 구현
    var sectionT1 = document.querySelector("#section-t1");
    var titleInput = sectionT1.querySelector(".title-input");
    var addButton = sectionT1.querySelector(".add-button");
    var delButton = sectionT1.querySelector(".del-button");
    var menuListUl = sectionT1.querySelector(".menu-list");
    var delAllButton = sectionT1.querySelector(".delall-button");

    addButton.onclick = function(){
      var title = titleInput.value;
      var html = '<a href="">'+title+'</a>';
      var liNode = document.createElement("li");
      liNode.innerHTML = html;
      menuListUl.append(liNode);
    };
    delButton.onclick = function(){
      var liNode = menuListUl.children[0];
      liNode.remove();
    };
    delAllButton.onclick = function(){
      
      
        
       
     
    };
    
})
//Ex6 : Ex6 -노드조작: 메뉴추가(createTextNode, Element)
window.addEventListener("load", function () {
  var section6 = document.querySelector("#section6");
  var titleInput = section6.querySelector(".title-input");
  var menuListUl = section6.querySelector(".menu-list");
  var addButton = section6.querySelector(".add-button");
  var delButton = section6.querySelector(".del-button");

  addButton.onclick = function() {
    var title = titleInput.value;
    
    var html ='<a href="">'+title+'</a>';
    var li = document.createElement("li");

    li.innerHTML = html;
    // menuListUl.appendChild(li);
    menuListUl.append(li);
    //append는 텍스트와 노드를 동시에 넣을수있음
  
    //누적형 연산자인경우 성능을 매우잡아먹음
    
    // var title = titleInput.value;  
    // var txtNode = document.createTextNode(title);
    
    // var aNode = document.createElement("a");
    // aNode.href = "";
    // aNode.appendChild(txtNode);

    // var liNode = document.createElement("li");
    // liNode.appendChild(aNode);

    // menuListUl.appendChild(liNode);
    //노드를 추가하는 과정이 너무복잡함
    
    //이렇게만 추가하면 해당 엘리먼트에 "문자" <-이렇게만 추가됨
    // var title = titleInput.value;  
    // var txtNode = document.createTextNode(title);
    // menuListDiv.appendChild(txtNode);

  };
  delButton.onclick = function(){
    // var txtNode = menuListUl.childNodes[0];
    var liNode = menuListUl.children[0];
    // menuListUl.removeChild(liNode);
    //자식을 지우는게아닌 나자신을 지워라
    liNode.remove();
    
  };

})
//Ex5 : 엘리먼트 노드의 속성& CSS 속성 변경
window.addEventListener("load", function () {
  var section5 = document.querySelector("#section5");
  var srcInput = section5.querySelector(".src-input");
  var imgSelect = section5.querySelector(".img-select");
  var changeBtn = section5.querySelector(".change-button");
  var img = section5.querySelector(".img");
  var colorInput = section5.querySelector(".color-input");

  changeBtn.onclick = function () {
    img.src = "/images/" + srcInput.value;
    // img.src = "/images/"+imgSelect.value;


    // img.style["border-color"] = colorInput.value;
    // css스타일 명명규칙 아래와같이 낙타표기법으로 사용가능
    img.style.borderColor = colorInput.value;
    console.log(img.className);
  }
})
//Ex4 : childeNodes를 이용한 노드 선택
window.addEventListener("load", function () {
  var section4 = document.querySelector("#section4");
  var box = section4.querySelector(".box");

  var input1 = box.children[0]; //childNodes[0];
  var input2 = box.children[1]; //childNodes[1];
  //children 엘리먼트노드
  //childNode 노드 : chiledNodes는 공백마저 노드로 계산함

  input1.value = "hello";
  input2.value = "okay";
})
//Ex3 : Selectors API Level1
window.addEventListener("load", function () {
  var section3 = document.getElementById("section3");
  // var txtX = section3.querySelector(".txt-x");
  var txtX = section3.querySelector("input[name='txt-x']")
  //태그의 속성을가지고 선택가능
  var txtY = section3.querySelector(".txt-y");
  var btnAdd = section3.querySelector(".btn-add");
  var txtSum = section3.querySelector(".txt-sum");

  btnAdd.onclick = function () {

    var x = parseInt(txtX.value);
    var y = parseInt(txtY.value);

    txtSum.value = x + y;

  };
})
//Ex2 : 엘리먼트 선택 개선하기
window.addEventListener("load", function () {
  var section2 = document.getElementById("section2");
  var txtX = section2.getElementsByClassName("txt-x")[0];
  var txtY = section2.getElementsByClassName("txt-y")[0];
  var btnAdd = section2.getElementsByClassName("btn-add")[0];
  var txtSum = section2.getElementsByClassName("txt-sum")[0];
  /*
  var inputs = section2.getElementsByTagName("input");
  //태그로찾아서 배열로 넘기는방법(순서가바뀌면 고쳐야하는 문제가있음)
  var txtX = inputs[0];
  var txtY =inputs[1];
  var btnAdd =inputs[2];
  var txtSum =inputs[3];
  */
  btnAdd.onclick = function () {

    var x = parseInt(txtX.value);
    var y = parseInt(txtY.value);

    txtSum.value = x + y;

  };
})
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
})