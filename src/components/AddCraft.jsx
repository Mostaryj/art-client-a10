import Swal from "sweetalert2";
import Nav from "../pages/shared/Nav";






const AddCraft = () => {


    const handleAddCraft = event =>{
      event.preventDefault();
     const form = event.target;
     const photo = form.photo.value;
     const item = form.item.value;
     const sub = form.sub.value;
     const description = form.description.value;
     const price = form.price.value;
     const rating = form.rating.value;
     const customization  = form.customization.value;
     const time = form.time.value;
     const stock = form.stock.value;
     const name = form.name.value;
     const email = form.email.value;


     const newArt = {photo, item, sub, description, price, rating, customization, time, stock, name, email}

     console.log(newArt);

     //send data to server
     fetch('http://localhost:5000/art',{
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newArt)
     })
     .then(res => res.json())
     .then(data => {
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Art & Craft Added Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
  
     })
    

    }
    
  return (
    <div>
      <Nav></Nav>
      <div className="bg-slate-300 p-24">
        <h2 className="text-3xl font-pop text-center font-extrabold">
          Add Craft Item
        </h2>
        <form onSubmit={handleAddCraft}>
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
              <label className="input-group">
                <input
                  type="text"
                  name="item"
                  placeholder="Item Name"
                  className="input input-bordered w-full"
                />
              </label>
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
                  placeholder="customization"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form processing time and stock stactus */}
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
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Stock Status</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="stock"
                  placeholder="stock"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form name, email */}
          <div className="md:flex mb-8">
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
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Add Craft Item"
            className="btn btn-block bg-blue-800 text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCraft;
