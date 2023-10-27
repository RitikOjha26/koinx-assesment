import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { INCOME_RANGES } from '../constants';
import Flag from '../assets/images/flag.jpg';


const CryptoTaxCalculator = () => {

    // State variables
    const [purchasePrice, setPurchasePrice] = useState(-1);
    const [salePrice, setSalePrice] = useState(-1);
    const [expenses, setExpenses] = useState(-1);
    const [showForm, setShowForm] = useState(false);
    const [isLongTerm, setIsLongTerm] = useState(false);
    const [annualIncome, setAnnualIncome] = useState("");
    const [isShortTerm, setIsShortTerm] = useState(false);
    const [taxRate, setTaxrate] = useState(0);
    const [taxval, setTaxval] = useState("");
    const [capitalGain, setCapitalGain] = useState(0);
    const [netCapitalGain, setNetCapitalGain] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [payableTax, setPayableTax] = useState(0);

    //Debounce Function
    const debounce = (func, delay) => {
        let timer;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(context, args);
            }, delay);
        };
    };

    // State variables with debounce
    const setPurchasePriceDebounced = debounce(setPurchasePrice, 250);
    const setSalePriceDebounced = debounce(setSalePrice, 250);
    const setExpensesDebounced = debounce(setExpenses, 250);
    const setTaxRateDebounced = debounce(setTaxrate, 250);

    // Functions to handle purchase price , sale price , expense and tax rate change with debounce
    const handlePurchasePriceChange = (e) => {
        setPurchasePriceDebounced(e.target.value);
    };


    const handleSalePriceChange = (e) => {
        setSalePriceDebounced(e.target.value);
    };


    const handleExpensesChange = (e) => {
        setExpensesDebounced(e.target.value);
    };




    // Function to handle tax rate change
    const handleTaxRateChange = (event) => {
        const selectedRange = event.target.value;
        const selectedIncomeRange = INCOME_RANGES.find((range) => range.range === selectedRange);

        if (selectedIncomeRange.id) {
            setTaxrate(selectedIncomeRange.Trate);
            setTaxval(selectedIncomeRange.taxRate);
            setAnnualIncome(selectedIncomeRange.range);
            console.log(taxval);
        }
    };

    

    // Function to handle short/long-term investment button click
    const handleButtonClick = (EVENT) => {
        setShowForm(EVENT);
        setIsLongTerm(EVENT);
        setIsShortTerm(!EVENT);

    };

    useEffect(() => {
        if (purchasePrice !== -1 && salePrice !== -1 && expenses !== -1) {
            const gains = salePrice - purchasePrice - expenses;
            console.log(expenses);
            if (gains >= 0) {
                if (isLongTerm) {
                    const calculate_discount = gains * 0.5; // 50% discount for long term
                    setDiscount(calculate_discount);
                    const tax_need_to_pay = discount * taxRate;
                    const netCapitalGain = gains - discount;
                    setCapitalGain(gains);
                    setNetCapitalGain(netCapitalGain);
                    setPayableTax(tax_need_to_pay);
                }
                else {
                    const tax_need_to_pay = gains * taxRate;
                    setCapitalGain(gains);
                    setNetCapitalGain(gains);
                    setPayableTax(tax_need_to_pay);
                }
            }
            else {
                setCapitalGain(0);
                setPayableTax(0);
                setNetCapitalGain(0);
                setPayableTax(0);
            }
        }
        else {
            // Form Validation Things Here
            setCapitalGain(0);
            setNetCapitalGain(0);
            setPayableTax(0);
        }
    }, [purchasePrice, salePrice, expenses, taxRate, isLongTerm, discount]);

    return (
        <div className="">
            <h1 className="text-[25px] pb-3 md:text-[35px] font-bold text-center md:relative md:justify-centre text-gray-700">
                Free Crypto Tax Calculator Australia
            </h1>
            <form className="w-full max-w-full">
                <div className="flex flex-wrap mb-6">
                    <div className="flex w-full">
                        <div className="w-1/2 px-3 mb-6 md:w-2/4 md:mb-0">
                            <label className="block mb-2 text-xs font-bold text-gray-700">
                                Financial Year
                            </label>
                            <div className="relative">
                                <select id="FinY" className="block w-full px-4 py-3 rounded-[0.3rem] leading-tight bg-gray-200 border border-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option>FY 2023-24</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-1/2 px-3 mb-6 md:w-2/4 md:mb-0">
                            <label className="block mb-2 text-xs font-bold text-gray-700 tracking-wide">
                                Country
                            </label>
                            <div className="relative">
                                <select id="Country" className="block w-full px-4 py-3 rounded leading-tight bg-gray-200 border border-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option><img src={Flag} alt="Flag" />Australia</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <hr className="bg-black py-[15px]" />
                        </div>
                    </div>
                    <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 md:mt-6 sm:mt-0">
                        <label htmlFor="grid-first-name" className="block mb-2 text-xs font-bold text-gray-700 tracking-wide">
                            Enter purchase price of Crypto
                        </label>
                        <input
                            type="text"

                            id="grid-first-name"
                            className="block w-full px-4 py-3 rounded leading-tight bg-gray-200 text-gray-700 border focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="$10000"
                            onChange={handlePurchasePriceChange}
                        />
                    </div>
                    <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 md:mt-6 sm:mt-0">
                        <label htmlFor="grid-last-name" className="block mb-2 text-xs font-bold text-gray-700 tracking-wide">
                            Enter sale price of Crypto
                        </label>
                        <input
                            type="text"
                            id="grid-last-name"
                            className="block w-full px-4 py-3 rounded leading-tight bg-gray-200 text-gray-700 border border-gray-200 focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="$20000"
                            onChange={handleSalePriceChange}

                        />
                    </div>
                    <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 md:mt-6 sm:mt-0">
                        <label className="block mb-2 text-xs font-bold text-gray-700 tracking-wide">
                            Enter your expenses
                        </label>
                        <input
                            type="text"
                            id="grid-first-name"
                            className="block w-full px-4 py-3 rounded leading-tight bg-gray-200 text-gray-700 border focus:outline-none focus:bg-white"
                            placeholder="$30000"
                            onChange={handleExpensesChange}
                        />
                    </div>
                    <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 md:mt-6 sm:mt-0">
                        <label className="block text-xs font-bold text-gray-700 tracking-wide">
                            Select Investment Type
                        </label>
                        <div className='flex md:flex'>
                            <button
                                type="button"
                                id='shortTerm'
                                onClick={() => { handleButtonClick(false); }}
                                className={`mt-2 block w-[50vw] md:w-[50%] mr-4 py-3 px-4 rounded leading-tight bg-gray-200 border-2 ${isShortTerm ? 'text-blue-700 border-blue-600 focus:border-blue-600' : 'border-gray-200 focus:border-gray-500 text-gray-700 '}`}>
                                Short Term <FontAwesomeIcon icon={faCheck} className={`${isShortTerm ? 'text-blue-600 border-blue-600 text-xl px-[1rem]' : 'hidden '}`} />

                            </button>
                            <button
                                type="button"
                                id='longTerm'
                                onClick={() => { handleButtonClick(true); }}
                                className={`mt-2 block w-[50vw] md:w-[50%] py-3 px-4 rounded leading-tight bg-gray-200 border-2  ${isLongTerm ? 'text-blue-700 border-blue-600 focus:border-blue-600' : 'border-gray-200 focus:border-gray-500 text-gray-700'}`}>
                                Long Term <FontAwesomeIcon icon={faCheck} className={`${isLongTerm ? 'text-blue-600 border-blue-600 text-xl px-[1rem]' : 'hidden '}`} />
                            </button>
                        </div>
                    </div>
                    <div className="w-[100%] px-3 mb-6 md:w-[100%] md:mb-0 md:mt-6">
                        <label className="pb-2 block text-xs font-bold tracking-wide text-gray-700 md:mb-2">
                            Select your Annual Income
                        </label>
                        <div className='md:flex'>
                            <div className="relative h-auto md:flex md:w-[49%] mr-6  ">
                                <select id="IncomeRange" className="block w-full px-4 py-3 rounded leading-tight bg-gray-200 border border-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500" value={annualIncome} onChange={handleTaxRateChange}>
                                    {INCOME_RANGES.map(item => (
                                        <option key={item.id}>{item.range}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="relative md:flex md:w-[47%]  ">
                                <p className="text-[12px] block w-full pt-2 md:px-4 md:py-3 rounded leading-tight text-gray-400 focus:outline-none focus:bg-white focus:border-gray-500">
                                    Tax Rate: <span>&nbsp;{taxval}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    {showForm && (
                        <div className="flex flex-col md:flex-row mb-2 w-full  ">
                            <div className="w-full px-3  mb-6  md:mb-0 md:mt-6">
                                <label className="block text-xs font-bold tracking-wide text-gray-700">
                                    Capital gains Amount
                                </label>
                                <input
                                    type="text"
                                    id="grid-first-name"
                                    className="block w-full px-4 py-3 rounded leading-tight bg-gray-200 text-gray-700 border focus:outline-none focus:bg-white"
                                    value={capitalGain}
                                />
                            </div>
                            <div className="w-full px-3 mb-6  md:mb-0 md:mt-6 sm:mt-0">
                                <label className="block text-xs font-bold tracking-wide text-gray-700">
                                    discount for long term gains
                                </label>
                                <input
                                    type="text"
                                    id="grid-first-name"
                                    className="block w-full px-4 py-3 rounded leading-tight bg-gray-200 text-gray-700 border focus:outline-none focus:bg-white"
                                    value={discount}
                                />
                            </div>
                        </div>
                    )}
                    <div className='w-[100%] md:flex px-3 '>
                        <div className='w-full pl-0 mb-6 md:w-1/2 md:mb-0 md:mt-6'>
                            <div className='block w-full px-4 py-3 bg-gray-200 text-gray-700 border rounded leading-tight focus:outline-none focus:bg-white'>
                                <h1 className='align-center text-center'>Net capital gains amount</h1>
                                <h1 className='pt-1 align-center text-center font-bold items-center text-[#0FBA83]  '>${netCapitalGain}</h1>
                            </div>
                        </div>
                        <div className='w-full px-1 mb-6 md:w-1/2 md:mb-0 md:mt-6 sm:mt-0 '>
                            <div className='block w-full px-4 py-3 bg-gray-200 text-gray-700 border rounded leading-tight focus:outline-none focus:bg-white'>
                                <h1 className='align-center text-center '>Tax you need to pay</h1>
                                <h1 className='pt-1 align-center text-center font-bold items-center text-[#0141CF] '>${payableTax}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CryptoTaxCalculator;
