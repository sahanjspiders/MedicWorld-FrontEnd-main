import { useRef } from "react";

const Page2 = (props) => {
    let step2 = { street: useRef(), door_no: useRef(), area: useRef(), city: useRef(), state: useRef(), pincode: useRef(), country: useRef() }
    let handleSecongPage = () => {
        let get = localStorage.getItem("signup")
        get = JSON.parse(get)
        get.address = {}
        for (let index in step2) {
            get.address[index] = step2[index].current.value;
        }
        get = JSON.stringify(get)
        if(localStorage.getItem("signup")!=null){
            props.setSignup(!props.signup)
            props.setPage2(!props.page2)
        }
        localStorage.setItem("signup", get)

    }

    return (
        <>
            <div className="add  pt-2" style={{ width: "90%" }}>
                <h4 className="text-center fs-3 fw-light text-light mb-2">Communication Details</h4>
                <div class="row g-3 generic">
                    <div class="col">
                        <input type="text" class="form-control bg-transparent ps-4" ref={step2.street} placeholder="Street" />
                        <i class="fa-sharp fa-solid fa-city"></i>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control bg-transparent ps-4" placeholder="Door Number" ref={step2.door_no} />
                        <i class="fa-solid fa-door-open"></i>
                    </div>
                </div>
                <div class="row g-3 generic">
                    <div class="col">
                        <input type="text" class="form-control bg-transparent ps-4" placeholder="City" ref={step2.city} />
                        <i class="fa-sharp fa-solid fa-city"></i>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control bg-transparent ps-4" placeholder="State" ref={step2.state} />
                        <i class="fa-solid fa-flag"></i>
                    </div>
                </div>
                <div class="row g-3 generic">
                    <div class="col">
                        <input type="text" class="form-control bg-transparent ps-4" placeholder="Pincode" ref={step2.pincode} />
                        <i class="fa-solid fa-arrow-up-1-9"></i>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control bg-transparent ps-4" placeholder="Country" ref={step2.country} />
                        <i class="fa-solid fa-globe"></i>
                    </div>
                </div>
                <div class="row g-3 generic">
                    <div class="col">
                        <input type="text" class="form-control bg-transparent w-75" placeholder="Enter Area" ref={step2.area} />
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                </div>
                <div className="d-flex justify-content-end pt-4">
                    <button className="btn btn-outline-warning" onClick={handleSecongPage}>Next</button>
                </div>
            </div>
        </>
    );
}

export default Page2;