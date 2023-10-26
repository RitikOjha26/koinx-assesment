import './App.css';
import Navabar from './component/Navabar';
import CryptoTaxCalculator from './component/CryptoTaxCalculator';
import Faq from './component/Faq';
import SideBanner from './component/Banners/SideBanner';
import BottomBanner1 from './component/Banners/BottomBanner1';
import BottomBanner2 from './component/Banners/BottomBanner2';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">

      <Navabar />

      {/* Main content layout */}
      <div className="flex flex-col w-screen h-auto md:min-h-auto ml-1 md:flex-row md:w-full ">

        <div className="w-auto h-auto pt-[5vh]  md:ml-[6vh] md:rounded-md">

          <div id='1' className="bg-white rounded-md py-3 h-auto "><CryptoTaxCalculator /></div>

          <div id='2' className="bg-white rounded-md mt-5 h-auto "><Faq /></div>

        </div>

        {/* Side Banner */}
        <div id='4' className=" hidden sm:block h-[60vh] ml-[6vh] md:mt-[5vh] md:w-[80vh] md:mr-[5vh] sticky md:top-[5vh] md:mb-[13vh] "><SideBanner /></div>

      </div>

      {/* Bottom Banner 1 - Visible on small screens */}
      <div className='px-5 h-auto  sm:hidden'>
        <BottomBanner1 />
      </div>

      {/* Bottom Banner 2 - Visible on medium/large screens */}
      <div className='relative hidden md:block md:w-full md:m-auto'>
        <BottomBanner2 />
      </div>

      <Footer />
    </div>
  );
}

export default App;
