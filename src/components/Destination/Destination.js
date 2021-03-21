import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import fakeData from "../fakData/fakeData.json";
import { PeopleFill, GeoAlt, GeoFill, Calendar3 } from "react-bootstrap-icons";
import GoogleMap from "../GoogleMap/GoogleMap";
import { useParams } from "react-router";
import "./Destination.css";

const Destination = () => {
  const [loggedInUser] = useContext(UserContext);

  const { rideType } = useParams();

  const riderName =
    fakeData.find((ride) => ride.name === rideType) ||
    fakeData.find((ride) => ride.name === "Bike");

  const { name, img, price, seat } = riderName;

  const [submit, setSubmit] = useState(false);

  const [locationName, setLocationName] = useState({});

  const handleChange = (event) => {
    const newLocation = { ...locationName };
    newLocation[event.target.name] = event.target.value;
    setLocationName(newLocation);
  };
  const handleSubmit = (event) => {
    setSubmit(!submit);
    event.preventDefault();
  };
  return (
    <div className="row">
      <div className="col-lg-3 col-md-4 col-sm-6 m-auto">
        <h4 className="text-success">User Name : {loggedInUser.name}</h4>
        <h5>Riders Type : {name}</h5>

        {!submit && (
          <form onSubmit={handleSubmit}>
            <strong>
              <GeoAlt color="royalblue" size={22} />
              Pick From :{" "}
            </strong>
            <input
              className="w-100 rounded border-primary p-1 mb-3"
              type="text"
              name="from"
              placeholder="Start location"
              required
              onChange={handleChange}
            />

            <strong>
              <GeoAlt color="royalblue" size={22} />
              Pick To :{" "}
            </strong>
            <input
              className="w-100 rounded border-primary p-1 mb-3"
              type="text"
              name="to"
              placeholder="End location"
              required
              onChange={handleChange}
            />

            <strong>Travel Date : </strong>
            <input
              type="date"
              className="w-100 rounded border-primary p-1 mb-3"
              name="date"
              required
              onChange={handleChange}
            ></input>

            <input className="searchButton" type="submit" value="Search" />
          </form>
        )}

        {submit && (
          <div className="searchResult">
            <h4 className="my-2">
              <GeoFill color="royalblue" size={35} />
              From : {locationName.from}
            </h4>

            <h4 className="my-2">
              <GeoFill color="royalblue" size={35} />
              To : {locationName.to}
            </h4>

            <h5 className="my-2">
              <Calendar3 color="royalblue" size={27} />
              Date : {locationName.date}
            </h5>
            <div className="rideInfo">
              <img src={img} alt="" />
              <p>{name}</p>
              <p>
                <PeopleFill color="royalblue" size={20} /> {seat}
              </p>
              <p>${price}</p>
            </div>

            <div className="rideInfo">
              <img src={img} alt="" />
              <p>{name}</p>
              <p>
                <PeopleFill color="royalblue" size={20} /> {seat}
              </p>
              <p>${price}</p>
            </div>

            <div className="rideInfo">
              <img src={img} alt="" />
              <p>{name}</p>
              <p>
                <PeopleFill color="royalblue" size={20} /> {seat}
              </p>
              <p>${price}</p>
            </div>
          </div>
        )}
      </div>

      <div className="col-lg-8 col-md-7 col-sm-6">
        <GoogleMap />
      </div>
    </div>
  );
};

export default Destination;
