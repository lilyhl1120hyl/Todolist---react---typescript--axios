// 数据类型/模型

import { TodoAction } from './todo';
import { DemoAction } from './demo';

export * from './todo';
export * from './demo';

// action的集合
export type Action =| TodoAction
| DemoAction;
