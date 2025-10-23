import test from '../../public/test.jpg'
import { Link } from 'react-router-dom';
import '../App.css'
import { useForm } from 'react-hook-form';

export default function LoginPage() {



  const {register,handleSubmit,formState:erros}= useForm()
   




const onSubmit =(data)=>alert(JSON.stringify(data))

  return (
    <>
      <div className="d-flex justify-content-center  flex-column gap-[] align-items-center  vw-100 vh-100">
        <img  className='w-25 rounded-circle 'src={test}></img>
        <form className="d-flex flex-column gap-4 w-100 align-items-center" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-center fw-400"> welcome to ThriftZone</h3>
        
          <div className="form-group w-75 ">
            <input  {...register('phone number')}
              className="form-control w-100 p-2 rounded-4"
              type="text"
              placeholder="phone number"
            ></input>
            
          </div>
          <div className="form-group w-75">
            <input    {...register('password',)}
              className="form-control w-100 p-2  rounded-4"
              type="password"
              placeholder="password"
            ></input>

          </div>
        <p className='p-g-0 m-0' >
    
        </p>
          <button  style={{background:'#487041f5'}} type='submit'className=" btn-outline-none  bg-opacity-75  rounded-4
           shadow-lg text-white fw-bolder border-1 p-2  rounded-3 w-75">
            Log In
          </button>
        

           <button className="custom-dim-text outline-success bg-white bg-opacity-10  rounded-5 shadow-sm text-dark   border-1 p-2  rounded-3 w-25  ">
           Sign up
          </button>

        </form>

       <Link to={'/signup'} className='text-dark nav-link '>
        <p className='footer m-5 custom-dim-text '>share us </p>
        </Link>


      </div>
    </>
  );
}
