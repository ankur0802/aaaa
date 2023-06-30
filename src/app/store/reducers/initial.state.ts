export interface SharedState {
  data: any;
  message: string;
  myDetail: any;
}

export const initialState: SharedState = {
  data: {},
  message: '',
  myDetail: {},
};
export interface roleState {
  data: any;
  success: boolean;
}

export const roleInitialState: roleState = {
  data: {},
  success: false,
};
export interface kiteState {
  userdata: any;
}

export const kiteInitialState: kiteState = {
  userdata: {},
};
