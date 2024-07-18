import "./Body.css";
import sid from "../assets/siddharth.jpeg";
import legend from "../assets/guy sensei.gif";
import sidbw from "../assets/siddharth-bw.jpeg";

function Body() {
  return (
    <div className="body-wrapper">
      <div className="form-section">
        <p className="title">Replace your old school forms with chatbots</p>
        <p className="sub-data">
          SkyBot is a better way to ask for information. It leads to an increase
          in customer satisfaction and retention and multiply by 3 your
          conversion rate compared to classical forms.
        </p>

        <div className="form-wrapper">
          <div className="graffiti">
            <p>Try it out!</p>
            <svg
              viewBox="0 0 120 124"
              focusable="false"
              fill="#0e0f15"
              className="bended-arrow"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M53.5 106.5C79.3333 81 78.8935 57.3316 77 49.0001C74.5 38.0001 71 22.5001 42.5 17.5001"
                stroke="white"
                strokeWidth="2"
              ></path>
              <path
                d="M55.5 87.5C56.5 91 52 108.5 52 108.5C52 108.5 61.7329 102.589 66.5 101C68 100.5 72 100 74.5 101"
                stroke="white"
                strokeWidth="2"
              ></path>
            </svg>
          </div>
          <div className="form">
            <svg
              viewBox="0 0 150 150"
              focusable="false"
              className="red-cross"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="150"
                height="150"
                rx="75"
                fill="#F87171"
                fillOpacity="0.8"
              ></rect>
              <path
                d="M100 50L50 100"
                stroke="white"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M50 50L100 100"
                stroke="white"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <div className="form1">
              <label htmlFor="name">Name</label>
              <input
                className="text-input "
                type="text" 
                id="name"
                placeholder="Enter Your Name"
              />
              <label htmlFor="name">Email</label>
              <input
                className="text-input"
                type="email"
                id="email"
                placeholder="Enter Your Email"
              />
              {/* Note: CheckBoxes */}
              <p>What services are you interested in?</p>

              <div className="checkboxes">
                <div className="label">
                  <input type="checkbox" id="Website Dev" />

                  <label htmlFor="Website Dev">Website Dev</label>
                </div>
                <div className="label">
                  <input type="checkbox" id="Application Dev" />
                  <label htmlFor="Application Dev">Application Dev</label>
                </div>
                <div className="label">
                  <input type="checkbox" id="Content Marketing" />
                  <label htmlFor="Content Marketing">Content Marketing</label>
                </div>
                <div className="label">
                  <input type="checkbox" id="ui-ux" />
                  <label htmlFor="ui-ux">UX/UI</label>
                </div>
              </div>
              <p>Additional Information</p>
              <textarea
                name="add-info"
                id="add-info"
                placeholder="Tell us more about you."
              ></textarea>
            </div>
          </div>
          <div className="form">
            <svg
              viewBox="0 0 150 175"
              focusable="false"
              className="green-tick"
              xmlns="http://www.w3.org/2000/svg"
              fillOpacity="1"
            >
              <rect width="150" height="150" rx="75"></rect>
              
              <path
                d="M100 58L65.625 92.375L50 76.75"
                stroke="white"
                strokeWidth="10"
                // fill="#40b76f"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <div className="form2  h-full  ">
              <div className="msg-container flex-row p-1 h-full ">
                <div className="msg-right flex gap-5 items-center">
                  <img
                    data-aos="fade-right"
                    data-aos-duration="600"
                    data-aos-delay="200"
                    className="sid rounded-full"
                    src={sid}
                    alt=""
                  />
                  <p
                    className="bg-msg items-end p-[0.5em]"
                    data-aos="fade-right"
                    data-aos-duration="300"
                    data-aos-delay="400"
                  >
                    Welcome to <strong>SA</strong> (Sky Agency) Feeling Excited
                    !
                  </p>
                </div>
                <div className="reply ">
                  <div className="msg-user flex gap-5 items-center justify-end ">
                    <p
                      className="bg-msg p-[0.5em] text-right "
                      data-aos="fade-left"
                      data-aos-duration="300"
                      data-aos-delay="600"
                    >
                      Ohh Yeah!
                    </p>
                    <img
                      data-aos="fade-left"
                      data-aos-duration="500"
                      data-aos-delay="800"
                      className="sid rounded-full"
                      src={sidbw}
                      alt=""
                    />
                  </div>

                  <div
                    data-aos="fade-left"
                    data-aos-duration="800"
                    data-aos-delay="1000"
                    className="gif flex gap-5"
                  >
                    <img className="bg-msg" src={legend} alt="" />
                  </div>
                  <div className="msg-user flex gap-5 items-center  ">
                  <img
                      data-aos="fade-right"
                      data-aos-duration="500"
                      data-aos-delay="1400"
                      className="sid rounded-full"
                      src={sid}
                      alt=""
                    />  
                    <p
                      className="bg-msg p-[0.5em] text-right"
                      data-aos="fade-right"
                      data-aos-duration="300"
                      data-aos-delay="1600"
                    >
                      Hell Yeah ! 🔥
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
