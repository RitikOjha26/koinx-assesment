export const NAVLINKS = [
    {
        id: 1,
        title: "Features",
    },
    {
        id: 2,
        title: "Exchanges",
    },
    {
        id: 3,
        title: "How it works?",
    },
    {
        id: 4,
        title: "Blog",
    },
    {
        id: 5,
        title: "About Us",
    },
    {
        id: 6,
        title: "Sign In",
    },
]




export const INCOME_RANGES = [
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

export const QNA = [
    {
        id: 1,
        Question: <p>
            How are cryptocurrencies taxed in Australia?
        </p>,
        Answer:
            <p >
                The Australian Taxation Office (ATO) regards cryptocurrency as both property, which is subject to Capital
                Gains Tax (CGT), and income, which is subject to Income Tax. CGT applies when you sell, trade, gift, or make
                purchases using cryptocurrency. On the other hand, Income Tax applies when you receive cryptocurrency as
                payment for services, work, mining, staking, or other activities. To simplify tax calculations, consider
                using a free crypto tax calculator for Australia.
            </p>

    },
    {
        id: 2,
        Question: <p >
            What’s the difference between long-term and short-term capital gains?
        </p>,
        Answer:


            <p >
                The distinction between long-term and short-term capital gains lies in the duration of ownership. When you
                own an asset, such as cryptocurrency, for more than 12 months, any gains from its sale are categorised as
                long-term. These long-term gains often receive a 50% discount on the capital gains tax (CGT). In contrast,
                if you hold the asset for 12 months or less, the gains are considered short-term, and they are taxed at your
                regular income tax rate.
            </p>


    },
    {
        id: 3,
        Question: <p >
            Do I have to pay tax on crypto-to-crypto transactions?
        </p>,
        Answer:
            <p >
                Yes, according to the ATO, when you trade one cryptocurrency for another, like NFTs, stablecoins, or
                tokens, it&#39;s seen as selling one asset to buy another, and any profit you make from this exchange is
                subject to Capital Gains Tax. To compute taxes for crypto-to-crypto transactions, you must determine the
                fair market value of your coins in AUD at both the acquisition and disposal times. However, this can be
                challenging because many exchanges use cryptocurrency as the standard for valuation.
                <br />
                <br />
                Explore KoinX for a streamlined experience in calculating your cryptocurrency taxes. Our historical price
                engine swiftly delivers the fair market value of your crypto holdings at the time of each transaction,
                making tax assessment hassle-free.
            </p>

    },
    {
        id: 4,
        Question: <p>How do i lower my cryptocurrency taxes?</p>,
        Answer: <div>
            Here are the top 6 stratergies for lowering your cryptocurrency taxes in Australia:
            <ul className='list-disc pl-4 pt-2'>
                <li><span className='font-bold'>Hold over for 12 months-</span>Hold your crypto for more than 12 months to qualify for a 50% long-term CGT discount to reduce your tax liability.</li>
                <li><span className='font-bold'>Offset gains with losses-</span> Offset capital gains with capital losses from cryptocurrency, reducing your overall tax burden.</li>
                <li><span className='font-bold'>Claim tax deductions-</span> Explore opportunities to claim significant deductions on your regular income if you're a trader or running a crypto business.</li>
                <li><span className='font-bold'>Use crypto tax tools-</span> Employ crypto tax software like KoinX or seek help from a crypto tax specialist to streamline calculations and ensure compliance.</li>
                <li><span className='font-bold'>Donate to charities-</span> Donate cryptocurrency to registered charities since it’s not a taxable event, and claim deductions on the donated amount.</li>
                <li><span className='font-bold'>Full disclosure-</span> Be transparent and disclose all your crypto transactions to the ATO to avoid penalties for hiding trading activities.</li>
            </ul>

        </div>
    },
    {
        id: 5,
        Question: <p>Can the ATO track Crypto?</p>,
        Answer: <p>
            The Australian Taxation Office (ATO) possesses strong tracking capabilities for cryptocurrency transactions. Since 2014, they've been gathering data on crypto activities, including KYC info from exchanges and wallets. The ATO's data matching program, active since 2019, lets them access data from service providers like Binance and CoinJar, covering personal details and transaction specifics. Since 2020, the ATO has been notifying Australian crypto investors to report holdings to avoid penalties.

        </p>,
    },
    {
        id: 6,
        Question: <p>What is the best tax calculator for crypto in Australia?</p>,
        Answer: <p>KoinX is a crypto tax platform that makes it easy to calculate tax on crypto transactions. It also provides portfolio insights of all crypto exchange accounts combined, making it a valuable tool for chartered accountants and VDA Investors alike.
        </p>
    },
    {
        id: 7,
        Question: <p>Do I have to pay tax if I lose money trading crypto?</p>,
        Answer: <p>In Australia, when your cryptocurrency loses value, it's classified as a capital loss. This means you won't have to pay taxes on that loss. It's a way to offset any gains you might have made in other investments for tax purposes.

        </p>
    },
    {
        id: 8,
        Question: <p>Is using a Crypto tax calculator safe?</p>,
        Answer: <p>KoinX provides a reliable crypto tax calculator that can assist you in determining your tax obligations for cryptocurrency transactions. This tool accurately tracks your portfolio on your preferred exchange and computes your gains or losses based on the crypto amounts and prices involved.
        </p>
    },
    {
        id: 9,
        Question: <p>What exchanges do you Support?</p>,
        Answer: <p>KoinX seamlessly integrates with a wide array of exchanges, including Binance, CoinSpot, MEXC, Bybit, Coinbase, Kraken, and numerous others. It effortlessly consolidates cryptocurrency transactions from over 180+ chains, exchanges, and wallets, presenting them in a user-friendly unified dashboard.
        </p>
    },
    {
        id: 10,
        Question: <p>Do I have to pay tax if I transfer crypto from one wallet to another?</p>,
        Answer: <p>Transferring cryptocurrency from one wallet to another that you own in Australia is not subject to tax, as it is not recognised as a taxable event, and capital gains tax is not triggered. Nevertheless, it's essential to keep detailed records of these transfers, particularly if you are utilising automated crypto tax software like KoinX. KoinX, as a reliable crypto tax software, can streamline the process, making it easier to maintain accurate and efficient tax records and reporting while ensuring compliance with Australian tax regulations.
        </p>,
    },
    {
        id: 11,
        Question: <p>How do I use a cryptocurrency tax calculator?</p>,
        Answer: <div>
            In order to use a cryptocurrency tax calculator, you need to input information about your cryptocurrency transactions. After you enter your information, the cryptocurrency tax calculator will calculate the gain or loss on every transaction.
            <br />
            This includes:
            <ul className='list-decimal pl-4 pt-2'>
                <li>The financial year you want to calculate your taxes for. </li>
                <li>The country you want to calculate your taxes for.</li>
                <li>The purchase price of the coin.</li>
                <li>The sale price of the coin.</li>
            </ul>
            <br />
            You will get results that mention the following:
            <ul className='list-decimal pl-4 pt-2 pb-2'>
                <li>The total profit/loss you made.</li>
                <li>The tax you’re liable to pay.</li>
            </ul>
            <p>
                Still have doubts?{' '}
                <a href="/" className="flex-col font-bold text-blue-700 hover:text-blue-800 underline">
                    Consult with a crypto taxation expert!
                </a>{' '}

            </p>
        </div>,
    },
    {
        id: 12,
        Question: <p>How do I calculate my crypto tax in Australia?</p>,
        Answer: <div>
            To calculate your crypto tax in Australia accurately, you need to consider both income tax and capital gains tax.
            <br />
            <p className='py-3'>
                <span className='font-bold text-gray-700'>Income Tax</span>
                <br />
                In Australia, when an individual (investor) sells, trades, spends, earns (salary, mining, interest) or gifts cryptocurrency, the net capital gain is taxed at the same rate as their Income Tax. This tax rate is determined based on their total income for the tax year.

            </p>
            <span>ATO Individual Tax Rates 2022-2023</span>
            <table className=" w-full sm:w-1/2 text-center border text-gray-500 border-gray-500 my-3">
                <thead className='border border-gray-500'>
                    <tr className="text-[#0B1426]">
                        <th className="border border-gray-500 px-2 py-2 text-bold">Income</th>
                        <th className="border border-gray-500 px-2 py-2 text-bold">Tax Rate</th>
                    </tr>
                </thead>
                <tbody className='border border-gray-500'>
                    <tr>
                        <td className="border border-gray-500 px-2 py-2">$0-$18,200</td>
                        <td className="border border-gray-500 px-2 py-2">0%</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-500 px-2 py-2">$18,201-$45,000</td>
                        <td className="border border-gray-500 px-2 py-2">Nil 19% of the excess over $18,200</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-500 px-2 py-2">$45,001-$120,000</td>
                        <td className="border border-gray-500 px-2 py-2">$5,092 + 32.5% of the excess over $45,000</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-500 px-2 py-2">$120,001-$180,000</td>
                        <td className="border border-gray-500 px-2 py-2">$29,467 + 37% of the excess over $120,000</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-500 px-2 py-2">$180,001+</td>
                        <td className="border border-gray-500 px-2 py-2">$51,667 + 45% of the excess over $180,000</td>
                    </tr>
                </tbody>
            </table>
            <br />

            <span className='pt-4 font-bold text-gray-700'>Capital Gains Tax (CGT)</span>
            <p className='py-2'>
                Calculate your capital gains or losses on cryptocurrency transactions using this formula:
            </p>
            <span className='font-bold text-gray-700 '>Capital Gain/Loss = Capital Proceeds - Cost Basis
            </span>
            <br />
            <br />
            <p>
                <span className='font-bold text-gray-700 leading-8 '>
                    Note: 
                    <br />
                    Capital Proceeds (sale value or any form of receipt) <br />
                    Cost Basis (costs incurred to acquire, hold, and dispose of the asset) <br />
                </span>
                <br />

                Your tax rate depends on whether you held the cryptocurrency for more than 12 months (long-term) or less (short-term). Long-term gains receive a 50% discount.

                Calculate your Australian crypto taxes accurately and effortlessly with KoinX's free crypto tax calculator for Australia. It simplifies the process, ensuring compliance with the latest tax rates and regulations making crypto tax calculations easy and precise.

            </p>
            <br />



        </div>,
    },
    


];
