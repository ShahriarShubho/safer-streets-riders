import React, { useContext, useState} from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import fakeData from '../fakData/fakeData.json'
import { PeopleFill, GeoAlt } from 'react-bootstrap-icons';
import GoogleMap from '../GoogleMap/GoogleMap';


const Destination = () => {
    const [loggedInUser] = useContext(UserContext)

    const riderName = fakeData.find(ride => ride.name ===  "Bike")
    const {name, img, price, seat} = riderName;
  
    const [submit, setSubmit] = useState(false);

    const [locationName, setLocationName] = useState({})

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => setLocationName(data);

    const handleSearch = () => {
        setSubmit(true)
    }
    return (
        <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 m-auto">
            <h3>User Name : {loggedInUser.name}</h3>
            <h5>Riders Type : {name}</h5>

    <form onSubmit={handleSubmit(onSubmit)}>

      <input className="w-100 rounded border-primary p-1 my-3" name="from" defaultValue="Mirpur" placeholder="Start Location" ref={register({ required: true })} /><br/> 
      {errors.from && <span className="text-danger">From location name is required</span>}
      
      <input className="w-100 rounded border-primary p-1 my-3" name="to" defaultValue="Golshan" placeholder="End Location" ref={register({ required: true })} /><br/>
      {errors.to && <span className="text-danger">To location name is required</span>}

      <input className="searchButton" type="submit" value="Search" onClick={() => handleSearch(submit)}/> 
    </form>
            {submit && <div className="searchResult">
            <h4 className="my-2"><GeoAlt color="royalblue" size={35} />From : {locationName.from}</h4>
            <h4 className="my-2"><GeoAlt color="royalblue" size={35} />To : {locationName.to}</h4>

            <div className="rideInfo">
                <img src={img} alt=""/>
                <p>{name}</p>
                <p><PeopleFill color="royalblue" size={20} />  {seat}</p>
                <p>${price}</p>
            </div>

            <div className="rideInfo">
                <img src={img} alt=""/>
                <p>{name}</p>
                <p><PeopleFill color="royalblue" size={20} />  {seat}</p>
                <p>${price}</p>
            </div>

            <div className="rideInfo">
                <img src={img} alt=""/>
                <p>{name}</p>
                <p><PeopleFill color="royalblue" size={20} />  {seat}</p>
                <p>${price}</p>
            </div>
            
            </div>}
            </div>
            <div className="col-lg-8 col-md-7 col-sm-6" >
               <GoogleMap/> 
            </div>
        </div>
    );
};

export default Destination;
