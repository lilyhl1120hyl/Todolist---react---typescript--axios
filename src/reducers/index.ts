import { History } from "history";
import { combineReducers } from "redux";
import { Todo, DemoData } from "../types";
import * as todoReducer from "./todo";
import * as demoReducer from './demo';

export interface RootState {
	todoList: Todo[];
	demoList: DemoData[];
}

export default (history: History) =>
	combineReducers({
		...todoReducer,
		...demoReducer,
	});
