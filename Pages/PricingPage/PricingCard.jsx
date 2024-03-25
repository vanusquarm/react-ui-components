import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap.min.css";
import { useState } from "react";

function PricingCard({ 
  title,
  description,
  price,
  period,
  details,
  btnState,
  setBtnState,
  featureList,
  disabledFeatureList
}) {
  title = title || "Free";
  description =
    description || "Lorem ipsum dolor sit amet, consect etur adipiscing maror.";
  price = price || "$0";
  period = period || "/mo";
  details = details || "No credit card required";
  [btnState, setBtnState] = useState(false);
  featureList = featureList || ["Lorem ipsum", "Lorem ipsum"];
  disabledFeatureList = disabledFeatureList || ["Lorem ipsum"];

  return (

    <div className="col-12 col-md-6 col-xl-3 position-relative">
        <div
            className="d-none d-md-block position-absolute end-0 top-0 bg-primary-light bg-opacity-75 h-100"
            style={{ width: "1px" }}
        ></div>
        <div
            className="d-xl-none position-absolute end-0 bottom-0 bg-primary-light bg-opacity-75 w-100"
            style={{ height: "1px" }}
        ></div>
        <div className="position-relative">
            <div className="mw-md mx-auto pt-8 pb-10 px-8">
            <h6
                className="fs-9 text-primary text-uppercase mb-3"
                data-config-id="auto-txt-6-5"
            >
                {title}
            </h6>
            <p className="text-secondary mb-6" data-config-id="auto-txt-7-5">
                {description}
            </p>
            <h4 className="fs-5">
                <span data-config-id="auto-txt-8-5">{price}</span>
                <span
                className="inline-block ms-1 text-secondary-light"
                data-config-id="auto-txt-9-5"
                >
                {period}
                </span>
            </h4>
            <span
                className="d-block mb-8 fs-9 text-secondary"
                data-config-id="auto-txt-10-5"
            >
                {details}
            </span>
            <a
                className={
                btnState
                    ? "btn mb-8 w-100 btn-primary fw-medium"
                    : "btn mb-8 w-100 btn-outline-light-dark text-dark fw-medium"
                }
                href="#"
                data-config-id="auto-txt-11-5"
                onClick={setBtnState}
            >
                Get Started Now
            </a>
            <ul className="list-unstyled mb-0">
                {featureList.map((item, key) => (
                <li className="mb-4" key={key}>
                    <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-config-id="auto-svg-1-5"
                    >
                    <path
                        d="M1.16699 6.83325L4.50033 10.1666L12.8337 1.83325"
                        stroke="#4F46E5"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                    </svg>
                    <span
                    className="ms-2 fw-semibold"
                    data-config-id="auto-txt-12-5"
                    >
                    {item}
                    </span>
                </li>
                ))}
                {disabledFeatureList.map((item, key) => (
                <li className="mb-4" key={key}>
                    <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-config-id="auto-svg-5-5"
                    >
                    <path
                        d="M1.16699 6.83325L4.50033 10.1666L12.8337 1.83325"
                        stroke="#CBD5E1"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                    </svg>
                    <span
                    className="ms-2 fw-semibold text-secondary-light"
                    data-config-id="auto-txt-16-5"
                    >
                    {item}
                    </span>
                </li>
                ))}
            </ul>
            </div>
        </div>
    </div>

  );
}

export default PricingCard;
