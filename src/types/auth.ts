// CreateAccount.tsx interface
export interface CreateAccountFormValue {
    nickName: string;
    email: string;
    password: string;
};
export interface StyledIsCreateAccountErrorProps {
    isNickNameError: boolean;
    isIdError: boolean;
    isPasswordError: boolean;
    isError: boolean;
}

// Login.tsx interface
export interface LoginFormValue {
    email: string;
    password: string;
};
export interface StyledIsLoginErrorProps {
    isError: boolean;
}

// DropDownMenu.tsx, LoggedInMenu interface
export interface UserNameProps{
    userName : string | null
}