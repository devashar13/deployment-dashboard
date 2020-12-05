import { CheckBox } from '@material-ui/icons'
import React from 'react'
import './ProjectInfo.css'
function ProjectInfo() {
    return (
        <div className="projectInfo">
            <div className="projectInfo__upper">
                <div className="projectInfo__upperleft">
                    <h3>Stack:NewTestApp</h3>
                </div>
                <div className="projectInfo__upperright">
                    <div className="projectInfo__status">
                        <h4>Active</h4>
                    </div>
                </div>
            </div>
            <div className="projectInfo__lower">
                <div className="projectInfo__lowerLeft">
                    <input type="checkbox" name="tick" id="tick"/>
                    
                    <div className="projectInfo__status">
                        <h4>Running</h4>
                    </div>
                    <h3>Name Of Cont</h3>
                </div>
                <div className="projectInfo__lowerRight">
                    <div className="projectInfo__imageInfo">
                        <h3>
                            busyBox  
                        </h3>
                        <div className="projectInfo__imageInfoTime">
                            <span>id/8000:8000/created 5 mins ago</span>
                            
                        </div>
                    </div>
                    <h3>Lowerright</h3>
                </div>
            </div>
        </div>
    )
}

export default ProjectInfo
