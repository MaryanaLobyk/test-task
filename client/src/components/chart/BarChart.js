import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

function BarChart({data}) {
    const prices = [ data[0]?.price, data[1]?.price, data[2]?.price, data[3]?.price, data[4]?.price, data[5]?.price]
    const dataChart = {
        labels: ['APPL', 'GOOGL', 'MSFT', 'AMZN', 'FB', 'TSLA'],
        datasets: [{
            label: 'Price',
            data: prices,
            backgroundColor: 'lightgrey',
            borderWidth: 4
        }],
    }

    return (
        <div>
            <Bar data={dataChart} options={{maintainAspectRatio: false}}></Bar>
        </div>
    )
}

export default BarChart;
