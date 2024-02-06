import { Link } from "react-router-dom";

const VoluntaryCard = ({ volunteer }) => {
    const { voluntaryName, imgUrl } = volunteer
    return (
        <Link to="/" className=" hover:translate-y-2 duration-500">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className="w-full h-full" src={imgUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{voluntaryName}</h2>
                </div>
            </div>
        </Link>

    );
};

export default VoluntaryCard;