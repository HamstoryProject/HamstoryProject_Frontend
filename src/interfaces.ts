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

// CreateAccount.tsx, Login.tsx interface
export interface StyledGridAreaProps {
    gridarea: string;
}

// Main.tsx interface
export interface StyledMainSectionProps {
    alignitems : string;
    textalign : string;
}

// Button.tsx interface
interface ButtonProps{
    children: React.ReactNode;
    onClick?: () => void;
}