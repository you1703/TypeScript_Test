"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoItem {
    // 접근 지정자 가능 [public, private, protected]
    // public id: number;
    // public task : string;
    // public complete : boolean;
    // 타입 스크립트에서는 생성자를 정의 할 때 파리미터로 접근 지정자를 제시해주고 파라미터를 정의하면 프로퍼티로 인식이 된다.
    // 위의 id, task, complete와 중복이 되서 두번 정의를 해줘야 하기 때문에 접근 지정자 제시 시 파라미터에 직접 넣어도 동일한 효과를 보게 된다.
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetails() {
        console.log(`${this.id}\t${this.task}\t${this.complete ? '\tcomplete!' : ''}`);
    }
}
exports.default = TodoItem;
