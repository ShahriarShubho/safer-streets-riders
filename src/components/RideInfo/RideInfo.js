import React, { useContext, useState} from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import fakeData from '../fakData/fakeData.json'
import './RideInfo.css'

const RideInfo = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const {rideType} = useParams() 

    const riderName = fakeData.find(ride => ride.name ===  rideType)
    const {name, img, price} = riderName
    console.log(riderName);
    const [submit, setSubmit] = useState(false);

    const [locationName, setLocationName] = useState({})
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => setLocationName(data);

  console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div className="container">
            <h3>user name : {loggedInUser.name}</h3>
            <h5>Rider Type : {name}</h5>

    <form onSubmit={handleSubmit(onSubmit)}>

      <input name="from" defaultValue="Mirpur" placeholder="Start Location" ref={register({ required: true })} /><br/> 
      {errors.from && <span className="text-danger">From location name is required</span>}
      <br/>
      <input name="to" defaultValue="Golshan" placeholder="End Location" ref={register({ required: true })} /><br/>
      {errors.to && <span className="text-danger">To location name is required</span>}
      <br/>
      <input className="searchButton" type="submit" value="Search" onClick={() => setSubmit(!submit)}/> 
    </form>
            {submit && <div>
            <p>From : {locationName.from}</p>
            <p>To : {locationName.to}</p>
            <div className="rideInfo">
                <img src={img} alt=""/>
                <p>{name}</p>
                <p>Price : {price}</p>
            </div>
            <div className="rideInfo">
                <img src={img} alt=""/>
                <p>{name}</p>
                <p>Price : {price}</p>
            </div>
            <div className="rideInfo">
                <img src={img} alt=""/>
                <p>{name}</p>
                <p>Price : {price}</p>
            </div>
            </div>}
        </div>
    );
};

export default RideInfo;