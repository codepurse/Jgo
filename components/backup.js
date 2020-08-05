import React, { Component } from "react";
import { useState } from "react";
import Layout from "../components/Layout";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import PlacesAutocomplete from "react-places-autocomplete";
import Link from "next/link";
import Map from "./map";
import "../components/config";

const searchOptions = {
  componentRestrictions: { country: ["ph"] },
};

export class index extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };
    this.state = { value1: "" };
    this.clickBox = this.clickBox.bind(this);
  }

  handleChange = (value) => {
    this.setState({ value });
    geocodeByAddress(this.state.value)
      .then((results) => getLatLng(results[0]))
      .then(
        ({ lat, lng }) => (global.config.place.deliver.pickoff = { lat }),
        console.log(global.config.place.deliver.dropoff)
      );
  };

  handleChange1 = (value1) => {
    this.setState({ value1 });
    geocodeByAddress(this.state.value)
      .then((results) => getLatLng(results[0]))
      .then(
        ({ lat, lng }) => (global.config.place.deliver.dropoff = { lat }),
        console.log(global.config.place.deliver.dropoff)
      );
  };

  clickBox() {}

  render() {
    return (
      <div class="container-fluid mainCon">
        <Layout>
          <div class="container-fluid h-100">
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-lg-6"></div>
                <div className="col-lg-6">
                  <p className="pTitle">Book your delivery now!</p>
                  <div className="box">
                    <PlacesAutocomplete
                      value={this.state.value}
                      onChange={this.handleChange}
                      onSelect={this.handleSelect}
                      searchOptions={searchOptions}
                    >
                      {({
                        getInputProps,
                        suggestions,
                        getSuggestionItemProps,
                        loading,
                      }) => (
                        <div>
                          <input
                            {...getInputProps({
                              placeholder: "Pick-up location",
                              className: "location-search-input",
                            })}
                          />
                          <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion) => {
                              const className = suggestion.active
                                ? "suggestion-item--active"
                                : "suggestion-item";
                              // inline style for demonstration purpose
                              const style = suggestion.active
                                ? {
                                    backgroundColor: "#fafafa",
                                    cursor: "pointer",
                                  }
                                : {
                                    backgroundColor: "#ffffff",
                                    cursor: "pointer",
                                  };
                              return (
                                <div
                                  {...getSuggestionItemProps(suggestion, {
                                    className: "input-suggestion",
                                    style,
                                  })}
                                >
                                  <span>{suggestion.description}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </PlacesAutocomplete>
                    <PlacesAutocomplete
                      value={this.state.value1}
                      onChange={this.handleChange1}
                      onSelect={this.handleSelect1}
                      searchOptions={searchOptions}
                    >
                      {({
                        getInputProps,
                        suggestions,
                        getSuggestionItemProps,
                        loading,
                      }) => (
                        <div>
                          <input
                            {...getInputProps({
                              placeholder: "Pick-up location",
                              className: "location-search-input",
                            })}
                          />
                          <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion) => {
                              const className = suggestion.active
                                ? "suggestion-item--active"
                                : "suggestion-item";
                              // inline style for demonstration purpose
                              const style = suggestion.active
                                ? {
                                    backgroundColor: "#fafafa",
                                    cursor: "pointer",
                                  }
                                : {
                                    backgroundColor: "#ffffff",
                                    cursor: "pointer",
                                  };
                              return (
                                <div
                                  {...getSuggestionItemProps(suggestion, {
                                    className: "input-suggestion",
                                    style,
                                  })}
                                >
                                  <span>{suggestion.description}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </PlacesAutocomplete>
                  </div>
                  <Link href="/map">
                    <input
                      type="button"
                      className="btnSubmit"
                      value="SUBMIT"
                      onClick={this.clickBox}
                    ></input>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default index;
