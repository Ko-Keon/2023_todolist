const todoForm = document.querySelector("#todo-form")
todoForm.addEventListener("submit", todoAdd);

// todoAdd 함수 작성
function todoAdd(e) {
    e.preventDefault();

    // input 태그의 값을 가져와서 ul의 list로 추가하기
    const todoVlaue = todoForm.firstElementChild.value;
    
    // li태그 생성 후 ul 찾아서 추가
    const li = document.createElement("li")
    
    // li 태그에 추가 할 내용 : 체크박스, 텍스트노드, 버튼
    const check = document.createElement("input")
    check.type = "checkbox"
    const text = document.createTextNode(todoVlaue)
    const button = document.createElement("button")
    button.innerHTML = "X"

    const time = document.createElement("span")
    time.innerHTML = getClock();

    li.appendChild(check)
    li.appendChild(text)
    li.appendChild(button)

    // ul 태그를 가져옴
    document.querySelector("#todolist").appendChild(li);

    // input의 value값을 ""으로 바꿈
    todoForm.firstElementChild.value = ""

    // check에 클릭 이벤트
    check.addEventListener("click",todoCheck)
    // button에 클릭 이벤트
    button.addEventListener("click",todoDelete)

    countAll()
    done()

    // 투두 추가 시 countAll함수 실행
    const p1 = document.querySelector("#p1")
    p1.innerHTML = `전체 할 일 : ${countAll()}`

}

// check에 들어가는 todoCheck 함수 작성
function todoCheck(e) {
    const check = e.target
    const li = check.parentNode
    if (check.checked) {
        li.style.color = "lightgray"
    }
    else {
        li.style.color = ""
    }
    
    // 완료 된 일 체크시 done함수 실행
    const p2 = document.querySelector("#p2")
    p2.innerHTML = `완료 한 일 : ${done()}`
}

// 선택된 li가 삭제되는 함수
function todoDelete(e) {
    const button = e.target
    const li = button.parentNode
    li.remove()
    const p2 = document.querySelector("#p2")
    p2.innerHTML = `완료 한 일 : ${done()}`
    const p1 = document.querySelector("#p1")
    p1.innerHTML = `전체 할 일 : ${countAll()}`
}


// 투두 추가된 li 갯수 카운트 함수
function countAll() {
    let todolist = document.querySelector("#todolist");
    return todolist.childElementCount-1
}


// 투두 완료된 li 갯수 카운트 함수
function done() {
    let done = document.querySelectorAll("li>input[type = 'checkbox']:checked")
    return done.length
}






