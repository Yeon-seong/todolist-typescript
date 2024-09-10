const todoDatas = [
  {
    id: 1,
    todo: "아침먹기",
  },
  {
    id: 2,
    todo: "점심먹기",
  },
  {
    id: 3,
    todo: "저녁먹기",
  }
];

/* ---------- addTodoData 함수의 목적 : todoDatas 원본 고치기 ---------- */
const addTodoData = (todoText: any) => {
  const newTodoId = todoDatas[todoDatas.length-1].id + 1; // 마지막 번호 + 1
  const newTodo = {
    id: newTodoId,
    todo: todoText
  }
  todoDatas.push(newTodo);
  return todoDatas;
};


const addTodoList = () => {
  const $todoInput: any = document.querySelector("#todo_input");
  const todoText = $todoInput.value;
  $todoInput.value = "";
  const todoDatas = addTodoData(todoText);
  todoListRender(todoDatas);
};


const $todoButton: any = document.querySelector("#todo_button");
$todoButton.addEventListener("click", addTodoList);


/* ---------- 데이터를 넣어주면 todoList를 만들어주는 함수 ---------- */
// 매개변수로 todoDatas를 넣어 분리하면 todoDatas의 의존성을 없앨 수 있다.
const todoListRender = (todoDatas: any) => {
  const $todoContainer: any = document.querySelector("#todo_container");

  // ul 요소에 적힌 걸 지운다.
  $todoContainer.innerHTML = "";

  todoDatas.forEach((todoData:any) => {
    const $todoLi = document.createElement("li");

    const $todoP = document.createElement("p");

    $todoP.innerText = todoData.todo;

    $todoLi.append($todoP);

    $todoContainer.append($todoLi);
  });
};


todoListRender(todoDatas);