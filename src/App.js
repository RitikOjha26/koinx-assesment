import './App.css';
import Navabar from './component/Navabar';
import CryptoCalc from './component/CryptoCalc';
import Faq from './component/Faq';
//import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      {/* 
      
      <div className=' w-[full] h-[100vh] sm:w-[100%]'>
        <div className='grid grid-cols-4 gap-4 '>
          <div className='bg-white col-span-3 mt-[20px] ml-[20px] sm:mr-[10px]'>
            <div className='items-centre justify-between'>
              <p className='relative left-10 w-fit mt-[-1.00px] font-bold text-1 text-[16px] text-center tracking-[0] leading-[42px] whitespace-nowrap '> Free Crypto Tax Calculator Australia </p>

              <div className='flex flex-row items-center px-4'>
                <CryptoCalc />

              </div>
            </div>
          </div>
          <div className='bg-blue-400 col-span-1 mt-[20px] mr-[60px] sm:flex sm:flex-col'>
            22222222
          </div>

        </div>
      </div> */}
      <Navabar />
      <div className="flex flex-col w-[95vw] h-[100vh] ml-1 md:flex-row md:w-full ">
        <div className="w-full h-[100vh] pt-[5vh]  md:ml-[6vh] md:rounded-md ">
          <div id='1'className="bg-white rounded-md py-3 h-auto "><CryptoCalc /></div>
          <div id='2' className="bg-white rounded-md my-5 h-auto"><Faq /></div>
        </div>
        <div id='3' className="bg-green-600 hidden md:block h-[100vh] ml-[6vh] md:mt-[5vh] md:w-[60vh] md:mr-[10vh] md:sticky md:top-[5vh]  "></div>
      </div>




    </div>
  );
}

export default App;
