import React from 'react'

const EmployeeSignUp = () => {
  return (
    <section className="form_1 pt-120 pb-120">
      <div className="container px-xl-0">
        <form
          action="form-handler.php"
          method="post"
          className="bg-light mx-auto mw-430 radius10 pt-40 px-50 pb-30"
        >
          <h2
            className="mb-40 small text-center aos-init aos-animate"
            data-aos-duration="600"
            data-aos="fade-down"
            data-aos-delay="0"
          >
            Sign Up Now
          </h2>
          <div
            className="mb-20 input_holder aos-init aos-animate"
            data-aos-duration="600"
            data-aos="fade-down"
            data-aos-delay="150"
          >
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="input border-gray focus-action-1 color-heading placeholder-heading w-full"
            />
          </div>
          <div
            className="mb-20 input_holder aos-init aos-animate"
            data-aos-duration="600"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <input
              type="password"
              name="password"
              placeholder="Your password"
              className="input border-gray focus-action-1 color-heading placeholder-heading w-full"
            />
          </div>
          <div
            data-aos-duration="600"
            data-aos="fade-down"
            data-aos-delay="450"
            className="aos-init aos-animate"
          >
            /
            <input
              type="checkbox"
              name="rules"
              className="d-none border-gray focus-action-1"
              id="form_1_checkbox"
              checked=""
            />
            <label for="form_1_checkbox" className="mt-25 color-heading w-full">
              I agree to the Terms of Service
            </label>
          </div>
          <div
            data-aos-duration="600"
            data-aos="fade-down"
            data-aos-delay="600"
            className="aos-init aos-animate"
          >
            <button className="mt-25 btn action-1 w-full">Create an Account</button>
          </div>
          <div
            className="mt-50 hr bg-gray h-1 aos-init aos-animate"
            data-aos-duration="600"
            data-aos="fade-down"
            data-aos-delay="750"
          ></div>
          <div
            className="mt-25 f-18 medium color-heading text-center aos-init aos-animate"
            data-aos-duration="600"
            data-aos="fade-down"
            data-aos-delay="900"
          >
            Do you have an Account?{" "}
            <a href="#" className="link action-1">
              Sign In
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EmployeeSignUp