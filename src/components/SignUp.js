// import React from 'react';


// const SignUp = () => {



//     return (
//         <div >
//             <h1>Sign Up page</h1>
           
//         </div>
//     );
// };

// export default SignUp;

import React, { useState, useEffect } from 'react';
import { validate } from './validate';
import { Link } from 'react-router-dom';
import styles from "./SignUp.module.css";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from "./toast"





       const SignUp = () => {

                        const [data, setData] = useState({
                            name: "",
                            email: "",
                            password: "",
                            confirmPassword: "",
                            isAccepted: false
                        });
                const [errors, setErrors] = useState({});
                const [touched, setTouched] = useState({});

          useEffect(() => {
          setErrors(validate(data, "signup"))
          }, [data , touched])



    const changeHandler = event => {
        if (event.target.name === "isAccepted") {
            setData({ ...data, [event.target.name]: event.target.checked })
        } else {
            setData({ ...data, [event.target.name]: event.target.value })
        }
    }

    const focusHanlder = event => {
        setTouched({ ...touched, [event.target.name]: true })
    }

    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify("ثبت نام شما با موفقیت انجام شد .", "success")
               
        } else {
                    notify("مشخصات اشتباه  !", "error")
                    setTouched({
                        name: true,
                        email: true,
                        password: true,
                        confirmPassword: true,
                        isAccepted: true
                    })
                }
    }

    return (
        <div className={styles.container} style={{background:"#ffffff"}} >
            <form onSubmit={submitHandler} className={styles.formContainer} style={{background:"#e3e5e9"}}>
                <h2 className={styles.header}>ثبت نام</h2>

                    <div className={styles.formField}>
                        <label>نام</label>
                        <input
                            className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput}
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={changeHandler}
                            onFocus={focusHanlder}
                        />
                        {errors.name && touched.name && <span>{errors.name}</span>}
                    </div>

                <div className={styles.formField}>
                    <label>ایمیل</label>
                    <input
                        className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}
                        type="text"
                        name="email"
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={focusHanlder} />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>

                <div className={styles.formField}>
                    <label>رمز عبور</label>
                    <input
                        className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput}
                        type="password" name="password"
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={focusHanlder} />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>

                <div className={styles.formField}>
                    <label>تکرار رمز عبور</label>
                    <input
                        className={(errors.confirmPassword && touched.confirmPassword) ? styles.uncompleted : styles.formInput}
                        type="password"
                        name="confirmPassword"
                        value={data.confirmPassword}
                        onChange={changeHandler}
                        onFocus={focusHanlder} />
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>

                <div className={styles.formField}>
                    <div className={styles.checkBoxContainer}>
                        <label>قوانین و شرایط سایت را میپذیرم</label>
                        <input
                            type="checkbox"
                            name="isAccepted"
                            value={data.isAccepted}
                            onChange={changeHandler}
                            onFocus={focusHanlder} />
                    </div>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>



                <div className={styles.formButtons}>
                 ورود
                    <button type="submit">ثبت نام</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;

// !/\S+@\S+\.\S+/.test(data.email)

// !/\S+@\S+\.\S+/.test(data.email)



// body {
//     margin: 0;
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//       'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//       sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//   }

//   code {
//     font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
//       monospace;
//   }