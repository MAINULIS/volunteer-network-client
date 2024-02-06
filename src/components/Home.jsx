import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import VoluntaryCard from "./Common/VoluntaryCard";

const Home = () => {
    const volunteersData = useLoaderData();
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value); 
    };

    const handleSearch = () => {
        // console.log(inputValue)
        setInputValue('')
    }
    return (
        <div className="m-5">
            <div className=" text-center pb-8">
                <h3 className="text-3xl pb-4 text-black font-semibold">I GROW BY HELPING PEOPLE IN NEED.</h3>
                <label htmlFor="" >
                    <input type="text" value={inputValue} onChange={handleInputChange} name="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    <button  onClick={handleSearch} className="ms-4 text-neutral-800 font-semibold">Search</button>
                </label>
            </div>
        <div className="grid md:grid-cols-3 gap-4">
            {
                volunteersData.map(volunteer => <VoluntaryCard
                key={volunteer._id}
                volunteer ={volunteer}
                >
                </VoluntaryCard>)
            }
        </div>
        </div>
    );
};

export default Home;