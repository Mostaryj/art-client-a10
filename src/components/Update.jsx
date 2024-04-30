import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const loadedArt = useLoaderData();

  const { _id, item, price, rating, customization, photo } =
    loadedArt;

  const handleUpdateArt = (event) => {
    event.preventDefault();
    const form = event.target;
    const item = form.item.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const photo = form.photo.value
   

    const updatedArt = {
      item,
      price,
      rating,
      customization,
   
      photo,
    };

    console.log(updatedArt);

    //send data to server
    fetch(
      `http://localhost:5000/art${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedArt),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold">Update Name : </h2>
        <form onSubmit={handleUpdateArt}>
          {/* form name and quantity row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Item Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="item"
                  defaultValue={item}
                  placeholder="Item Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form supplier row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  placeholder="Rating"
                  defaultValue={rating}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Customization</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="customization"
                  defaultValue={customization}
                  placeholder="customization"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form category and details row */}
          {/* <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  placeholder="Details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div> */}
          {/* form Photo url row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Update Coffee"
            className="btn btn-block"
          />
        </form>
      </div>
    </div>
  );
};

export default Update;
