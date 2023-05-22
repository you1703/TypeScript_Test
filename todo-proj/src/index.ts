import TodoItem from "./model/TodoItem";
import {data} from "./data";
import TodoCollection from "./service/TodoCollection";
import TodoConsole from "./view/TodoConsole";
/*
const sampleTodos : TodoItem[] = data.map(
    (item) => new TodoItem(item.id, item.task, item.complete)
);

const myTodoCollection = new TodoCollection("My Todo List", sampleTodos);

myTodoCollection.addTodo("잠자기");
myTodoCollection.addTodo("스트레칭 하기");
myTodoCollection.addTodo("물 마시기");

myTodoCollection.markComplete(3, true);

console.log(`${myTodoCollection.userName}`);

//myTodoCollection.todoItems.forEach((item) => item.printDetails());

myTodoCollection.removeComplete();
//모든 항목 출력
myTodoCollection.getTodoItems(true).forEach((item) => item.printDetails());
console.log('==========================================================');
myTodoCollection.getTodoItems(false).forEach((item) => item.printDetails());
console.log('==========================================================');*/

const todoConsole = new TodoConsole();
todoConsole.promptUser();