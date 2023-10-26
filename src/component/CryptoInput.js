import React from 'react'

const CryptoInput = ({ onInput, label, className ,id }) => {
    return (
        <>
            <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={id}>
                Enter your Expenses:
            </label>
            <input id={id} onChange={(e) => { setExpenses(e.target.value) }} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="$10000" />
        </>

    )
}

export default CryptoInput