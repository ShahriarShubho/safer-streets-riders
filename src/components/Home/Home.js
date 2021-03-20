import React from 'react';
import CardData from '../CardData/CardData';
import fakeData from '../fakData/fakeData.json'
import './Home.css'

const Home = () => {
   
    return (
        <section className="homeStyle">
            <h1 className="text-center text-info m-5">Choose Your Rides Type</h1>
            <div className="row">
            {fakeData.map(data =><CardData cardData={data} key={data.id}></CardData>)}
        </div>
        </section>
    );
};

export default Home;