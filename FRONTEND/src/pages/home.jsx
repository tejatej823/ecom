import img from '../assets/book1.jpeg'
import {useNavigate} from 'react-router-dom';
const Home=()=>{
    const navigate=useNavigate();
    const handleonclick=()=>{
        navigate("/books");
    }
    return (
      <>
        <div className="h-auto lg:h-[50vh] w-full md:flex flex-col lg:flex-row p-6 border-2 bg-blue-100">
          <div className="lg:w-1/2 h-[1/2] lg:h-full flex items-center justify-center">
            <img
              src={img}
              alt="hero image"
              className="w-full h-full object-contain
              max-h-[40vh] "
            ></img>
          </div>
          <div className="w-full lg:w-1/2 h-[1/2] lg:h-full p-4 md:mt-6">
            <div className="flex flex-col items-center justify-evenly h-[100%]">
              <h1 className="text-4xl lg:text-6xl font-serif text-center text-gray-800 italic">
                "Unlock the World of Stories and Knowledge"
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
                "Discover your next favorite book from a vast collection of
                genres. From timeless classics to the latest bestsellers, we've
                got something for every reader."
              </p>
              <div className="text-center">
                <button className={`border rounded-lg px-5 py-3 hover:bg-black text-white bg-blue-300`} onClick={handleonclick}>BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default Home;
