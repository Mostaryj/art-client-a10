import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Nav from "../pages/shared/Nav";

const Update = () => {
  const art = useLoaderData();

  const { _id, item, sub, description, price, rating, customization, photo ,time, stock} =
    art;

   

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo =  form.photo.value ;
    const item = form.item.value;
    const sub = form.sub.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const time = form.time.value;
    const stock = form.stock.value;
   

    const updatedArt = {
      photo,
      item,
      sub,
      description,
      price,
      rating,
      customization,
      time,
      stock,
     
    };

    console.log(updatedArt);

    //send data to server
    fetch(
      `http://localhost:5000/art/${_id}`, {
       
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
            text: " Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          })
        }
      })
  };

  return (
    <div>
      <Nav></Nav>
      <div className="bg-slate-300 md:p-24 p-2">
        <h2 className="md:text-3xl font-pop text-center font-extrabold">
          Update Your Art & Craft
        </h2>
        <form onSubmit={handleUpdate}>
          {/* photo url */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                  defaultValue={photo}
                />
                 
              </label>
            </div>
          </div>
          {/* form item name and subcategory name */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Item Name</span>
              </label>
              <select name='item' defaultValue={item} className="select text-gray-400" >
                <option disabled selected>Select Category</option>

                <option >Landscape Painting</option>
                <option >Portrait Drawing</option>
                <option >Watercolour Painting</option>
                <option >Oil Painting</option>
                <option>Charcoal Sketching</option>
                <option >Cartoon Drawing</option>


              </select>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Sub-Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="sub"
                  placeholder="Sub-Category"
                  className="input input-bordered w-full"
                  defaultValue={sub}
                />
                 
              </label>
            </div>
          </div>
          {/* form description and price row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="description"
                  className="input input-bordered w-full"
                  defaultValue={description}
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
                  placeholder="price"
                  className="input input-bordered w-full"
                  defaultValue={price}
                />
              </label>
            </div>
          </div>
          {/* form rating and customization row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  placeholder="rating"
                  className="input input-bordered w-full"
                 defaultValue={rating}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
           
              <label className="label">
                <span className="label-text">Customization</span>
              </label>
              <select name="customization" 
              defaultValue={customization} className="select text-gray-400">
                <option  disabled selected>
                  Select One
                </option>

                <option>Yes</option>
                <option >No</option>
              </select>
            </div>
          </div>
          {/* form processing time and stock status */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Processing Time</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="time"
                  placeholder="time"
                  className="input input-bordered w-full"
                  defaultValue={time}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
           
                 <label className="label">
                <span className="label-text">Stock Status</span>
              </label>
              <select name="stock" defaultValue={stock} className="select text-gray-400">
                <option  disabled selected>
                  Select One
                </option>

                <option>Made-to-Order</option>
                <option>In Stock</option>
              </select>
            </div>
          </div>
          {/* form name, email */}
          {/* <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered w-full"
                  defaultValue={name}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered w-full"
                  readOnly
                />
              </label>
            </div>
          </div> */}

          <input
            type="submit"
            value="Update"
            className="btn btn-block bg-blue-800 text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default Update;
