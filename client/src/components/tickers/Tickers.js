import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import io from 'socket.io-client';
import {setTickersValues} from "../../redux";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Tickers.css';
import BarChart from "../chart/BarChart";

function Tickers() {

    const tickerStore = useSelector(({tickers}) => tickers)
    const dispatch = useDispatch()

    useEffect(() => {
        const socket = io.connect('ws://localhost:4000')
        socket.emit('start');
        socket.on('ticker', function (response) {
            console.log(response)
            const arr = dispatch(setTickersValues(response))
        })
    }, [])

    return (
        <div>
            <div className='container'>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">ticker</th>
                        <th scope="col">exchange</th>
                        <th scope="col">price</th>
                        <th scope="col">change</th>
                        <th scope="col">change_percent</th>
                        <th scope="col">divident</th>
                        <th scope="col">yield</th>
                        <th scope="col">last_trade_time</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(tickerStore) ? tickerStore.map((item) => {
                        return <tr>
                            <td>{item.ticker}</td>
                            <td>{item.exchange}</td>
                            <td>{item.price}</td>
                            <td>{item.change}</td>
                            <td>{item.change_percent}</td>
                            <td>{item.dividend}</td>
                            <td>{item.yield}</td>
                            <td>{item.last_trade_time}</td>
                        </tr>
                    }) : []}

                    </tbody>
                </table>
            </div>
            <BarChart data={tickerStore}/>
        </div>)
}

export default Tickers;
