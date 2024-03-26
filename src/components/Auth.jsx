import React, { useEffect, useRef, useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const USER_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const NAME_REGEX = /^[a-zA-Z ]{4,15}$/; //not allowed to use special symbors or numbers but space btw letters
const TEXT_REGEX = /^[a-zA-Z 0-9 .,!@#$%&'"*+/=?^_`({|}):;~-]{4,70}$/; //allowed symbols and numbers and space

const Auth = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validUser, setValidUser] = useState(false);

    const [name, setName] = useState('');
    const [validName, setVaildName] = useState(false);

    const [text, setText] = useState('');
    const [validText, setValidText] = useState(false);

    const [userFocus, setUserFocus] = useState(false);


    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    //setting focus
    useEffect(() => {
        userRef.current.focus();
    },[])

    //validate username
    useEffect(() => {
        const result = USER_REGEX.test(user); //test username agains regex
        console.log(result);
        console.log(user);
        setValidUser(result);
    },[user])

    ///validate full name
    useEffect(() => {
        const result = NAME_REGEX.test(name, text);
        console.log(result);
        console.log(name);
        setVaildName(result);
    }, [name])

    ///validate text
    useEffect(() => {
        const result = TEXT_REGEX.test(text);
        console.log(result);
        console.log(text);
        setValidText(result);
    }, [text])

    //display error message
    useEffect(() => {
        setErrMsg(''); //clear out error message when user make change
    },[user, name, text])

    const handleSubmit = async(e) => {
        e.preventDefault();
        //if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = TEXT_REGEX.test(name);
        const v3 = TEXT_REGEX.test(text);

        if(!v1 || !v2 || !v3) {
            setErrMsg("Invalid Entry");
            return;
        }
        console.log(user, name, text);
        setSuccess(true)
    }

  return (
    <>
        {success ? (
            <section style={{textAlign: "center"}}>
                <h1>Submitted successfully! <br/> Thanks for reaching out to us 💌</h1>
                <p style={{textDecoration: "underline", marginTop: "1em"}}>
                    <a href="http://localhost:3000/">Back to the form</a>
                </p>
            </section>
        ) : (
        <div className='center'>
            <p 
            ref={errRef} 
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
            >
                {errMsg}
            </p>

            <form className="q-container" onSubmit={handleSubmit}>
                {/* for must match with ID */}

                <label htmlFor="email" className='input-box'>
                    Email Address
                    <span className={validUser ? "valid" : "hide"}>
                        <CheckCircleOutlineIcon id='val-icon' style={{color: "royalblue"}}/>
                    </span>
                    <span className={validUser || !user ? "hide" : "invalid"}>
                        <ErrorOutlineIcon id='inval-icon' style={{color: "red"}}/>
                    </span>
                </label>
                <input 
                id='email' 
                name='email' 
                type="email" 
                autoComplete="off" 
                ref={userRef}
                onChange={(e) => setUser(e.target.value)}
                aria-invalid={validUser ? "false" : "true"}
                aria-describedby='uidnote' 
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                placeholder='example@email.com' 
                style={{borderColor: validUser && user && userFocus ? "royalblue" : "red" || !userFocus ? null : "red"}}
                required
                />

                <p id="uidnote"
                className={userFocus && user && !validUser ? "instructions" : "offscreen"}
                >
                    <InfoIcon id='info-icon'/>
                    Must use the valid email format
                </p>

                <label htmlFor="name" className='input-box'>
                    Full Name
                    <span className={validName ? "valid" : "hide"}>
                        <CheckCircleOutlineIcon id='val-icon' style={{color: "royalblue"}}/>
                    </span>
                    <span className={validName || !name ? "hide" : "invalid"}>
                        <ErrorOutlineIcon id='inval-icon' style={{color: "red"}}/>
                    </span>

                </label>
                <input 
                id='name' 
                name='name' 
                type="text" 
                autoComplete="off" 
                ref={userRef}
                onChange={(e) => setName(e.target.value)}
                aria-invalid={validName ? "false" : "true"}
                aria-describedby='nmnote' 
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                placeholder='John Doe' 
                required
                style={{borderColor: validName ? "royalblue" : "red" || !userFocus ? null : "red"}}
                />

                <p id="nmnote"
                    className={userFocus && name && !validName ? "instructions" : "offscreen"}
                    >
                        <InfoIcon id='info-icon'/>
                        Must provide your first and last name
                </p>

                <label htmlFor="text" className='input-box'>
                    Enter your questions
                    <span className={validText ? "valid" : "hide"}>
                        <CheckCircleOutlineIcon id='val-icon' style={{color: "royalblue"}}/>
                    </span>
                    <span className={validText || !text ? "hide" : "invalid"}>
                        <ErrorOutlineIcon id='inval-icon' style={{color: "red"}}/>
                    </span>
                </label>
                <textarea 
                id='text' 
                name='text' 
                type="text" 
                autoComplete="off" 
                onChange={(e) => setText(e.target.value)}
                aria-describedby='txtnote' 
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                aria-invalid={validText ? "false" : "true"}
                placeholder='Is smoothie healthy?' 
                required
                style={{borderColor: validText ? "royalblue" : "red" || !userFocus ? null : "red"}}
                />

                <p id="txtnote"
                    className={userFocus && text && !validText ? "instructions" : "offscreen"}
                    >
                        <InfoIcon id='info-icon'/>
                        Must enter any text within 70 characters limit
                </p>

                <button disabled={!validUser || !validName || !validText ? true : false} className="form-button" type='submit'>
                    Submit
                </button>
            </form>
        </div>
        )}
    </>
  )
}

export default Auth;
