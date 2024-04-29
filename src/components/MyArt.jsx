import Nav from "../pages/shared/Nav";
import useAuth from "../Hook/useAuth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyArt = () => {
  const [crafts, setCrafts] = useState([]); 
  const [filteredCrafts, setFilteredCrafts] = useState([]);
  const { user } = useAuth() || {};

  const handleFilter = (e) => {
    const selectedValue = e.target.value; 

    const newFilteredCrafts = crafts.filter(
      (craft) => craft.customization === selectedValue
    );
    setFilteredCrafts(newFilteredCrafts);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/art-email/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCrafts(data);
        setFilteredCrafts(data);
      }) 
      .catch((err) => console.log(err.message));
  }, [user]);

  return (
    <div>
      <Nav></Nav>
      <div className="card card-side bg-base-100 shadow-xl grid grid-cols-1 mt-16">
        <div className="flex items-center justify-center gap-4 mb-6">
          <span>Customization filter:</span>
          <select
            name="sort"
            onChange={handleFilter}
            className="border min-w-0 px-4 py-2 rounded-md bg-gray-200"
            defaultValue={""}
          >
            <option value="" disabled>
              Select Customization
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
          filteredCrafts.map((craft) => (
            <div key={craft._id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={craft.photo} alt={craft.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold">Item Name: {craft.item}</h2>
                <p className="text-gray-700">Price: {craft.price}</p>
                <p>Rating: {craft.rating}</p>
                <p>Customization: {craft.customization}</p>
                <p>Stock Status: {craft.stock}</p>
              </div>
              <div>
                <Link to='/update/:id'>
                <button className="btn bg-green-600 text-white">Update</button>
                </Link>

                <button className="btn text-white bg-orange-600">Delete</button>

              </div>
            </div>

          ))}
        </div>


      
        
      </div>
    </div>
  );
};

export default MyArt;


