import ImageSlider from '../components/imageSlider'

export default function GalleryView(){
return<>
    
           
      <ImageSlider/>
        
    <div className='container d-flex flex-column gap-2'> 
             <h1 className='m-3 '>tilie of clothes</h1>
             <h4 className='custom-dim-text'>
               here goes the location 
             </h4>
             <h4 className='ms-auto'>
            $0.76
             </h4>
             <button className='w-75 rounded-1 bg-success align-self-center p-2 text-white fw-bolder fs-i'>
                  Add to cart 
             </button>
    </div>


</>
}