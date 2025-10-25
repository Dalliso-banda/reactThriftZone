import test from '../../public/test.jpg'
import { Link } from 'react-router-dom';
import '../App.css'
import { useForm } from 'react-hook-form';


export default function SignUpPage() {


  const {register,handleSubmit,formState:{errors}}=useForm()


  const onSubmit= async (data)=>alert(data);



  
  return (
    <>
      <div className="d-flex justify-content-center  flex-column gap-2 align-items-center  vw-100 vh-100">
        <img  className='w-25 rounded-circle 'src={test}></img>
        <form  onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-4 w-100 align-items-center">
          <h3 className="text-center fw-400"> welcome to ThriftZone</h3>
        
          <div className="form-group w-75 ">
            <input {...register('businessName',{
               required: true,
            })}
              className="form-control w-100 p-2 rounded-4"
              type="text"
              placeholder="Name of Business"
            ></input>
            {/* this is the part where the bloody  */}
            <div   className='m-1'>
              {errors.businessName&&errors.businessName.type==='required'(<span className='text-danger'>enter business name</span>)}
            </div>
          </div>
          <div className="form-group w-75">
            <input
              className="form-control w-100 p-2  rounded-4"
              type="text"
              placeholder="operating location"
            ></input>
          {/* this is the part where the bloody  */}
            <div   className='m-1'>
              {errors.businessName&&errors.businessName.type==='required'(<span className='text-danger'>enter business name</span>)}
            </div>
          </div>
            <div className="form-group w-75">
            <input   {...register('number',{
              required: true,
              minLength:10,
              maxLength:10
            })}
              className="form-control w-100 p-2  rounded-4"
              type="number"
              placeholder="phone number"
            ></input>
                  {/* this is the part where the bloody  */}
            <div   className='m-1'>
              {errors.number&&errors.number.type==='required'(<span className='text-danger'>enter phone number</span>)}
          {errors.number&&errors.number.type==='maxLength'(<span className='text-danger'>enter valid phone number</span>)}
          {errors.number&&errors.number.type==='minLength'(<span className='text-danger'>enter valid phone number</span>)}
            </div>
          </div>
            <div className="form-group w-75">
            <input  {...register('password',{
              required: true,
              minLength: 8
            })}
            
              className="form-control w-100 p-2  rounded-4"
              type="password"
              placeholder="create password"
            ></input>
                   {/* this is the part where the bloody  */}
      
            <div   className='m-1'>
              {errors.number&&errors.number.type==='required'(<span className='text-danger'>enter  password</span>)}
       
          {errors.number&&errors.number.type==='minLength'(<span className='text-danger'>password must be 8 characters or more</span>)}
            </div>
          </div>
        <p className='p-g-0 m-0' >
    
        </p>

               <button  style={{background:'#487041f5'}} className=" btn-outline-none  bg-opacity-75  rounded-4
           shadow-lg text-white fw-bolder border-1 p-2  rounded-3 w-75"> 
                SignUp
          </button>
        

        </form>

       <Link to={'/signup'} className='text-dark nav-link '>
        <p className='footer m-5 custom-dim-text '>share us </p>
        </Link>


      </div>
    </>
  );
}
