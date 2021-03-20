import React, { useContext, useState} from 'react';
import { useForm } from 'react-hook-form';
// import { useParams } from 'react-router';
import { UserContext } from '../../App';
import fakeData from '../fakData/fakeData.json'


const Destination = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    // const {rideType} = useParams() 

    const riderName = fakeData.find(ride => ride.name ===  "Bike")
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

      <input name="from" placeholder="Start Location" ref={register({ required: true })} /><br/> 
      {errors.from && <span className="text-danger">From location name is required</span>}
      <br/>
      <input name="to" placeholder="End Location" ref={register({ required: true })} /><br/>
      {errors.to && <span className="text-danger">To location name is required</span>}
      <br/>
      <input type="submit" value="Search" onClick={() => setSubmit(!submit)}/> 
    </form>
            {submit && <div>
            <p>From : {locationName.from}</p>
            <p>To : {locationName.to}</p>
            <div className="">
                <img src={img} alt=""/>
                <p>{name}</p>
                <p>Price : {price}</p>
            </div>
            <div className="">
                <img src={img} alt=""/>
                <p>{name}</p>
                <p>Price : {price}</p>
            </div>
            <div className="">
                <img src={img} alt=""/>
                <p>{name}</p>
                <p>Price : {price}</p>
            </div>
            </div>}
        </div>
    );
};

export default Destination;