export const checkValidData = (email, password) => {



    const isEmailValid = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);

    //8 characters minimum, no special symbols, at least 1 digit, at least 1 letter
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

    if(!isEmailValid) return "Email ID is not valid"
    if(!isPasswordValid) return "Password is not valid"

    return null;
};


export const validateName = (name) =>{
    const isNameValid = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name);

    if(!isNameValid) return "Name is not valid"

    return null;
}