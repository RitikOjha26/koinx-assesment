import './App.css';
import Navabar from './component/Navabar';
import CryptoCalc from './component/CryptoCalc';
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
      <div className="flex flex-col w-[100vh] h-[100vh] md:flex-row md:w-full ">
        <div className="w-full h-[100vh] pt-[5vh] pl-[6vh] md:ml-[6vh] md:rounded-md ">
          <div className="bg-red-600 h-auto"><CryptoCalc /></div>
          <div className="bg-blue-600 h-[100vh]">2</div>
        </div>
        <div className="bg-green-600 h-[100vh] ml-[6vh] md:mt-[5vh] md:w-[60vh] md:mr-[10vh] md:sticky md:top-[5vh]  ">3</div>
      </div>




    </div>
  );
}

export default App;
