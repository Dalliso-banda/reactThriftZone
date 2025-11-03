import { Carousel } from "react-bootstrap"
import Image from "react-bootstrap/Image"


const testImages= [{
    src:'/test.jpgssss'

},{src:'/vite.svg'}]

export default function ImageSlider(){
    return(<>
  <Carousel controls={true} className=" w-100 m-0 h-100 bg-black d-flex align-items-center justify-content-center">
    {
    testImages.map((image,index)=>
        <Carousel.Item key={index} >
    <Image className="w-100 " src={image.src} alt='image'  ></Image>

        </Carousel.Item>
        
    )
    }
   </Carousel>
    </>)
}