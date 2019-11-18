import React from 'react';
import mainData from './company-data';
import { Link } from 'react-router-dom';
import Modal from './modal';

class Company extends React.Component {
    constructor(){
        super()
        this.state  = {
        show: false,
        data: '',
        }
    }

  handleClick(e) {
      this.setState({
          show: true,
          data: e.target.innerText,
      })
  }
  closeModal(e) {
    this.setState({
        show: false,
    })
}
    render(){
        const { show, data } = this.state;
        if(show){
        return(
        <div className="dashboard">
        <div className="buttons topnav">
          <Link to='/dashboard'><button className="sdg btn">SDGs</button></Link>
          <Link to='/company'><button className="sdg active btn" >Fortune 1000</button></Link>
        </div>
      <div className="main-body">
      <h1 className="gtitle">Fortune 1000</h1>
        <div className="goals">
            {mainData.map(data =>{
                return(
                    <div key={data.name} className="class-wrap">
                <button className="cardd card2" onClick={e => this.handleClick(e)}>
      <div className="text">{data.name}</div>
  </button>
            </div>
            );
            })}
        </div>
        </div>
        <Modal data={data} close={e => this.closeModal(e)}/>
        </div>
        )
        }
        return(
            <div className="dashboard">
            <div className="buttons topnav">
              <Link to='/dashboard'><button className="sdg btn">SDGs</button></Link>
              <Link to='/company'><button className="sdg active btn" >Fortune 1000</button></Link>
            </div>
          <div className="main-body">
          <h1 className="gtitle">Fortune 1000</h1>
          <div className="text">Click on logo to view more detailsabout each company</div>
            <div className="goals">
                {mainData.map(data =>{
                    return(
                        <div key={data.name} className="class-wrap">
                    <button className="cardd card2" onClick={e => this.handleClick(e)}>
          <div className="text">{data.name}</div>
      </button>
                </div>
                );
                })}
            </div>
            </div>
            </div>
            )
    }
}

export default Company;