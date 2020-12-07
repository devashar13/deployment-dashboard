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
                <div className="deploymentInfo__logs">
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque alias possimus quisquam! Quam commodi doloribus laboriosam impedit delectus ad unde culpa, quod cumque odio numquam? Eius, commodi! Dolorem, atque totam?
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ducimus laudantium corporis laborum quae odit repellat dolorem delectus consequatur? Unde repellat numquam hic enim facere quas vitae consectetur quibusdam aut?
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, quia fugit. Accusantium, vel quo dolores voluptate accusamus commodi quidem debitis, doloremque distinctio sequi, saepe possimus temporibus aliquam ab quasi dolorem.
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi aperiam veritatis omnis totam illo tenetur quos natus porro. Perspiciatis ratione expedita autem repudiandae officiis excepturi facilis, illo veniam architecto quidem!
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis possimus quo mollitia, in delectus nesciunt reprehenderit consequatur vel quas laudantium nam facilis animi esse rerum, corrupti voluptas blanditiis reiciendis similique?
                </div>
            </div>
            
            
        </div>
    )
}

export default DeploymentInfo;
