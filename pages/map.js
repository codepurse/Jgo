import React, { Component } from "react";
import Layout from "../components/mapLayout";
import Googlemap from "../components/try";
import '../components/config';


export class map extends Component {
  constructor(props) {
    super(props);
    this.clickBox = this.clickBox.bind(this);
  }
  clickBox() {

  }


  render() {
    return (
      <Layout>
        <div className="container-fluid conMap h-100">
          <div className="navbarMaps">
            <div className="form-inline">
              <img
                src="Image/JGO logo.png"
                className="img-fluid"
                style={{ width: "100px" }}
              ></img>
              <div className="divNavs">
                <p className="navText">HOME</p>
                <p className="navText" style={{ color: "#CF511F" }}>
                  DELIVER
                </p>
                <p className="navText">CONTACT</p>
                <p className="navText">LOG-IN</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center h-100">
            <div className="col-lg-6 colLeft">
              <p className="pPick">
                {" "}
                <img
                  src="Image/mapgps.svg"
                  className="img-fluid"
                  style={{ marginRight: "10px" }}
                ></img>{" "}
                Pick Up Location
              </p>
              <p className="pPick-up">
              {global.config.place.deliver.pickoff}
              </p>
              <p className="pPick" style={{ marginTop: "30px" }}>
                {" "}
                <img
                  src="Image/mapgps.svg"
                  className="img-fluid"
                  style={{ marginRight: "10px" }}
                ></img>
                Drop Off Location
              </p>
              <p className="pDrop-off">
              {global.config.place.deliver.dropoff}
              </p>
              <p className="pNote">Note: Delivery only within Metro Manila</p>
              <div className="divCategory">
                <p className="pPick" style={{ fontSize: "1rem" }}>
                  Category
                </p>
                <div className="row">
                  <div className="col">
                    <div
                      className="boxCategory align-items-center d-flex justify-content-center"
                      onClick={this.clickBox}
                    >
                      <div>
                        <img
                          src="Image/001-file.svg"
                          className="img-fluid mx-auto d-flex imgCategory"
                        ></img>
                        <p className="pBoxCategory">DOCUMENT</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="boxCategory align-items-center d-flex justify-content-center"
                      onClick={this.clickBox}
                    >
                      <div>
                        <img
                          src="Image/002-pizza.svg"
                          className="img-fluid mx-auto d-flex imgCategory"
                        ></img>
                        <p className="pBoxCategory">FOOD</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="boxCategory align-items-center d-flex justify-content-center">
                      <div>
                        <img
                          src="Image/clothing.svg"
                          className="img-fluid mx-auto d-flex imgCategory"
                        ></img>
                        <p className="pBoxCategory">CLOTHING</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="boxCategory align-items-center d-flex justify-content-center">
                      <div>
                        <img
                          src="Image/medical.svg"
                          className="img-fluid mx-auto d-flex imgCategory"
                        ></img>
                        <p className="pBoxCategory">MEDICAL</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="boxCategory align-items-center d-flex justify-content-center">
                      <div>
                        <img
                          src="Image/001-file.svg"
                          className="img-fluid mx-auto d-flex imgCategory"
                        ></img>
                        <p className="pBoxCategory">FRAGILE</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="boxCategory align-items-center d-flex justify-content-center">
                      <div>
                        <img
                          src="Image/other.svg"
                          className="img-fluid mx-auto d-flex imgCategory"
                        ></img>
                        <p className="pBoxCategory">OTHERS</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12">
                    <p className="pNote">Note: MAXIMUM WEIGHT IS 10kg</p>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "30px" }}>
                  <div className="col-lg-12">
                    <p className="pAdditional">Additional Services</p>
                  </div>
                  <div className="col-lg-3">
                    <div className="boxAdditional">
                      <p className="pAdditonalBox">Insulated Box</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="boxAdditional">
                      <p className="pAdditonalBox">Cash Handling</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="boxAdditional">
                      <p className="pAdditonalBox">Queueing Service</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="boxAdditional">
                      <p className="pAdditonalBox">Pabili Service</p>
                    </div>
                  </div>
                </div>
                <div
                  clasName="row"
                  style={{ marginTop: "20px", padding: "0px" }}
                >
                  <div className="col-lg-6" style={{ paddingLeft: "0px;" }}>
                    <div className="form-inline">
                      <img
                        src="Image/mastercard.svg"
                        className="img-fluid"
                        style={{ width: "50px" }}
                      ></img>
                      <p className="pCardNumber">Mastercard 8278</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
           <Googlemap></Googlemap>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default map;
