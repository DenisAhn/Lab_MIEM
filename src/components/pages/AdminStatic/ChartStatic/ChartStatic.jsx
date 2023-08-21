import css from './ChartStatic.module.scss'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { useMemo } from 'react'
import { Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
// Store
import { selectBookings } from '@/store/static'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
}

const ChartStatic = () => {
  const chartData = useSelector(selectBookings)

  const data = useMemo(
    () => ({
      datasets: [
        {
          data: chartData,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    }),
    [chartData]
  )

  return (
    <div className={css.chart}>
      <Line options={options} data={data} height={200} width={500} />
    </div>
  )
}

export default ChartStatic
