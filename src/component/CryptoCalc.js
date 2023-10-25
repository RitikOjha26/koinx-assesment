import React, { useEffect, useState } from 'react'



const CryptoCalc = () => {

    const [PurchasePrice, setPurchasePrice] = useState(0);
    const [SalePrice, setSalePrice] = useState(0);
    const [Expenses, setExpenses] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const [isLongTerm, setIsLongTerm] = useState(false);
    const [isShortTerm, setIsShortTerm] = useState(false);
    const [Taxrate, setTaxrate] = useState(0);
    const [Taxval, setTaxval] = useState("");
    const [CapitalGain, setCapitalGain] = useState(0);
    const [Discount, setDiscount] = useState(0);
    const [PayableTax, setPayableTax] = useState(0);


    // Tax rate according to Annual Income
    const incomeRanges = [
        {
            id: 1,
            range: "$0 - $18,200",
            taxRate: "0%",
            Trate: 0,
        },
        {
            id: 2,
            range: "$18,201 - $45,000",
            taxRate: "Nil + 19% of excess over $18,200",
            Trate: 0.19,
        },
        {
            id: 3,
            range: "$45,001 - $120,000",
            taxRate: "$5,092 + 32.5% of excess over $45,000",
            Trate: 0.325,
        },
        {
            id: 4,
            range: "$120,001 - $180,000",
            taxRate: "$29,467 + 37% of excess over $120,000",
            Trate: 0.37,
        },
        {
            id: 5,
            range: "$180,001+",
            taxRate: "$51,667 + 45% of excess over $180,000",
            Trate: 0.45,
        },
    ];

    //Setting Tax Rates
    const handleTaxRateChange = (event) => {
        const selectedRange = event.target.value;
        const selectedIncomeRange = incomeRanges.find((range) => range.range === selectedRange);

        if (selectedIncomeRange) {
            setTaxrate(selectedIncomeRange.Trate);
            setTaxval(selectedIncomeRange.taxRate);

        }
    };

    //Buttons for Short Term and Long Term Investing
    const handleButtonClick = (isLongTerm) => {
        setShowForm(isLongTerm);
        setIsLongTerm(isLongTerm);
        setIsShortTerm(!isLongTerm);
    };

    useEffect(() => {
        if (PurchasePrice !== -1 && SalePrice !== -1 && Expenses !== -1) {
            const gains = SalePrice - PurchasePrice - Expenses;
            console.log('this is gains' + gains);
            if (gains >= 0) {
                setCapitalGain(gains);
                const calculate_discount = gains * 0.5; // 50% discount for long term
                setDiscount(calculate_discount);
                if (isLongTerm) {
                    const tax_need_to_pay = Discount * Taxrate;
                    setPayableTax(tax_need_to_pay);
                    console.log(tax_need_to_pay);
                }
                else {
                    const tax_need_to_pay = gains * Taxrate;
                    setPayableTax(tax_need_to_pay);
                    console.log(tax_need_to_pay);
                }
            }
        }
        else {
            //Form Validation Things Here
        }

    }, [PurchasePrice, SalePrice, Expenses, Taxrate]);


    console.log(Discount);



    return (
        <div>
            <form className="w-full max-w-full ">
                <div className="flex flex-wrap -mx-3 mb-6">

                    <div className="w-full md:w-2/4 px-3 mb-6 md:mb-0">
                        <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            Financial Year:
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>FY 2023-24</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-2/4 px-3 mb-6 md:mb-0">
                        <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            Country:
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>
                                    Australia
                                </option>

                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <hr />
                 <div className="w-full md:w-1/2 px-3 lg:mt-6 sm:mt-0  mb-6 md:mb-0">
                        <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Enter purchase price of Crypto:
                        </label>
                        <input onChange={(e) => { setPurchasePrice(e.target.value) }} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="$10000" />

                 </div>
                    <div className="w-full md:w-1/2 px-3 lg:mt-5 sm:mt-0">
                        <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Enter sale price of Crypto:
                        </label>
                        <input onChange={(e) => { setSalePrice(e.target.value) }} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="$10000" />
                    </div>
                    <div className="w-full md:w-1/2 px-3 lg:mt-6 sm:mt-0  mb-6 md:mb-0">
                        <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Enter your Expenses:
                        </label>
                        <input onChange={(e) => { setExpenses(e.target.value) }} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="$10000" />

                    </div>
                    <div className="w-full md:w-1/2 px-3 lg:mt-6 sm:mt-0  mb-6 md:mb-0">
                        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Select Investment Type:
                        </label>
                        <br />
                        <button
                            type="button"
                            onClick={() => {
                                handleButtonClick(false);

                            }}
                            className={`block w-1/2 mx-4 bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:border-gray-500 ${isShortTerm ? 'text-blue-700 border-blue-600' : ''}`}
                        >
                            Short Term
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                handleButtonClick(true);
                            }}
                            className={`block w-1/2 mx-4 bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:border-gray-500 ${isLongTerm === true ? 'text-blue-700 border-blue-600' : ''}`}
                        >
                            Long Term
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-3 lg:mt-6 sm:mt-0  mb-6 md:mb-0">
                    <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                        Select your Annual Income:
                    </label>

                    <div className="relative">
                        <select value={Taxrate} onChange={handleTaxRateChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">

                            {incomeRanges.map(range => (
                                <option key={range.id}>
                                    {range.range}
                                </option>
                            ))}
                        </select>

                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>

                    </div>
                    <p className='text-xs text-[#3E424A] text-opacity-50 '>Tax Rate <br /> {Taxval} </p>
                </div>

                {showForm && (
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/2 px-3 lg:mt-6 sm:mt-0 mb-6 md:mb-0">
                            <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Capital gains Amount:
                            </label>
                            <input
                                value={CapitalGain}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name"
                                type="text"

                            />
                        </div>
                        {/* Additional form elements go here */}
                        <div className="w-full md:w-1/2 px-3 lg:mt-6 sm:mt-0 mb-6 md:mb-0">
                            <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Discount for long term gains:
                            </label>
                            <input
                                value={Discount}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name"
                                type="text"

                            />
                        </div>
                    </div>

                )}

                <div className='w-full md:w-1/2 px-3 lg:mt-6 sm:mt-0 mb-6 md:mb-0'>
                    <div className='appearance-none block justify-between w-full bg-gray-200 text-gray-700  border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'>
                        Net capital gains amount
                        <h1 className='font-bold items-center text-[#0FBA83] '>${CapitalGain}</h1>


                    </div>
                </div>
                <div className='w-full md:w-1/2 px-3 lg:mt-6 sm:mt-0 mb-6 md:mb-0'>
                    <div className='appearance-none block justify-between w-full bg-gray-200 text-gray-700  border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'>
                        Net capital gains amount
                        <h1 className='font-bold items-center text-[#0FBA83] '>${CapitalGain}</h1>


                    </div>
                </div>





            </form>
        </div>
    )
}

export default CryptoCalc