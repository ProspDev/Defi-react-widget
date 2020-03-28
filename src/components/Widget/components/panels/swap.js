import React, { useCallback, useState, useEffect, Fragment } from 'react';

import styled from "styled-components";

import { useBancor, INITIAL_TOKENS, EXCLUDE_TOKENS } from "../../../../contexts/bancor";
import { getIcon, getDefaultTokenAddress } from "../../../../utils/token";

import { HEADLINES, PAGES, SLIPPAGE_RATE } from "../../../../constants";

import loadingIcon from "../../../../../assets/loading.gif"


const SwapPanel = (props) => {

    const { web3ReactContext, handleProcessing, clickCount, halt, handleTextStatus } = props;

    const [tokens, setTokens] = useState(INITIAL_TOKENS.map(token => [token, getDefaultTokenAddress(token), 0]));

    const [liquidityPools, setLiquidityPools] = useState([]);

    const [isSourceModalOpen, setSourceModal] = useState(false);
    const [isDestinationModalOpen, setDestinationModal] = useState(false);

    const {
        loading,
        parseToken,
        convert,
        listConversionTokens,
        getRate,
        getTokenDecimal,
        getETHBalance,
        listLiquidityPools,
        getLiquidityPool,
        getTokenName,
        getTokenBalance,
        generatePath
    } = useBancor(web3ReactContext);

    const [source, setSource] = useState(tokens[1]);
    const [destination, setDestination] = useState(tokens[0]);

    const [sourceBalance, setSourceBalance] = useState("0.0");
    const [isLoadingBalance, setLoadingBalance] = useState(true);
    const [rate, setRate] = useState("1");
    const [fee, setFee] = useState(0);
    const [path, setPath] = useState([]);
    const [isLoadingRate, setLoadingRate] = useState(true);

    const [sourceAmount, setSourceAmount] = useState(0);
    const [destinationAmount, setDestinationAmount] = useState(0);

    useEffect(() => {
        if (halt !== undefined) {
            setLoadingBalance(false);
            setLoadingRate(false);
        }
    }, [halt])

    useEffect(() => {
        // Handle click event from Parent Component
        onConvert();
    }, [clickCount])

    useEffect(() => {

        (async () => {
            if (!loading) {
                // List all available tokens to trade
                let tokenList = [];
                try {
                    const available = await listConversionTokens();
                    const finalList = INITIAL_TOKENS.map(name => available.find(item => item[0] === name));

                    for (let token of available) {
                        if ((finalList.find(item => item[0] === token[0]) === undefined) && (token[0] !== "NAME_ERROR") && (EXCLUDE_TOKENS.indexOf(token[0]) === -1)) {
                            finalList.push(token);
                        }
                    }
                    console.log("final token list : ", finalList);
                    setTokens(finalList.map(item => [item[0], item[1], 0]));
                    tokenList = finalList;
                } catch (error) {
                    console.log("list tokens error : ", error);
                }
                // List all liquidity pools
                const poolList = await listLiquidityPools();
                setLiquidityPools(poolList);

                // Load reserves balance
                console.log("Find a liquidity depth on all tokens");
                let poolPromises = [];
                for (let pool of poolList) {
                    poolPromises.push(getLiquidityPool(pool.converterAddress));
                }

                Promise.all(poolPromises).then(
                    poolResult => {

                        let listWithReserveBalance = [];

                        for (let token of tokenList) {
                            const tokenAddress = token[1];
                            const filtered = poolResult.reduce((array, items) => {
                                for (let item of items) {
                                    if (item[1] === tokenAddress) {
                                        array.push(item)
                                    }
                                }
                                return array;
                            }, []);

                            const totalReserves = filtered.reduce((result, items) => {
                                result = result + Number(items[0]);

                                return result;
                            }, 0)
                            listWithReserveBalance.push([token[0], token[1], Math.round(totalReserves)]);
                            // reserves[token[0]] = totalReserves;

                        }
                        setTokens(listWithReserveBalance);




                    }
                )

                /*
                let tokenNamePromise = [];
                for (let pool of poolList) {
                    tokenNamePromise.push(getTokenName(pool.smartTokenAddress))
                }

                Promise.all(tokenNamePromise).then(
                    tokenNameResult => {
                        console.log("tokenNameResult : ", tokenNameResult);
                        let reservePromise = [];
                        
                        for (let pool of poolList) {
                            reservePromise.push(getLiquidityPool(pool.converterAddress));
                        }
                        Promise.all(reservePromise).then(
                            poolResult => {
                                console.log("poolResult : ", poolResult);
                            }
                        )
                    }
                )
                */




            }
        })()



    }, [loading])

    const onConvert = useCallback(async () => {

        if ((source[1] !== "") && (path.length > 0) && (sourceAmount !== 0)) {
            handleProcessing(true);
            console.log("start convert...", source, path, sourceAmount);

            try {
                const sourceDecimal = await getTokenDecimal(source[1]);
                const rateResult = await getRate(path, `${sourceAmount}`, sourceDecimal);
                const detinationAmount = rateResult[0];
                // const feeAmount = rateResult[1];
                const slipRate = SLIPPAGE_RATE; // 3%
                console.log("detinationAmount : ", detinationAmount.toString());

                const tx = await convert(path, source[1], `${sourceAmount}`, sourceDecimal, detinationAmount, slipRate, source[0] === "ETH", destination[0] === "ETH");

                if (tx.hash) {
                    const { hash } = tx;
                    handleTextStatus(`Your transaction ${hash} is being processed.`);

                    await tx.wait(); // shows an error if it's failed
                    console.log("done...");

                }




            } catch (error) {
                console.log("onConvert error : ", error)
            }
            handleTextStatus(HEADLINES.DISCLAIMER[PAGES.SWAP]);
            handleProcessing(false);
            setTimeout(async () => {
                await updateBalance(source);
            }, 5000)


        }

    }, [sourceAmount, source, destination, path, web3ReactContext])




    const onSourceChange = useCallback((newSource) => {

        if (newSource[0] === destination[0]) {
            alert("Can't choose the same token")
            return;
        }

        setSource(newSource);

    }, [destination])


    const onDestinationChange = useCallback((newDestination) => {

        if (newDestination[0] === source[0]) {
            alert("Can't choose the same token")
            return;
        }

        setDestination(newDestination);

    }, [source])

    useEffect(() => {

        if (!isLoadingBalance && !isLoadingRate) {
            handleProcessing(false)
        } else if (isLoadingBalance || isLoadingRate) {
            handleProcessing(true)
        }

    }, [isLoadingBalance, isLoadingRate])

    useEffect(() => {

        if (source[1] !== '' && !loading) {
            (async () => {
                await updateBalance(source);
            })();

        }
    }, [source, loading])

    const toggleSourceModal = useCallback(() => {
        setSourceModal(!isSourceModalOpen);

    }, [isSourceModalOpen]);

    const toggleDestinationModal = useCallback(() => {
        setDestinationModal(!isDestinationModalOpen);

    }, [isDestinationModalOpen])

    const updateBalance = useCallback(async (source) => {

        console.log("checking balance of : ", source[1]);
        setLoadingBalance(true);

        try {

            if (source[0] === "ETH") {
                console.log("Check native ETH...");
                const result = await getETHBalance();
                console.log(result.toString());
                setSourceBalance(`${Number(result).toFixed(4)}`);
            } else {
                const result = await getTokenBalance(source[1]);
                console.log(result.toString());
                setSourceBalance(`${Number(result).toFixed(4)}`);
            }


        } catch (error) {
            console.log("loading rate error  ;", error);
        }


        setLoadingBalance(false);

    }, [web3ReactContext])

    useEffect(() => {

        if (source[1] !== '' && destination[1] !== '' && !loading && liquidityPools.length > 0) {
            console.log(`looking for an exchange rate on the pair ${source[0]}/${destination[0]} `);
            (async () => {
                setLoadingRate(true);
                try {
                    const path = await generatePath(source[1], destination[1], liquidityPools);
                    console.log("path : ", path);
                    const sourceDecimal = await getTokenDecimal(source[1]);
                    const rateResult = await getRate(path, "1", sourceDecimal);
                    const rate = rateResult[0];
                    const fee = rateResult[1];
                    const destinationDecimal = await getTokenDecimal(destination[1]);
                    const finalRate = parseToken(rate, destinationDecimal);
                    const finalFee = parseToken(fee, destinationDecimal);
                    setRate(`${Number(finalRate).toFixed(6)}`);
                    setFee(Number((100 * Number(finalFee)) / Number(finalRate)));
                    setPath(path);

                    updateDestinationAmount(finalRate);

                } catch (error) {
                    console.log("Find a shortest path error : ", error);
                }
                setLoadingRate(false);

            })();
        }

    }, [source, destination, loading, liquidityPools])

    const handleChange = useCallback((e) => {
        e.preventDefault();

        if (isLoadingRate) {
            return;
        }
        const regexp = /^[0-9]*(\.[0-9]{0,4})?$/;

        if (e.target.id === 'sourceInput') {
            const value = regexp.test(e.target.value) ? (e.target.value) : sourceAmount;
            setSourceAmount(value);
            const result = (Number(value) * Number(rate)).toFixed(4);
            setDestinationAmount(result);
        } else {
            const value = regexp.test(e.target.value) ? (e.target.value) : destinationAmount;
            setDestinationAmount(value);
            const result = (Number(value) * Number(rate)).toFixed(4);
            setSourceAmount(result);

        }





    }, [rate, isLoadingRate, sourceAmount, destinationAmount])

    const updateDestinationAmount = useCallback((rate) => {

        if (Number(destinationAmount) !== 0) {
            const result = (Number(sourceAmount) * Number(rate)).toFixed(4);
            setDestinationAmount(result);
        }

    }, [sourceAmount, destinationAmount]);

    const setSourceAmountByPercentage = useCallback((percent, amount) => {

        if (isLoadingRate) {
            return;
        }

        const newAmount = (Number(amount) * percent).toFixed(4);
        setSourceAmount(newAmount);
        setDestinationAmount((newAmount * Number(rate)).toFixed(4));

    }, [rate, isLoadingRate])

    return (
        <Fragment>
            <Column>
                <h3>Pay</h3>

                <InputGroup>
                    <InputGroupIcon>
                        <TokenLogo src={getIcon(source[0])} alt={source[0]} />
                    </InputGroupIcon>
                    <InputGroupDropdown onClick={() => toggleSourceModal()} active={isSourceModalOpen}>

                        <span>
                            {source[0]}&#9660;
                        </span>


                        <div className="dropdown-content">
                            <table>
                                <tbody>
                                    {tokens.map((item, index) => {

                                        return (
                                            <tr onClick={() => onSourceChange(item)} key={index}>
                                                <td width="25%">
                                                    <TokenLogo src={getIcon(item[0])} alt={item[0]} />
                                                </td>
                                                <td>
                                                    {item[0]}
                                                    <ReservePoolAmount inactive={item[2] === 0}>
                                                        SUPPLY{` `}:{` `}{item[2]}{` `}{item[0]}
                                                    </ReservePoolAmount>
                                                </td>
                                            </tr>
                                        )
                                    })}


                                </tbody>
                            </table>
                        </div>




                    </InputGroupDropdown>
                    <InputGroupArea>
                        <input value={sourceAmount} id="sourceInput" onChange={handleChange} placeholder="0.00" type="number" min="0" step="0.01" pattern="^\d+(?:\.\d{1,2})?$" />
                    </InputGroupArea>
                </InputGroup>
                <AccountSection>
                    <AccountLeft>
                        BALANCE {sourceBalance == "0.0" ? sourceBalance : <Percentage onClick={() => setSourceAmountByPercentage(1, sourceBalance)} >{sourceBalance}</Percentage>}{` `}{isLoadingBalance && (<img src={loadingIcon} width="12px" height="12px" />)}
                    </AccountLeft>
                    <AccountRight>
                        {sourceBalance !== "0.0" && (
                            <span>
                                <Percentage onClick={() => setSourceAmountByPercentage(0.25, sourceBalance)} >25%</Percentage>{` `}
                                <Percentage onClick={() => setSourceAmountByPercentage(0.5, sourceBalance)}>50%</Percentage>{` `}
                                <Percentage onClick={() => setSourceAmountByPercentage(1, sourceBalance)}>100%</Percentage>
                            </span>
                        )}
                    </AccountRight>
                </AccountSection>
            </Column>
            <Column>
                <h3>Receive</h3>


                <InputGroup>
                    <InputGroupIcon>
                        <TokenLogo src={getIcon(destination[0])} alt={destination[0]} />
                    </InputGroupIcon>
                    <InputGroupDropdown onClick={() => toggleDestinationModal()} active={isDestinationModalOpen}>
                        <span>{destination[0]}&#9660;</span>

                        <div className="dropdown-content">
                            <table>
                                <tbody>
                                    {tokens.map((item, index) => {
                                        return (
                                            <tr onClick={() => onDestinationChange(item)} key={index}>
                                                <td width="25%">
                                                    <TokenLogo src={getIcon(item[0])} alt={item[0]} />
                                                </td>
                                                <td>
                                                    {item[0]}
                                                    <ReservePoolAmount inactive={item[2] === 0}>
                                                        SUPPLY{` `}:{` `}{item[2]}{` `}{item[0]}
                                                    </ReservePoolAmount>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>


                    </InputGroupDropdown>
                    <InputGroupArea>
                        <input value={destinationAmount} id="destinationInput" onChange={handleChange} placeholder="0.00" type="number" min="0" step="0.01" pattern="^\d+(?:\.\d{1,2})?$" />
                    </InputGroupArea>
                </InputGroup>
                <AccountSection>
                    <AccountLeft>
                        FEE {fee.toFixed(1)} %
                    </AccountLeft>
                    <AccountRight>
                        {isLoadingRate && (<img src={loadingIcon} width="12px" height="12px" />)}{` `}{`1 ${source[0].toUpperCase()} = ${rate} ${destination[0].toUpperCase()}`}
                    </AccountRight>
                </AccountSection>
            </Column>
        </Fragment>
    )
}

export default SwapPanel;

const Column = styled.div`
    h3 {
        font-size: 20px;
        font-weight: 500;
    }
`;

const AccountSection = styled.div`
    display: flex;
`;

const ReservePoolAmount = styled.div`
    font-size: 10px;
    font-weight: 500;
    word-wrap: break-word;
    padding: 4px;
    ${ props => props.inactive &&
        (`
            background-color: pink;
        `)

    }
`;

const AccountLeft = styled.div`
    margin-top: 8px;
    flex: 50%;
    font-size: 10px;
    font-weight: 500;
`;

const AccountRight = styled(AccountLeft)`
    text-align: right;
    
    
    
`;

const Percentage = styled.a`
    cursor: pointer;

    :hover {
        font-weight: 600;
    }

`;

const InputGroup = styled.div`
    display: table;
    border-collapse: collapse;
    width:100%;
    
    div {
        display: table-cell;
        border: 1px solid #eee;
        vertical-align: middle;
        
        :last-child {
            border: 1px solid #ddd;
        }
    }

    input {
        border: 0;
        display: block;
        width: 100%;
        padding: 8px;
        text-align:right;
        outline: none;
    }

`;

const InputGroupDropdown = styled.div`
    background:#eee;
    color: #777;
    padding: 0 12px;
    position: relative;
    display: inline-block;
    cursor: pointer;
    

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 220px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        height: 250px;
        overflow-y: scroll;
        padding-left: 10px;
        padding-right: 10px;
        

        a {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            :hover {
                background-color: #f1f1f1
            }

        }

        table {
            width: 100%;
        }
    
        th, td {
            padding-top: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid #ddd;
        }

    }

    ${props => props.active && (
        `
        .dropdown-content {
            display: block;
        }
        `
    )}

`
const InputGroupIcon = styled.div`
    background:#eee;
    color: #777;
    padding: 8px;
`;

const InputGroupArea = styled.div`
    width:100%;
`;

const InputArea = styled.div`

`;


const TokenLogo = styled.img`
    width : 34px;
    height : 32px; 
`