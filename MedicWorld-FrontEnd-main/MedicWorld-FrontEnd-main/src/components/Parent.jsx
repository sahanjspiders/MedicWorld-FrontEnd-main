// import axios from "axios";
import { useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Signup from "./Signup";
import "../styles/signup.css"
import { useHistory } from "react-router-dom";
const Parent = () => {
    let ls = localStorage.getItem("signup", "{}")
    let history=useHistory()
    if (ls == null) {
        localStorage.setItem("signup", "{}")
    }
    let [lock, setLock] = useState(true)
    let [page1, setPage1] = useState(true)
    let [page2, setPage2] = useState(false)
    let [signup, setSignup] = useState(false)
    let [diabetics, setDiabetics] = useState([])
    console.log("parent");
    let handleSignup = (e) => {
        e.preventDefault()
        let user = localStorage.getItem("signup")
        user = JSON.parse(user)
        user.interaction = {}
        if (diabetics.length > 0) {
            for (let value of diabetics) {
                if (value === "Blood Pressure") {
                    user.interaction.bp = value;
                } else if (value === "Sugar") {
                    user.interaction.sugar = value;
                } else if (value === "Others") {
                    user.interaction.others = value
                }
            }
        } else {
            user.interaction.bp = "NO";
            user.interaction.sugar = "NO";
            user.interaction.others = "No";
        }

        // axios.post("http://localhost:9091/signup")
        fetch("http://localhost:9091/user/signup",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            })
            .then(res => {
                return res.ok ? res.ok : res.text();
            }
            )
            .then((response) => {
                if (typeof response === "boolean") {
                    alert("Signup Successfull")
                    localStorage.clear()
                    history.push("/")
                } else {
                    alert(response.toUpperCase())
                    window.location.reload()
                }
            }
            )

    }
    return (
        <div class="d-flex justify-content-center align-items-center body" style={{minHeight: "100vh"}}>
            <div className="outer d-flex justify-content-between" style={{ width: "950px", height: "580px" }}>
                <div className="imglogo w-50 d-flex justify-content-center align-items-center">
                    <img src="https://cdn-icons-png.flaticon.com/512/387/387577.png" className="h-75" />
                </div>
                <div className="form pt-2 pb-2 ">
                    <h1 className="text-center text-light fw-lighter mb-1">Medic World</h1>
                    <form className="d-flex flex-column align-items-center" onSubmit={handleSignup}>
                        {page1 && <Page1 setlock={setLock} lock={lock} page1={page1} setPage1={setPage1} page2={page2} setPage2={setPage2} />}
                        {page2 && <Page2 signup={signup} setSignup={setSignup} page2={page2} setPage2={setPage2} />}
                        {signup && <Signup diabetics={diabetics} />}
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Parent;