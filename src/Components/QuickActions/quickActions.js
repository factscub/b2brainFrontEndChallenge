import React from 'react'
import { Link } from 'react-router-dom'
import actionData from '../../RawData/quickActionsData'
import '../../Assets/Styles/Main/QuickActions/quickActions.css'

export default function QuickActions() {
    return (
            <div className='quickActions'>
                <div className='actionHeading' >Quick Actions</div>
                <div className='actionCont' >
                    {
                        actionData.map(action => (
                            <Link className='action' to={`#${action}`} key={action} >{action}</Link>

                        ))
                    }
                </div>
            </div>
    )
}
