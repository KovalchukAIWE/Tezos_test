import React, {Component} from 'react';

import styles from '../loginForm/LoginForm.module.css';



export default class LoginForm extends Component {
    state = {
        email: '',
        emailValideName:'',
        password: '',
        passwordNext:'',
        passOrder:'',
        passInvalid:true,
        passBorder: ''
    }

     passwordValid = password => {
        if (password.length < 8) return false;
        const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!regExp.test(password)) return false;
        return true;
      };


    emailValid = email => {
        const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regExp.test(email)) return false;
        return true;
    };


    handleChange = e => {
        const { name, value } =e.target
        
        this.setState({
            [name]: value
        })
    }

    handleChangeEmail=()=>{
        this.setState({emailValideName:true})
    }
    handleChangePass=()=>{
        this.setState({passBorder:false})
        this.setState({passInvalid:!this.state.passInvalid})
    }
    handleChangePassNext=()=>{
        this.setState({passOrder:true})
    }
    
    

    handleSubmit = e => {
        e.preventDefault()
        const emailValidName = this.emailValid(this.state.email)
        if(emailValidName){
        this.setState({emailValideName: false})

    }
       const item = this.passwordValid(this.state.password )
       if(this.state.password === this.state.passwordNext && this.state.password !== ""){
        this.setState({passOrder: false})
    }
        if(item){
        this.setState({passBorder: false})
    }
    }
render () {
    const { email, password } = this.state;
    return (
        <div className={styles.form_wrapper}>
            <form onSubmit={this.handleSubmit}>
                <div className={styles.inner_wrapper}>
                <p className={styles.form_header}>Login</p>
                <div onClick={this.handleChangeEmail} 
                    className={this.state.emailValideName !== "" ?(this.state.emailValideName? styles.border_invalid : styles.border_valid) : null}>
                        <input className={styles.input_email} 
                                type='email'
                                value={email} 
                                onChange={this.handleChange} 
                                name='email'  required></input>
                        <span className={styles.label_email}>Email</span>
                </div>
                <div className={this.state.emailValideName? styles.pass_valid : styles.pass_invalid}>
                    <p className={styles.input_warning}>Invalid email</p>
                </div>
                <div className={styles.pass_wrapper}>
                    <div className={this.state.passBorder !== "" ?(this.state.passBorder? styles.border_invalid : styles.border_valid) : null}  onClick={this.handleChangePass}>
                        <input className={styles.input_password} 
                                type='password' 
                                placeholder='Password'
                                value={password} 
                                onChange={this.handleChange} 
                                name='password'></input>
                        {/* <span className={styles.label_password}>Password</span> */}
                    </div>
                    <div className={this.state.passInvalid? styles.pass_valid: styles.pass_invalid }>
                        Password must contain only latin letters, at least 1 upper-case character, 1 lower-case character, one number and one special character.
                    </div>
                </div>
                <div onClick={this.handleChangePassNext} 
                    className={this.state.passOrder !== "" ?(this.state.passOrder? styles.border_valid : styles.border_invalid) : null}>
                        <input className={styles.input_repassword } 
                                type='password' 
                                placeholder='Password confirmation'
                                name='passwordNext' 
                                value={this.state.passwordNext} 
                                onChange={this.handleChange}></input>
                        {/* <span className={styles.label_repassword}>Password confirmation</span> */}
                </div>
                <div className={this.state.passOrder? styles.pass_valid : styles.pass_invalid}>
                    <p className={styles.input_warning}>Password doesn’t match</p>
                </div>
                <div className={styles.btn_wrapper}>
                    <button 
                    className={styles.form_btn} 
                    type='submit'>
                        Submit
                    </button>
                </div>
                </div>
            </form>
        </div>
    )
 }
}