//Ex10-클릭한 컬럼을 기준으로 레코드 정렬하기
window.addEventListener("load", function () {
  var notices = [
    { "id": 1, "title": "유투브에 끌려다니지 않으려고 했는데....ㅜㅜ..", "regDate": "2019-02-05", "writerId": "newlec", "hit": 2 },
    { "id": 2, "title": "자바스크립트란..", "regDate": "2019-02-02", "writerId": "newlec", "hit": 0 },
    { "id": 3, "title": "기본기가 튼튼해야....", "regDate": "2019-02-01", "writerId": "newlec", "hit": 1 },
    { "id": 4, "title": "근데 조회수가 ㅜㅜ..", "regDate": "2019-01-25", "writerId": "newlec", "hit": 0 }
  ];

  var section10 = document.querySelector("#section10");
  var noticeList = section10.querySelector(".notice-list");
  var titleTd = section10.querySelector(".title")
  var tbodyNode = noticeList.querySelector("tbody");

  var bindData = function () {

    var template = section10.querySelector("template");

    for (var i = 0; i < notices.length; i++) {
      var cloneNode = document.importNode(template.content, true);
      var tds = cloneNode.querySelectorAll("td");
      var trNode = cloneNode.querySelector("tr");
      var a = cloneNode.querySelector("a");

      tds[0].textContent = notices[i].id;
      a.href = notices[i].id;
      a.textContent = notices[i].title;
      tds[2].textContent = notices[i].regDate;
      tds[3].textContent = notices[i].writerId;
      tds[4].textContent = notices[i].hit;


      tbodyNode.append(cloneNode);

    };


  }
  bindData();

  var titleSorted = false;
  titleTd.onclick = function () {
    //자바스크립트 정렬관련된 라이브러리
    //구글에 javascript array sort (MDN) 사이트
    //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   tbodyNode.innerHTML ="";
   
   
   if(!titleSorted){
     notices.sort(function (a, b) {
       titleSorted = true;
       
       if (a.title < b.title)
         return -1;
       else if (a.title > b.title)
         return 1;
       else
         return 0;
     });
    }
    else
       notices.reverse();

    
    bindData();

  };

})


//Ex9-다중 노드선택 방법과 일괄삭제, 노드의 자리바꾸기
window.addEventListener("load", function () {
  var section9 = document.querySelector("#section9");
  var noticeList = section9.querySelector(".notice-list");
  var tbodyNode = noticeList.querySelector("tbody");
  var allCheckbox = section9.querySelector(".overall-checkbox");
  var delButton = section9.querySelector(".del-button");
  var swapButton = section9.querySelector(".swap-button");

  //onchange는 체크박스 형태가 변경되었을때 실행됨
  allCheckbox.onchange = function () {
    // value는 on값만,checked는 true false
    // console.log(allCheckbox.value);

    var inputs = tbodyNode.querySelectorAll("input[type='checkbox']");

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].checked = allCheckbox.checked;
    };



  };
  delButton.onclick = function () {
    //css셀렉터[속성]:조건을 통해 원하는 선택자를 가져올수있음.
    var inputs = tbodyNode.querySelectorAll("input[type='checkbox']:checked");

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].parentElement.parentElement.remove();
    };


  };

  swapButton.onclick = function () {
    var inputs = tbodyNode.querySelectorAll("input[type='checkbox']:checked");

    if (inputs.length != 2) {
      alert("2개를 선택하세요");
      return;
    };
    var trs = []

    for (var i = 0; i < inputs.length; i++)
      trs.push(inputs[i].parentElement.parentElement);

    //replaceChild: 부모입장에서 /replaceWith 나의기준 
    //첫번째 엘리먼트와 두번째 엘리먼트 위치를바꾸기위해
    //첫번째 노드하나를 클론해서 변수화한뒤 자리를마련하고
    //동적으로 자리만 바꿔주고 배열값은 변하지않는다.
    var cloneNode = trs[0].cloneNode(true);
    trs[1].replaceWith(cloneNode);
    trs[0].replaceWith(trs[1]);
  };
})


//Ex8-노드 삽입과 바꾸기
window.addEventListener("load", function () {
  var section8 = document.querySelector("#section8")
  var noticeList = section8.querySelector(".notice-list");
  var tbodyNode = noticeList.querySelector("tbody");
  var upButton = section8.querySelector(".up-button");
  var downButton = section8.querySelector(".down-button");
  //노드객체를 선택하기위한 메서드
  //parentNode
  //firstChild
  //lastChild
  //previousSibling
  //nextsibling
  //ElementChild는 엘리먼트만 대상으로하겠다.
  var currentNode = tbodyNode.firstElementChild;//children[0]

  downButton.onclick = function () {
    //2번째 노드를 지움
    var nextNode = currentNode.nextElementSibling;
    if (nextNode == null) {
      alert('더이상 이동할수 없습니다.');
      return;
    }
    // tbodyNode.removeChild(nextNode);
    //insertAdjacentElement 는 최근에생긴 메소드
    tbodyNode.insertBefore(nextNode, currentNode);


  };

  upButton.onclick = function () {

    var prevNode = currentNode.previousElementSibling;
    if (prevNode == null) {
      alert("더이상 이동할수 없습니다.");
      return;

    }
    // 자바스크립트 초기에는 insertbefore만 존재함
    // 따라서 위 함수와 반대로 current를 때어내고 밑으로 집어넣는 작업필요
    // 동적으로만 currentNode가 아래로 간것처럼 보이지만 실제로는 안바뀜
    // tbodyNode.removeChild(currentNode);
    // tbodyNode.insertBefore(currentNode,prevNode); 

    currentNode.insertAdjacentElement("afterend", prevNode);
    // beforebegin
    // <p>
    //   afterbegin
    //   foo
    //   beforeend
    // </p>
    // afterend
  };
})

//Ex7 : 노드 복제 및 템플릿 복제
window.addEventListener("load", function () {
  var notice = [{ id: 5, title: "퐈이야", regDate: "2044-01-26.", writerId: "은규", Hit: 42 }
    , { id: 5, title: "퐈이야", regDate: "2044-01-26.", writerId: "은규", Hit: 42 }];
  var section7 = document.querySelector("#section7");

  var noticeList = section7.querySelector(".notice-list");
  var tbodyNode = noticeList.querySelector("tbody");
  var cloneBtn = section7.querySelector(".clone-button");
  var templatBtn = section7.querySelector(".template-button")

  cloneBtn.onclick = function () {
    //trNode 부터 tds까지 일련의 노드복제과정
    var trNode = noticeList.querySelector("tbody tr");
    var cloneNode = trNode.cloneNode(true);
    var tds = cloneNode.querySelectorAll("td");

    console.log(tds[1]);
    tds[0].textContent = notice[0].id;
    tds[1].innerHTML = '<a href="' + notice[0].id + '">' + notice[0].title + '</a>';
    tds[2].textContent = notice[0].regDate;
    tds[3].textContent = notice[0].writerId;
    tds[4].textContent = notice[0].Hit;
    tbodyNode.appendChild(cloneNode);

  };
  templatBtn.onclick = function () {
    //만들어둔 템플릿 노드늘 찍어야함
    var template = section7.querySelector(".template");
    var cloneNode = document.importNode(template.content, true);
    var tds = cloneNode.querySelectorAll("td");

    tds[0].textContent = notice[0].id;
    // tds[1].innerHTML ='<a href="'+notice[0].id+'">'+notice[0].title+'</a>';
    // innerHtml 로 태그까지 구현을 하고싶지않은경우 a태그노드를 따로구해와서 적용가능
    var aNode = tds[1].children[0];
    aNode.href = notice[0].id;
    aNode.textContent = notice[0].title;

    tds[2].textContent = notice[0].regDate;
    tds[3].textContent = notice[0].writerId;
    tds[4].textContent = notice[0].Hit;

    tbodyNode.appendChild(cloneNode);

  };
})
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

  addButton.onclick = function () {
    var title = titleInput.value;
    var html = '<a href="">' + title + '</a>';
    var liNode = document.createElement("li");
    liNode.innerHTML = html;
    menuListUl.append(liNode);
  };
  delButton.onclick = function () {
    var liNode = menuListUl.children[0];
    liNode.remove();
  };
  delAllButton.onclick = function () {





  };

})
//Ex6 : Ex6 -노드조작: 메뉴추가(createTextNode, Element)
window.addEventListener("load", function () {
  var section6 = document.querySelector("#section6");
  var titleInput = section6.querySelector(".title-input");
  var menuListUl = section6.querySelector(".menu-list");
  var addButton = section6.querySelector(".add-button");
  var delButton = section6.querySelector(".del-button");

  addButton.onclick = function () {
    var title = titleInput.value;

    var html = '<a href="">' + title + '</a>';
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
  delButton.onclick = function () {
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