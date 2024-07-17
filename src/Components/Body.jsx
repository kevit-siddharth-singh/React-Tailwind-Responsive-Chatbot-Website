import "./Body.css";

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
                <input type="checkbox" id="Website Dev" />
                <label htmlFor="Website Dev">Website Dev</label>
              </div>
              <div className="label">
                <input type="checkbox" id="Website Dev" />
                <label htmlFor="Website Dev">Website Dev</label>
              </div>
              <div className="label">
                <input type="checkbox" id="Website Dev" />
                <label htmlFor="Website Dev">Website Dev</label>
              </div>
              </div>



            </div>
          </div>
          <div className="form">
            <svg
              viewBox="0 0 150 150"
              focusable="false"
              className="green-tick"
              xmlns="http://www.w3.org/2000/svg"
              fillOpacity="0.8"
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
            <div className="form2">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter Your Name" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
