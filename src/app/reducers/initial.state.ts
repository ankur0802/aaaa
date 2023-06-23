export interface SharedState {
    data: any;
    message: string;
    myDetail:any;
  }


export const initialState: SharedState = {
    data:{},
    message: '',
    myDetail:{}
  };