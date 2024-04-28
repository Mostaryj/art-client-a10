import { Link, useLoaderData } from "react-router-dom";
import Nav from "../pages/shared/Nav";

const AllArt = () => {
  const loadedArt = useLoaderData();
  return (
    <div>
      <Nav></Nav>
      <h1 className="lg:text-4xl text-2xl font-bold font-pop text-center mt-4">
        All Art & Craft{" "}
      </h1>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Added Art & Craft</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Action</th>
             
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {loadedArt.map((user, index) => (
              <tr key={loadedArt._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.item}</td>
                <td>{user.price}</td>
                <td>{user.rating}</td>
                <td>
                  <Link to={`/details/${user._id}`}>
                  <button className="btn bg-blue-800 text-white">View Details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArt;
