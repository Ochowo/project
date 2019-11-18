import React from 'react';
import mainData from './company-data';
const Modal = ({data, close}) => {
    const company = mainData.filter(d => d.name === data);
    const singleCompany = company[0];
    const mileStones = singleCompany.milestones
    const tag = singleCompany.target;
    const sdgs = singleCompany.sdgTarget;
return (
    <div className="modal">
        <div className="modal-content">
    
    <span className="close" onClick={close}>&times;</span>
    <h2>{singleCompany.name}</h2>
    <div className="start">Start date: &nbsp;{singleCompany.start}</div>
    <div className="split-container">   <div className="split">  <h2>Milestones</h2>
    <ul className="milestones">
    {mileStones && mileStones.map(milestone => {
                return (
                    <li key={milestone} className="textt">{milestone}</li>
                )
              })}
    </ul></div>
    <div className="split"> <h2>Contact</h2>
    <div className="contact">{singleCompany.Contact}</div>
    <h3>Target</h3>
    <ul className="tag">
    {tag && tag.map(target => {
                return (
                    <li key={target} className="textt">{target}</li>
                )
              })}
    </ul>
    <h2 className="texx">SDG Target</h2>
    <ul className="sdg">
    {sdgs && sdgs.map(sdg => {
                return (
                    <li key={sdg} className="textt">{sdg}</li>
                )
              })}
    </ul></div>
  </div>
 
   
  </div>
  </div>
    
);
}
export default Modal;