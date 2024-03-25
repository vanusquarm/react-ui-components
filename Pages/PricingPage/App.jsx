import logo from './logo.svg';
import PricingCard from './PricingCard';
import 'bootstrap/dist/css/bootstrap.min.css'
import './bootstrap.min.css'

function App() {
  return (
    <div className="">
      <section
        id="pricing"
        data-section-id="4"
        data-share=""
        data-category="pricing"
        data-component-id="3ccf8f54_05_awz"
        className="position-relative py-12 py-sm-24 bg-info-light overflow-hidden"
      >
        <div className="container position-relative">
          <div className="mw-md mx-auto mw-md-3xl mw-xl-none mb-24">
            <div className="row justify-content-between align-items-end">
              <div className="col-12 col-xl-8 mb-8 mb-xl-0">
                <h2 className="mb-6" data-config-id="auto-txt-1-5">
                  Try Snapbrillia, Grow Fast
                </h2>
                <p className="mw-md fs-7 mb-0" data-config-id="auto-txt-2-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elemen tum.
                </p>
              </div>
              <div className="col-12 col-xl-4">
                <div className="d-flex align-items-center justify-content-xl-end">
                  <span
                    className="text-secondary-dark"
                    data-config-id="auto-txt-3-5"
                  >
                    Monthly
                  </span>
                  <div className="position-relative mx-3 d-inline-flex align-items-center p-1 bg-primary rounded-pill">
                    <label className="switch">
                      <input
                        className="position-absolute top-0 start-0 w-100 z-10 opacity-0"
                        type="checkbox"
                        data-config-id="auto-input-2-5"
                      />
                    </label>
                    <div
                      className="d-inline-block bg-transparent rounded-pill"
                      style={{ width: "15px", height: "15px" }}
                    ></div>
                    <div
                      className="d-inline-block bg-white rounded-pill"
                      style={{ width: "15px", height: "15px" }}
                    ></div>
                  </div>
                  <span
                    className="text-secondary-dark"
                    data-config-id="auto-txt-4-5"
                  >
                    Yearly
                  </span>
                  <span
                    className="ms-1 fw-semibold text-primary"
                    data-config-id="auto-txt-5-5"
                  >
                    (Save 25%)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="position-relative mw-md mw-md-3xl mw-xl-none mx-auto rounded-4 bg-white border border-primary-light border-opacity-25 overflow-hidden">
            <img
              className="position-absolute top-50 start-50 translate-middle"
              src="./snap-home_files/gradient6.svg"
              alt=""
              data-config-id="auto-img-1-5"
            />
            <div className="row position-relative">
              <PricingCard btnState={true} />
              <PricingCard price={"$10"} title={"Enterprise"} />
              <PricingCard />
              <PricingCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
