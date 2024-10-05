export const validate = (data, type) => {

    const errors = {};

    if (!data.email) { 
        errors.email = "ایمیل را وارد کنید"
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "آدرس ایمیل اشتباه است"
    } else {
        delete errors.email
    }

    if (!data.password) {
        errors.password = "رمز عبور را وارد کنید"
 } else if (data.password.length < 6) {
        errors.password = "رمز عبور باید حد اقل 6 کاراکتر باشد "
 } else {
     delete errors.password
                }

        if (type === "signup") {

            if (!data.name.trim()) {
                errors.name = "نام کاربری را وارد کنید"
            }else if(data.name.length < 4){
                errors.name = " اشتباه | نام طولانی تری انتخاب کنید"
            } else {
                delete errors.name
            }

            if (!data.confirmPassword) {
                errors.confirmPassword = "رمز عبور را تکرار کنید"
            } else if (data.confirmPassword !== data.password) {
                errors.confirmPassword = "رمز عبور اشتباه است"
            } else {
                delete errors.confirmPassword
               
            }

            if (data.isAccepted) {
                delete errors.isAccepted
            } else {
                errors.isAccepted = "قوانین را قبول کنید"
            }
        }

    return errors;
}