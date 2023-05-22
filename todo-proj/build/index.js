"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoConsole_1 = __importDefault(require("./view/TodoConsole"));
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
const todoConsole = new TodoConsole_1.default();
todoConsole.promptUser();
