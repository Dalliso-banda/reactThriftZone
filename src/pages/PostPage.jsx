import { useForm } from "react-hook-form";
import UperNav from "../components/uperNav";
export default function PostPage() {
  const {register,handleSubmit,formState:{errors}}= useForm()

  const onSubmit=(data)=>alert(JSON.stringify(data))

  return (
    <>
    <UperNav/>
      <div className="d-flex justify-content-center  flex-column gap-2 align-items-center  vw-100 vh-100">
        <img className="w-25 rounded-circle " src="/test.jpg"></img>
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-4 w-100 align-items-center">
          <h3 className="text-center m-3 fw-400"> Create Post</h3>

          <div className="form-group w-75 ">
            <input  {...register('price',{
              required:true
            })}
              className="form-control w-100 p-2 rounded-4"
              type="number"
              placeholder="price"
            ></input>

            {/* these are bloody errors lol*/}
        <div className="m-1">
          {errors.price&&errors.price.type==='required'&&(<span role="alert" className="text-danger">enter price</span>)}
        </div>

          </div>
          <div className="form-group w-75">
            <input   {...register('itemName',{
              required: true
            })}

              className="form-control w-100 p-2  rounded-4"
              type="text"
              placeholder="name of clothes"
            ></input>
                     {/* these are bloody errors lol*/}
        <div className="m-1">
          {errors.itemName&&errors.itemName.type==='required'&&(<span role="alert" className="text-danger">enter price</span>)}
        </div>
          </div>
   
          <div className="form-group w-75">
     
              <input {...register('stockImg',{
                required: true
              })} accept="image/*" type="file"   className="form-control w-100 p-2  rounded-4" name="itemImg" ></input>

                 {/* these are bloody errors lol*/}
        <div className="m-1">
          {errors.stockImg&&errors.stockImg.type==='required'&&(<span role="alert" className="text-danger">enter price</span>)}
        </div>
          </div>
            <select name="category" className="form-select w-25 m-4 align-self-start"  {...register('category',{

             required: true
            })}>
               <option></option>
             <option>shirts</option>
              <option>trousers</option>
              <option>shoes</option>
             
           </select>
                  {/* these are bloody errors lol*/}
        <div className="m-1">
          {errors.category&&errors.category.type==='required'&&(<span role="alert" className="text-danger">enter price</span>)}
        </div>
          <p className="p-g-0 m-0"></p>

          <button
            style={{ background: "#487041f5" }}
            className=" btn-outline-none  bg-opacity-75  rounded-4
           shadow-lg text-white fw-bolder border-1 p-2  rounded-3 w-75"
          >
        Post
          </button>
        </form>
      </div>

      {/*     <form method="post" action="/uploadStock" enctype="multipart/form-data" >
    
           <input type="number" name="price" placeholder="enter price" required></input>
        
           <input type="text" name="itemName" placeholder="enter nameitemName"></input>
           <lable for="picture" >
               picture 
           </lable>
           <input accept="image/*" type="file" class="item-image" name="itemImg" required></input>
           <label for="type">
               type
           </label>
           <select name="category" required>
               <option></option>
             <option>shirts</option>
              <option>trousers</option>
              <option>shoes</option>
             
           </select>
           <button type="submit">
               submit
           </button>
        </form>
        */}
    </>
  );
}
