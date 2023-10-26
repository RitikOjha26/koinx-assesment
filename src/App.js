import './App.css';
import Navabar from './component/Navabar';
import CryptoTaxCalculator from './component/CryptoTaxCalculator';
import Faq from './component/Faq';
import SideBanner from './component/SideBanner';
import Banner2 from './assets/images/Frame1.jpg'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import Footer from './component/Footer';
function App() {
  return (
    <div className="App">

      <Navabar />
      <div className="flex flex-col w-[95vw] h-[750vh] ml-1 md:flex-row md:w-full ">

        <div className="w-full h-[100vh] pt-[5vh]  md:ml-[6vh] md:rounded-md ">

          <div id='1' className="bg-white rounded-md py-3 h-auto "><CryptoTaxCalculator /></div>
          <div id='2' className="bg-white rounded-md mt-5 h-auto"><Faq /></div>
          
        </div>
        {/* Side Banner */}
        <div id='4' className="bg-pink-300 hidden md:block h-[60vh] ml-[6vh] md:mt-[5vh] md:w-[80vh] md:mr-[5vh] sticky md:top-[5vh] "><SideBanner /></div>
        
        

      </div>
      <div className='h-[70vh] bg-[#0052FE] rounded-[25px] text-white '>
            
            <div className='py-[55px] px-[16px] text-center'>
                <h1 className='text-[26px] font-bold mb-5 '>Get Started with KoinX for FREE</h1>

                <span className=' text-semibold'>With our range of features that you can equip for free,
                    KoinX allows you to be more educated and aware of your tax reports.</span>
                    <img className='px-[85px] py-5' src={Banner2} alt="Banner" />
                    <button className='bg-white text-black font-medium w-[15vw] h-[5vh] rounded-md'>
                        Get Started for FREE
                        <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                    </button>
            </div>

            
        </div>

      



    </div>
  );
}

export default App;
