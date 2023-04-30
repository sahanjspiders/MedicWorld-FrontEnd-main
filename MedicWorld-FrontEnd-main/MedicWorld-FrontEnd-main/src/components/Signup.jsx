import { useState } from "react";

const Signup = ({ diabetics }) => {
    let [bp,setBp] = useState(true), [sugar,setSugar] = useState(true), [other,setOther] = useState(true);
    
    console.log("signup");
    return (
        <>
        <h3 className="pt-3 fw-lighter text-light">One Step Away to SignUp</h3>
            <div className="dropbox w-75 d-flex justify-content-between mt-2 pt-3">
                <div className="diabetic d-flex align-items-center">
                    <h4 className="text-light fw-light m-0">Diabetics </h4>
                </div>
                <div className="select w-50 d-flex align-items-center justify-content-center">
                    <div class="dropdown">
                        <a class="btn btn-outline-warning dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                            Select Diabetics
                        </a>
                        <ul class="dropdown-menu">
                            {bp && <li class="dropdown-item" onClick={() => { diabetics.push("Blood Pressure");setBp(!bp) }}>Blood Pressure</li>}
                            {sugar && <li class="dropdown-item" onClick={() => { diabetics.push("Sugar");setSugar(!sugar) }}>Sugar</li>}
                            {other && <li class="dropdown-item" onClick={() => { diabetics.push("Others");setOther(!other) }}>Others</li>}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-75 d-flex justify-content-center" style={{ padding: "50px 0px 0px 0px" }}>
                <input type="submit" value="Signup" className="btn btn-outline-warning " />
            </div>
        </>
    );
}

export default Signup;