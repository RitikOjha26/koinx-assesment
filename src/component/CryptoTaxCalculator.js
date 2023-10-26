import React, { useEffect, useState } from 'react'
import { INCOME_RANGES } from '../constants';


const CryptoCalc = () => {

    const [PurchasePrice, setPurchasePrice] = useState(0);
    const [SalePrice, setSalePrice] = useState(0);
    const [Expenses, setExpenses] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const [isLongTerm, setIsLongTerm] = useState(false);
    const [annualIncome, setAnnualIncome] = useState("")
    const [isShortTerm, setIsShortTerm] = useState(false);
    const [Taxrate, setTaxrate] = useState(0);
    const [Taxval, setTaxval] = useState("");
    const [CapitalGain, setCapitalGain] = useState(0);
    const [Discount, setDiscount] = useState(0);
    const [PayableTax, setPayableTax] = useState(0);


    // Tax rate according to Annual Income

    //Setting Tax Rates
    const handleTaxRateChange = (event) => {
        const selectedRange = event.target.value;
        const selectedIncomeRange = INCOME_RANGES.find((range) => range.range === selectedRange);
        console.log(selectedIncomeRange);
        if (selectedIncomeRange.id) {
            setTaxrate(selectedIncomeRange.Trate);
            setTaxval(selectedIncomeRange.taxRate);
            setAnnualIncome(selectedIncomeRange.range)

        }
    };

    //Buttons for Short Term and Long Term Investing
    const handleButtonClick = (EVENT) => {
        setShowForm(EVENT);
        setIsLongTerm(EVENT);
        setIsShortTerm(!EVENT);
    };


    useEffect(() => {
        if (PurchasePrice !== -1 && SalePrice !== -1 && Expenses !== -1) {
            const gains = SalePrice - PurchasePrice - Expenses;

            if (gains >= 0) {

                if (isLongTerm) {  //checks if Long Term investment is chosen or not 
                    const calculate_discount = gains * 0.5; // 50% discount for long term
                    setDiscount(calculate_discount);
                    const tax_need_to_pay = Discount * Taxrate;
                    const netCapitalGain = gains - Discount;
                    setCapitalGain(netCapitalGain);
                    setPayableTax(tax_need_to_pay);

                }
                else {
                    const tax_need_to_pay = gains * Taxrate;
                    setCapitalGain(gains);
                    setPayableTax(tax_need_to_pay);

                }

            }
        }
        else {
            //Form Validation Things Here
        }

    }, [PurchasePrice, SalePrice, Expenses, Taxrate, isLongTerm, Discount]);






    return (

        <div className=''>

            <h1 className=' text-[25px] pb-3 md:text-[35px] font-bold text-center md:relative md:justify-centre text-gray-700'>
                Free Crypto Tax Calculator Australia
            </h1>
            <form className="w-full max-w-full">
                <div className="flex flex-wrap mb-6">
                    <div className=" w-1/2 px-3 mb-6 md:w-2/4 md:mb-0">
                        <label className="block mb-2 text-xs font-bold text-gray-700 ">
                            Financial Year:
                        </label>
                        <div className="relative">
                            <select id="grid-state" className="block w-full px-4 py-3 rounded leading-tight bg-gray-200 border border-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500">
                                <option>FY 2023-24</option>
                            </select>

                        </div>
                    </div>
                    <div className="w-1/2 px-3 mb-6 md:w-2/4 md:mb-0">
                        <label  className="block mb-2 text-xs font-bold text-gray-700 tracking-wide">
                            Country:
                        </label>
                        <div className="relative">
                            <select id="grid-state" className="block w-full px-4 py-3 rounded leading-tight bg-gray-200 border border-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500">
                                <option>Australia</option>
                            </select>

                        </div>
                    </div>
                    <hr />
                    <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 md:mt-6 sm:mt-0">
                        <label htmlFor="grid-first-name" className="block mb-2 text-xs font-bold text-gray-700 tracking-wide">
                            Enter purchase price of Crypto:
                        </label>
                        <input
                            type="text"
                            id="grid-first-name"
                            className="block w-full px-4 py-3 rounded leading-tight bg-gray-200 text-gray-700 border focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="$10000"
                            onChange={(e) => { setPurchasePrice(e.target.value) }}
                        />
                    </div>
                    <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 md:mt-6 sm:mt-0">
                        <label htmlFor="grid-last-name" className="block mb-2 text-xs font-bold text-gray-700 tracking-wide">
                            Enter sale price of Crypto:
                        </label>
                        <input
                            type="text"
                            id="grid-last-name"
                            className="block w-full px-4 py-3 rounded leading-tight bg-gray-200 text-gray-700 border border-gray-200 focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="$10000"
                            onChange={(e) => { setSalePrice(e.target.value) }}
                        />
                    </div>
                    <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 md:mt-6 sm:mt-0">
                        <label className="block mb-2 text-xs font-bold text-gray-700 tracking-wide">
                            Enter your Expenses:
                        </label>
                        <input
                            type="text"
                            id="grid-first-name"
                            className="block w-full px-4 py-3 rounded leading-tight bg-gray-200 text-gray-700 border focus:outline-none focus:bg-white"
                            placeholder="$10000"
                            onChange={(e) => { setExpenses(e.target.value) }}
                        />
                    </div>
                    <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 md:mt-6 sm:mt-0">
                        <label className="block text-xs font-bold text-gray-700 tracking-wide">
                            Select Investment Type:
                        </label>
                        <div className='flex md:flex'>

                            <button
                                type="button"
                                onClick={() => { handleButtonClick(false); }}
                                className={`mt-2 block w-[50vw] md:w-[50%] mr-4 py-3 px-4 rounded leading-tight bg-gray-200 border-2 border-gray-200 text-gray-700 focus:border-gray-500 ${isLongTerm === true ? 'text-blue-700 border-blue-600' : ''}`}>
                                Short Term
                            </button>


                            <button
                                type="button"
                                onClick={() => { handleButtonClick(true); }}
                                className={`mt-2 block w-[50vw] md:w-[50%] md:flex md:flex-row py-3 px-4 rounded leading-tight bg-gray-200 border-2 border-gray-200 text-gray-700 focus:border-gray-500 ${isLongTerm === true ? 'text-blue-700 border-blue-600' : ''}`}>
                                Long Term
                            </button>

                        </div>
                    </div>

                    <div className="w-[100%] px-3 mb-6 md:w-[100%] md:mb-0 md:mt-6 ">
                    <label  className="pb-2  block text-xs font-bold tracking-wide text-gray-700 md:mb-2">
                                Select your Annual Income:
                            </label>
                        <div className='md:flex '>
                            
                            <div className="relative h-auto md:flex md:w-[49%] mr-6  ">
                                <select id="grid-state" className="block w-full px-4 py-3 rounded leading-tight bg-gray-200 border border-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500" value={annualIncome} onChange={handleTaxRateChange}>
                                    {INCOME_RANGES.map(item => (

                                        <option key={item.id}>{item.range}</option>
                                    ))}
                                </select>

                            </div>
                            
                            <div className="relative  md:flex md:w-[47%]  ">
                                <p  className="text-[12px] block w-full pt-2 md:px-4 md:py-3 rounded leading-tight  text-gray-400 focus:outline-none focus:bg-white focus:border-gray-500" value={annualIncome} onChange={handleTaxRateChange}>
                                Tax Rate: <span>&nbsp;{Taxval}</span> 
                                </p>

                            </div>

                        </div>
                        {/* <div className=''>
                            <p className='mt-2 text-xs text-opacity-50 text-[#3E424A] '>
                                Tax Rate: &nbsp; {Taxval}
                            </p>
                        </div> */}

                    </div>
                    {showForm && (
                        <div className="flex flex-col md:flex-row mb-2 w-full  ">
                            <div className=" w-full px-3  mb-6  md:mb-0 md:mt-6">
                                <label className="block text-xs font-bold tracking-wide text-gray-700">
                                    Capital gains Amount:
                                </label>
                                <input
                                    type="text"
                                    id="grid-first-name"
                                    className="block w-full px-4 py-3 rounded leading-tight bg-gray-200 text-gray-700 border focus:outline-none focus:bg-white"
                                    value={CapitalGain}
                                />
                            </div>
                            <div className="w-full px-3 mb-6  md:mb-0 md:mt-6 sm:mt-0">
                                <label className="block text-xs font-bold tracking-wide text-gray-700">
                                    Discount for long term gains:
                                </label>
                                <input
                                    type="text"
                                    id="grid-first-name"
                                    className="block w-full px-4 py-3 rounded leading-tight bg-gray-200 text-gray-700 border focus:outline-none focus:bg-white"
                                    value={Discount}
                                />
                            </div>
                        </div>
                    )}
                    <div className='w-[100%] md:flex px-3 '>
                        <div className='w-full px-1 mb-6 md:w-1/2 md:mb-0 md:mt-6'>
                            <div className='block w-full px-4 py-3 bg-gray-200 text-gray-700 border rounded leading-tight focus:outline-none focus:bg-white'>
                                <h1 className='align-center text-center'>Net capital gains amount</h1>
                                <h1 className='pt-1 align-center text-center font-bold items-center text-[#0FBA83]  '>${CapitalGain}</h1>
                            </div>
                        </div>
                        <div className='w-full px-1 mb-6 md:w-1/2 md:mb-0 md:mt-6 sm:mt-0 '>
                            <div className=' block w-full px-4 py-3 bg-gray-200 text-gray-700 border rounded leading-tight focus:outline-none focus:bg-white'>
                                <h1 className='align-center text-center '>Tax you need to pay</h1>
                                <h1 className='pt-1 align-center text-center font-bold items-center text-[#0141CF] '>${PayableTax}</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>

    )
}

export default CryptoCalc