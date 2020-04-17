
// 引入类型
import { TodoAction, TodoActions, Todo } from "../types";

// 接收数据类型:Todo , return返回类型 TodoAction
export function addTodo(todo: Todo): TodoAction {
	return {
		type: TodoActions.ADD_TODO,
		payload: todo,
	};
}

// Async Function expample with redux-thunk ,异步修改action 
export function completeTodo(todoId: number) {
	// here you could do API eg

	return (dispatch: Function, getState: Function) => {
		dispatch({ type: TodoActions.COMPLETE_TODO, payload: todoId });
	};
}

export function uncompleteTodo(todoId: number): TodoAction {
	return {
		type: TodoActions.UNCOMPLETE_TODO,
		payload: todoId,
	};
}

 
export function deleteTodo(todoId: number): TodoAction {
	return {
		type: TodoActions.DELETE_TODO,
		payload: todoId,
	};
}
