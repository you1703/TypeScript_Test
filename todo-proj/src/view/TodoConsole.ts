import * as inquirer from 'inquirer';
import TodoCollection from '../service/TodoCollection';
import TodoItem from '../model/TodoItem';
import {data} from '../data';

class TodoConsole {
    private todoCollection : TodoCollection;

    constructor(){
        const sampleTodo: TodoItem[] = data.map(
            (item) => new TodoItem(item.id, item.task, item.complete)
        );

        this.todoCollection = new TodoCollection('My Todo List', sampleTodo);
    }

    displayTodoList() : void {
        console.log(
            `===================${this.todoCollection.userName}======================` +
            `(${this.todoCollection.getItemCounts().incomplete} item todo)`
        );
        this.todoCollection.getTodoItems(true).forEach((item) => item.printDetails());
    }

    promptUser() : void{
        console.clear();
        this.displayTodoList();

        inquirer.prompt({
            type: "list",
            name: "command",
            message: "Choose Option",
            choices: Object.values(Commands), 
        }).then((answers) => {
            if(answers["command"] !== Commands.Quit){
                this.promptUser();
            }
        });
    }
}

export default TodoConsole;