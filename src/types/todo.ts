// 数据模型，类型

export interface Todo {
  key: number;
  id: number;
  text: string;
  completed: boolean;
}


// enum 枚举作为类型使用
export enum TodoActions {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  COMPLETE_TODO = "COMPLETE_TODO",
  UNCOMPLETE_TODO = "UNCOMPLETE_TODO",
}

//  定义一个接口类型
interface TodoActionType<T, P> {
  type: T;
  payload: P;
}

// 用接口类型封装 enum类型
export type TodoAction =
  | TodoActionType<typeof TodoActions.ADD_TODO, Todo>
  | TodoActionType<typeof TodoActions.COMPLETE_TODO, number>
  | TodoActionType<typeof TodoActions.UNCOMPLETE_TODO, number>
  | TodoActionType<typeof TodoActions.DELETE_TODO, number>
;
