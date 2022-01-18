import './featuredInfo.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

import React from 'react'

function Featuredinfo() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className='featuredTitle'>Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney"> $2415</span>
                    <span className="featureMoneyRate">-11.4<ArrowDownward className='featureIcon negative'/></span>
                </div>
                <div className="featuredSub">Compared to last Month</div>
            </div>


            <div className="featuredItem">
                <span className='featuredTitle'>Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney"> $1415</span>
                    <span className="featureMoneyRate">-11.4<ArrowDownward className='featureIcon negative'/></span>
                </div>
                <div className="featuredSub">Compared to last Month</div>
            </div>


            <div className="featuredItem">
                <span className='featuredTitle'>Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney"> $6415</span>
                    <span className="featureMoneyRate">+15.4<ArrowUpward className='featureIcon'/></span>
                </div>
                <div className="featuredSub">Compared to last Month</div>
            </div>
            
        </div>
    )
}

export default Featuredinfo
