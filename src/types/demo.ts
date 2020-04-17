
export interface DemoData {
  //  key: number;
   name: string;
   color: string;
   data?: any;
}

export enum DemoActions{
 DATA_SHOW = 'DATA_SHOW',
 DATA_CLEAR = 'DATA_CLEAR'
}

interface DemoActionType<T,P>{
 type:T;
 payload:P;
}

export type DemoAction = 
  | DemoActionType<typeof DemoActions.DATA_SHOW,DemoData>
  | DemoActionType<typeof DemoActions.DATA_CLEAR,any>
