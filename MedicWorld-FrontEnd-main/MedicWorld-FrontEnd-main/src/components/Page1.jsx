import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

const Page1 = ({ setlock, lock, handlepage1, page1, setPage1, page2, setPage2 }) => {
    let [gender, setGender] = useState()
    let [email, setEmail] = useState(false)
    let [otp, setOtp] = useState(true)
    let [input, setInput] = useState(true)
    let history=useHistory()
    let step1 = { username: useRef(), email: useRef(), password: useRef(), phone: useRef(), age: useRef(),otp:useRef()}
    let handleFistPage = () => {
        let get = localStorage.getItem("signup")
        get = JSON.parse(get);
        for (let index in step1) {
            get[index] = step1[index].current.value;
        }
        get.gender = gender;
        get = JSON.stringify(get)
        setPage1(!page1)
        setPage2(!page2)
        localStorage.setItem("signup", get)

    }
    // verifying email function
    let sendOtp = (e) => {
        e.preventDefault()
        console.log(step1.username.current.value)
        fetch("http://localhost:9091/user/sendotptoemail", { headers: { email: step1.email.current.value } })
            .then((response) => {
                if (response.status == 200) {
                    alert("otp sent sucessfully to our email")
                    return true;
                } else if (response.status == 400) {
                    return response.text()
                }
            })
            .then((reslove) => {
                if (typeof reslove === "boolean") {
                    setEmail(!email)
                    setOtp(!otp)
                } else {
                    alert(reslove)
                }

            })
    }
    // verfiying otp function
    let verifyOtp= (e) => {
       console.log( step1.otp.current.value);
        console.log(step1.email.current.value);
        e.preventDefault()
        fetch("http://localhost:9091/user/crossverfiyotp", 
                                                            { 
                                                                headers: { 
                                                                            email: step1.email.current.value,
                                                                            otp:Number(step1.otp.current.value)
                                                                        } 
                                                            })
        .then((response) => {
            if (response.status == 200) {
                return true;
            } else if (response.status == 400) {
                return response.text()
            }
        })
        .then((reslove) => {
            if (typeof reslove === "boolean") {
                setInput(!input)
                setOtp(!otp)
                alert("Otp sucessfully verify")
            } else {
                alert(reslove)
            }

        })

    }

    return (
        <div className="page1 w-75">
            <div className="name">
                <input type="text" className="input" placeholder="Enter Name" ref={step1.username} />
                <i class="fa-solid fa-user-secret"></i>
            </div>
            <div className="mail">
                <input type="email" placeholder="Enter Email" ref={step1.email} style={{ paddingRight: "120px" }} disabled={email} />
                <button className="btn btn-info text-light rounded-start-0" onClick={sendOtp} disabled={email}>Send Otp</button>
                <i class="fa-sharp fa-solid fa-envelope"></i>
            </div>
            <div className="otp">
                <input type="number" disabled={otp} placeholder="Enter Otp" ref={step1.otp}/>
                <button className="btn btn-warning rounded-start-0" disabled={otp} onClick={verifyOtp}>Verify Otp</button>
                <i class="fa-solid fa-comment"></i>
            </div>
            <div className="pwd">
                <input type={lock ? "password" : "text"} placeholder="Enter Password" ref={step1.password} disabled={input} />
                <i class={lock ? "fa-sharp fa-solid fa-lock" : "fa-sharp fa-solid fa-lock-open"} onClick={() => { setlock(!lock) }} ></i>
            </div>
            <div className="number">
                <input type="number" placeholder="Enter Phonenumber" ref={step1.phone} disabled={input} />
                <i class="fa-solid fa-phone"></i>
            </div>
            <div className="age">
                <input type="number" placeholder="Enter Age" ref={step1.age} disabled={input} />
                <i class="fa-solid fa-arrow-up-1-9"></i>
            </div>
            <div className="gender">
                <div className="d-flex justify-content-evenly align-items-center ">
                    <div style={{ height: "40px" }}>
                        <i class="fa-solid fa-person-half-dress fs-2"></i>
                    </div>
                    <input type="radio" name="gender" className="ms-4" value="Male" onClick={(e) => { setGender(e.target.value) }} /><span className="fs-5 text-light">Male</span>
                    <input type="radio" name="gender" value="Female" onClick={(e) => { setGender(e.target.value) }} /><span className="fs-5 text-light">Female</span>
                    <input type="radio" name="gender" value="Other" onClick={(e) => { setGender(e.target.value) }} /><span className="fs-5 text-light">Others</span>
                </div>
            </div>
            <div className="w-100 d-flex justify-content-end pt-2">
                <button className="btn btn-outline-warning" onClick={handleFistPage} disabled={input}>Next</button>
            </div>

        </div>
    );
}
export default Page1;
