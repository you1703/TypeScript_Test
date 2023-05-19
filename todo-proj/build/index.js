"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = __importDefault(require("./TodoItem"));
const data_1 = require("./data");
const TodoCollection_1 = __importDefault(require("./TodoCollection"));
const sampleTodos = data_1.data.map((item) => new TodoItem_1.default(item.id, item.task, item.complete));
const myTodoCollection = new TodoCollection_1.default("My Todo List", sampleTodos);
myTodoCollection.addTodo("잠자기");
myTodoCollection.addTodo("스트레칭 하기");
myTodoCollection.addTodo("물 마시기");
myTodoCollection.markComplete(3, true);
console.log(`${myTodoCollection.userName}`);
myTodoCollection.todoItems.forEach((item) => item.printDetails());
