import TodoItem from "./TodoItem";
import {data} from "./data";
import TodoCollection from "./TodoCollection";

const sampleTodos : TodoItem[] = data.map(
    (item) => new TodoItem(item.id, item.task, item.complete)
);

const myTodoCollection = new TodoCollection("My Todo List", sampleTodos);

myTodoCollection.addTodo("잠자기");
myTodoCollection.addTodo("스트레칭 하기");
myTodoCollection.addTodo("물 마시기");

myTodoCollection.markComplete(3, true);

console.log(`${myTodoCollection.userName}`);
myTodoCollection.todoItems.forEach((item) => item.printDetails());