export interface login {
  username: string;
  password: string;
}

export interface loginResponse {
  message: string;
  token: string;
  success: boolean;
  data: userData;
}

export interface userData {
  createdAt: string;
  isDeleted: boolean;
  isSuperadmin: boolean;
  name: string;
  role: roleData;
  username: string;
  __v: number;
  _id: string;
}

export interface roleData {
  permission: permissionData;
  isDeleted: boolean;
  roleName: string;
  __v: number;
  _id: string;
}

export interface permissionData {
  manageProject:boolean,
manageRole:boolean,
manageUser:boolean,
manageProjectDocument:boolean,
manageImportExport:boolean,
manageList:boolean,
manageEpics:boolean,
manageFields:boolean
}



export interface roleResponse {
role:roleData[],
success:boolean

}


export interface createUserResponse {
  
    success: boolean,
    message: string,
    data: {
        name: string,
        isSuperadmin: boolean,
        role: roleData,
        username: string,
        createdAt: string,
        isDeleted: boolean,
        _id: string,
        __v: number
    },
    Your_Password: string

}



export interface createRoleResponse {
  
  success: boolean,
    message:string,
    role: roleData

}

export interface changePasswordInput {
  
  oldPassword: string,
  newPassword:string,
  confirmPassword: string

}
