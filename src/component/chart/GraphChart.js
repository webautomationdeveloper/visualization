import Linechart from './Linechart';
import './graphchart.css'

const GraphChart=({data,title,xaxis,line})=> {
    return (
        <div className='chart'>
            <div className='chartTitle'>
                <h3>{title}</h3>
            </div>
            <Linechart data={data} xaxis ={xaxis} line={line} />
        </div>
    )
}

export default GraphChart;
