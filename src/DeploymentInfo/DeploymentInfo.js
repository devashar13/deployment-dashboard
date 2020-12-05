import React from 'react';
import './DeploymentInfo.css';
import Terminal from 'terminal-in-react';
import DeploymentInfoItem from './DeploymentInfoItem';

function DeploymentInfo() {
    
    return (
        <div className="deploymentInfo">
            <div className="deploymentInfo__left">
                    <h2>Container: ContainerName</h2>
                    <DeploymentInfoItem/>
                    <DeploymentInfoItem/>
                    <DeploymentInfoItem/>
            </div>
            
            <div className="deploymentInfo__right">
                
            </div>
            
            
        </div>
    )
}

export default DeploymentInfo;
