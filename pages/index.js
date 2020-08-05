import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import "../components/config";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";




export default function App() {
  function clickSubmit() {
    global.config.place.deliver.pickoff = address;
    global.config.place.deliver.dropoff = addressDrop;

    global.config.place.deliver.pickofflat = coordinates.lat;
    global.config.place.deliver.pickofflang = coordinates.lng;

    global.config.place.deliver.dropofflat = coordinatesDrop.lat;
    global.config.place.deliver.dropofflang = coordinatesDrop.lng;
  }

  const searchOptions = {
    componentRestrictions: { country: ["ph"] },
  };
  

  const [address,  setAddress] = React.useState("");
  const [ addressDrop, setAddressDrop] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });
  const [coordinatesDrop, setCoordinatesDrop] = React.useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

    const handleSelectDrop = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddressDrop(value);
    setCoordinatesDrop(latLng);
  };

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
                    value={address}
                    onChange={setAddress}
                    onSelect={handleSelect}
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
                            placeholder: "Type address",
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
                    value={addressDrop}
                    onChange={setAddressDrop}
                    onSelect={handleSelectDrop}
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
                            placeholder: "Type address",
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
                    onClick={clickSubmit()}
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
