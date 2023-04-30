import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css"
const Home = () => {
  let [user, setUer] = useState();
  let [doctor, setDoctor] = useState()
  let [action, setAction] = useState()
  let emailorname = useRef(), password = useRef()
  let [data, setData] = useState(null)
  let image =
    [
      {
        id: 1,
        heading: "Oncology",
        image: "https://www.apollohospitals.com/bangaloreapolloconsultleads/assets/img/bariatric-bg.jpg",
        content: {
          p1: "Cancer is a ruthless disease. It evolves constantly and spreads relentlessly. It's hard to catch and even harder to treat.",
          p2: "But that is about to change, with Precision Oncology. Medic World unique approach to diagnosing, treating and monitoring cancer that is as precise as it can get.",
          p3: "Cancer is Conquerable. And you can conquer it too. With precision, with Medic World Hospitals. Stay a step ahead of cancer with Medic World Cancer Centres."
        }
      },
      {
        id: 2,
        heading: "Cardiology",
        image: "https://www.apollohospitals.com/bangaloreapolloconsultleads/assets/img/cardiology-bg.jpg",
        content: {
          p1: "The Medic World Heart Institutes are regarded as one of the best heart hospitals in India, performing a multitude of treatments and procedures in cardiology and cardiothoracic surgery. The scorecard shows an unmatched record of over 1,52,000 cardiac and cardiothoracic surgeries.",
          p2: "We have vast experience in the most complicated coronary artery bypass surgery, surgery for all types of valvular heart diseases, paediatric heart surgery, adult and paediatric heart transplantation with success rates comparable to international standards.",
          p3: ""
        }
      },
      {
        id: 3,
        heading: "Orthopedics",
        image: "https://www.apollohospitals.com/bangaloreapolloconsultleads/assets/img/ortho-bg.jpg",
        content: {
          p1: "The Medic World Institutes of Orthopaedics is regarded as one of the best & top orthopaedics hospitals in India with a legacy of innovation and excellence. The Institutes are at the forefront in offering the latest in Orthopedic treatments and Orthopedic surgical advancements in India on par with the best centres in the world.",
          p2: "Medic World Hospitals offers key & best orthopedic surgeries and procedures in India. We perform bone and joint replacement surgeries which include the most current Arthroscopic and Reconstructive techniques.",
          p3: ""
        }
      },
      {
        id: 4,
        heading: "Robotic Surgery",
        image: "https://www.apollohospitals.com/bangaloreapolloconsultleads/assets/img/sec_2.png",
        content: {
          p1: "Robotic Surgery is a branch of medical science that uses a robotic arm controlled with a computer by a surgeon. Small tools attached to the robotic arm are then used to perform the surgery by copying the hand movements of the surgeon as he controls the robotic arm. With this method being more convenient for the surgeon due to a perfect view of the ",
          p2: "",
          p3: ""
        }
      },
      {
        id: 5,
        heading: "Nephrology",
        image: "https://www.apollohospitals.com/bangaloreapolloconsultleads/assets/img/sec_1.png",
        content: {
          p1: "Nephrology is a branch of medical science that deals with the diagnosis and treatment of disorders related to the kidney. Nephrology is a centre of excellence at Apollo and sees more than 10,000 patients every year. Apollo houses some of the very best specialists in the world who specialize in management of kidney failure, dialysis, electrolyte dis",
          p2: "",
          p3: ""
        }
      },
      {
        id: 6,
        heading: "Neurology",
        image: "https://www.apollohospitals.com/bangaloreapolloconsultleads/assets/img/sec_7.png",
        content: {
          p1: "Neurology is a centre of excellence at Medic World Hospitals and deals with diagnosis and treatment of disorders of the nervous system. The Apollo Hospital Neuro departments are equipped with the best team and state of the art facilities like Neuro radiology, sleep lab, Intensive care units etc. Our Neuro team takes care of more than 300 variety of",
          p2: "",
          p3: ""
        }
      },
      {
        id: 7,
        heading: "Urology",
        image: "https://www.apollohospitals.com/bangaloreapolloconsultleads/assets/img/sec_6.png",
        content: {
          p1: "Urology deals with diagnosis and treatment of diseases predominantly of male reproductive organs and the urinary tract of males and females. Medic World Hospitals have state-of-the-art Urology facilities including minimally invasive surgeries, robotics and laparoscopy techniques, fiber-optic endoscopy, and lithotripsy units. An urologist deals with",
          p2: "",
          p3: ""
        }
      },
      {
        id: 8,
        heading: "Gastroenterology",
        image: "https://www.apollohospitals.com/bangaloreapolloconsultleads/assets/img/sec_9.png",
        content: {
          p1: "Gastroenterology deals with the diagnosis and treatment of complications of the gastrointestinal tract, i.e. the stomach and small intestine. A gastroenterologist deals with patients suffering from gastroenteritis, showing symptoms of vomiting, diarrhea, abdominal pain and cramping. With Medic World Hospitals’ qualified bench strength of Gastroenterolog",
          p2: "",
          p3: ""
        }
      },
      {
        id: 9,
        heading: "Bariatric Surgery",
        image: "https://www.apollohospitals.com/bangaloreapolloconsultleads/assets/img/sec_8.png",
        content: {
          p1: "Bariatric Surgery deals with weight reduction using various techniques to combat obesity. The process includes reducing the size of the stomach or removing a portion of the stomach or re-routing the small intestine. Medic World Hospitals is home to the best bariatric surgeons in the nation who are skilled in Gastrectomy and Gastroplasty among other",
          p2: "",
          p3: ""
        }
      },
      {
        id: 10,
        heading: "Pulmonary",
        image: "https://www.apollohospitals.com/bangaloreapolloconsultleads/assets/img/sec_10.png",
        content: {
          p1: "Pulmonary Medicine at Medic World Hospitals provides expertise in a broad range of diseases including asthma, COPD, critical care, cystic fibrosis, interstitial lung disease, lung cancer, neuromuscular disease, pulmonary hypertension, sarcoidosis, and sleep medicine. The smoke cessation clinics, COPD clinics are specialized clinics which offer tail",
          p2: "",
          p3: ""
        }
      }
    ]
  let handlelogin = (e) => {
    e.preventDefault()
                          fetch("http://localhost:9091/" + action + "/login", {
                            headers: {
                              emailorphone: emailorname.current.value,
                              password: password.current.value
                            }
                          })
                            .then(res => {
                              if (res.status == 200) {
                                return true
                              }
                              return res.text()
                            })
                            .then(reslove => {
                              if (typeof reslove === "boolean") {
                                alert("Login Successfull")
                              } else {
                                alert(reslove)
                              }
                            })
  }
  return (
    <div className="medicworld">
      <div className="medicheader">
        {/* navbar starts */}
        <div className="medicnav ps-5 pt-4 ms-5 d-flex align-items-center position-sticky top-0 z-1">
          <i class="fa-sharp fa-solid fa-hospital-user"></i>
          <div className="ps-3">
            <div className="ask text-light">
              <h5 className="m-0 d-flex align-items-center justify-content-center fs-5">ASK</h5>
            </div>
            <div className="">
              <h2 className="m-0 text-warning ps-4 fw-bold fs-1">Medic World</h2>
            </div>
          </div>

        </div>
        <div className="consult mt-5 pt-2">
          <div className="w-50 ps-5 ms-5">
            <h5 className="fw-bold fs-3 opacity-50" style={{ color: "lightblue" }}>The Medic World Of Care</h5>
          </div>
          <div className="consultlogin d-flex">
            <div className="text-light d-flex justify-content-center w-50 align-items-center">
              <div className="w-75 ps-3 fw-bold">
                <p className="m-0" style={{ fontSize: "50px" }} >Consult Our Trusted Surgeons, Make an appointment</p>
              </div>
            </div>
            <div className="mediclogin w-50 d-flex justify-content-center" >
              <div className="rounded-4 pt-3 abcd pb-4">
                <div >
                  <div className="d-flex d-flex justify-content-evenly">
                    <button className="btn btn-outline-light rounded-0" onClick={() => { setUer(true); setDoctor(false); setAction("user") }}>User Login</button>
                    <div style={{ border: "1px solid white" }}></div>
                    <button className="btn btn-outline-light rounded-0" onClick={() => { setUer(false); setDoctor(true); setAction("doctor") }}>Doctor Login</button>
                  </div>
                  {action && <span className="d-block fs-3 text-info text-center">{action.toUpperCase() + " Login".toUpperCase()}</span>}
                  <form className="d-flex justify-content-center pt-3" onSubmit={handlelogin}>
                    <div >
                      <div className="email">
                        <input type="text" name="" placeholder="UserName or Email-Id" ref={emailorname} />
                        <i class="fa-solid fa-user-secret text-warning"></i>
                      </div>
                      <div className="mt-4 password">
                        <input type="text" name="" id="" placeholder="Password" ref={password} />
                        <i class="fa-sharp fa-solid fa-lock text-warning"></i>
                      </div>
                      <div className="mt-3 d-flex justify-content-between ps-3 pe-3">
                        <button className="btn btn-outline-warning">Login</button>
                        <Link className="btn btn-outline-info" to="/signup">Signup</Link>
                      </div>
                      <Link className="text-center d-block mt-1 text-warning" to="/signup">ForgotPassword</Link>
                      <div className="ps-5 pe-5 mt-3 fs-3 d-flex justify-content-around">
                        <i class="fa-brands fa-google text-primary "></i>
                        <i class="fa-brands fa-facebook text-light"></i>
                        <i class="fa-brands fa-twitter " style={{ color: "antiquewhite" }}></i>
                        <i class="fa-solid fa-cloud text-info" ></i>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wave">
          <div className="wave1">
            <img src="https://www.apollohospitals.com/bangaloreapolloconsultleads/assets/svg/wave-static-01.svg" className="w-100" alt="" />
          </div>
        </div>
        {/* navbar ends */}
      </div>
      {/* ----------------------------------------------------------------------- */}
      <div className="svg-icons1 pt-5 pb-5 ">
        {/* center of excellence starts */}
        <div className="text-center">
          <h1>Centres of Excellence</h1>
        </div>
        <div className="d-flex justify-content-center">
          <div className="icons1 pt-5 d-flex justify-content-evenly text-center" style={{ width: "90%" }}>
            <div>
              <div className="centers-icons">
                <img src="data:image/png;base64,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" alt="" />
              </div>
              <div className="fw-bold">Cardiology</div>
            </div>
            <div >
              <div className="centers-icons">
                <img src="data:image/png;base64,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" className="w-100 h-100" alt="" />
              </div>
              <div className="fw-bold">Oncology</div>
            </div>
            <div className="">
              <div className="centers-icons m-auto">
                <img src="data:image/png;base64,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" alt="" />
              </div>
              <div className="fw-bold">Nephrology and Urology</div>
            </div>
            <div  >
              <div className="centers-icons">
                <img src="data:image/png;base64,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" alt="" />
              </div>
              <div className="fw-bold">Orthopaedics</div>

            </div>
            <div >
              <div className="centers-icons">
                <img src="data:image/png;base64,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" alt="" />
              </div>
              <div className="fw-bold">Nephrology</div>
            </div>
            <div className="">

              <div className="centers-icons m-auto">
                <img src="data:image/png;base64,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" alt="" />
              </div>
              <div className="fw-bold">Gastroenterology</div>
            </div>
          </div>
        </div>
        {/* center of excellence ends */}
      </div>
      {/* ----------------------------------------------- */}
      <div className="covidsafe  pt-5 mt-5">
        {/* covid safe starts */}
        <div className="text-center">
          <h1>We are Covid Safe</h1>
        </div>
        <div className="d-flex justify-content-center opacity-75 text-center">
          <p className="w-75">While these challenging times have brought many changes, at Apollo Hospitals one thing remained the same – Our commitment to the safety of our patients, their loved ones and our staff. We have established a safe environment and were among the first in the country to implement a range of rigorous protocols, which includes the following:</p>
        </div>
        <div className="ps-5 pe-5 d-flex justify-content-center ">
          <div className="covidcard pt-3 pb-5" >
            <div className="p-3 covidcontent">
              <div className="d-flex justify-content-center">
                <img src="https://www.apollohospitals.com/bangaloreapolloconsultleads/assets/img/ExtraSanitation.png" />
              </div>
              <div className="pt-2 text-center">
                <div >
                  <h2 className="fs-6">Extra Sanitation Methods</h2>
                </div>
                <div >
                  <span>Disinfecting all areas and frequently touched surfaces continuously</span>
                </div>
              </div>
            </div>
            <div className="p-3 covidcontent">
              <div className="d-flex justify-content-center">
                <img src="https://www.apollohospitals.com/bangaloreapolloconsultleads/assets/img/socialdistancing.png" />
              </div>
              <div className="pt-2 text-center">
                <div >
                  <h2 className="fs-6">Social Distancing</h2>
                </div>
                <div >
                  <span>Following social distancing protocols by implementing limited visitations, new waiting room protocols and other measures so you can safely practice social distancing and keep yourself and others safe.</span>
                </div>
              </div>
            </div>
            <div className="p-3 covidcontent">
              <div className="d-flex justify-content-center">
                <img src="https://www.apollohospitals.com/bangaloreapolloconsultleads/assets/img/facemask.png" />
              </div>
              <div className="pt-2 text-center">
                <div >
                  <h2 className="fs-6">Face Mask</h2>
                </div>
                <div >
                  <span>Mandating all patients and staff to wear face masks</span>
                </div>
              </div>
            </div>
            <div className="p-3 covidcontent">
              <div className="d-flex justify-content-center">
                <img src="https://www.apollohospitals.com/bangaloreapolloconsultleads/assets/img/screening.png" />
              </div>
              <div className="pt-2 text-center">
                <div >
                  <h2 className="fs-6">Screening at the entrance</h2>
                </div>
                <div >
                  <span>Screening of all visitors, including patients upon arrival Screening all patients for COVID-19 symptoms upon arrival.</span>
                </div>
              </div>
            </div>
            <div className="p-3 covidcontent">
              <div className="d-flex justify-content-center">
                <img src="https://www.apollohospitals.com/bangaloreapolloconsultleads/assets/img/testingourstaff.png" />
              </div>
              <div className="pt-2 text-center">
                <div >
                  <h2 className="fs-6">Testing our staff regularly</h2>
                </div>
                <div >
                  <span>Testing our staff regularly for COVID-19</span>
                </div>
              </div>
            </div>
            <div className="p-3 covidcontent">
              <div className="d-flex justify-content-center">
                <img src="https://www.apollohospitals.com/bangaloreapolloconsultleads/assets/img/separatewaiting.png" />
              </div>
              <div className="pt-2 text-center">
                <div >
                  <h2 className="fs-6">Separate Waiting & Treatment Area</h2>
                </div>
                <div >
                  <span>Your safety is our priority. We implemented strict isolation practices to separate COVID-19-positive and symptomatic patients from others.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* covid safe ends */}
      </div>
      {/* -------------------------------------------------- */}

      {/* {
        data && data.map(({ image, type }) => {
          return (
            <img src={"data:" + type + ";base64," + image + "="} alt="" className="w-100" />
          )
        })
      } */}
      {
        image.map((data, index) => {
          return (
            <div className="content pt-3 position-relative">
              <img src={data.image} alt="" className="w-100 " />
              <div className={index % 2 == 0 ? "w-50 d-flex justify-content-center flex-column contentright" : "w-50 d-flex justify-content-center flex-column contentleft"} >
                <div>
                  <div className="ps-5 ms-4 pt-3">
                    <h2 className={data.id == 4 ? "text-light" : "text-dark"}>{data.heading}</h2>
                  </div>
                  <div className="d-flex justify-content-center pt-2 opacity-75">
                    <div className={data.id == 4 ? "w-75 text-light" : "w-75"}>
                      <p>{data.content.p1}</p>
                      <p>{data.content.p2}</p>
                      <p>{data.content.p3}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}



export default Home;