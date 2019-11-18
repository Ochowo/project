import React from 'react';
import Card from './card';
import './dashboard.css';
import mainData from './sdg';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
    constructor(){
        super()
        this.state = {
            data: {},
            companies: [],
            show: false,

        }
    }

  handleClick (e){
      //console.log(e.target.lastChild.innerHTML)
       //e.preventDefault();
       const inner = e.target.innerText;
       const { name } = e.target;
    const { value } = e.target;
    this.setState({ [name]: value });
const singleSdg = mainData.filter(d => d.title === inner); 
const newData = singleSdg[0];
const companyList = singleSdg[0].companies;
this.setState({
    data: newData,
    companies: companyList,
    show:true,
  });
  }
  render(){
      const { companies, data, show} = this.state;
      console.log(show)
      if(show === false){
      return (   
      <div className="dashboard">
        <div className="buttons topnav">
          <Link to='/dashboard'><button className="sdg active btn">SDGs</button></Link>
          <Link to="/company"><button className="sdg btn " >Fortune 1000</button></Link>
        </div>
        
      <div className="main-body">
      <h2>SDG Goals</h2>
          <h4 className="text top">Click on logo to view more details on each SDG target</h4>
        <div className="goals">
            <div className="class-wrap">
          <Card logo="SDG 1" text="NO POVERTY" onClick={e => this.handleClick(e)} name="SDG 1" value="SDG 1" color={'#ff0000'}/>
            </div>
            <div className="class-wrap">
          <Card logo="SDG 2" text="ZERO HUNGER" onClick={(e) => this.handleClick(e)} name="SDG 2" value ="SDG 2" color={'#dbb13a'}/>
          </div>
          <div className="class-wrap">
              <Card logo="SDG 3" text="GOOD HEALTH AND WELL-BEING" onClick={(e) => this.handleClick(e)} name="SDG 3" value="SDG 3" color={'#489644'}/>
          </div>
          <div className="class-wrap">
              <Card logo="SDG 4" text="QUALITY EDUCATION" onClick={(e) => this.handleClick(e)} name="SDG 4" value="SDG 4" color={'#ab2630'}/>
          </div>
          <div className="class-wrap">
              <Card logo="SDG 5" text="GENDER EQUALITY" onClick={(e) => this.handleClick(e)} name="SDG 5" value="SDG 5" color={'#dd4030'}/>
          </div>
          <div className="class-wrap">
              <Card logo="SDG 6" text="CLEAN WATER AND SANITATION" onClick={(e) => this.handleClick(e)} name="SDG 6" value="SDG 6" color={'#35b7d2'}/>
          </div>
          <div className="class-wrap">
              <Card logo="SDG 7" text="AFFORDABLE CLEAN ENERGY" onClick={(e) => this.handleClick(e)} name="SDG 7" value="SDG 7" color={'#f3bf2b'}/>
          </div>
          <div className="class-wrap">
              <Card logo="SDG 8" text="DECENT WORK AND ECONOMIC GROWTH" onClick={(e) => this.handleClick(e)} name="SDG 8" value="SDG 8" color={'#912240'}/>
          </div>
          <div className="class-wrap">
              <Card logo="SDG 9" text="INDUSTRY, INNOVATION AND INFRACSTRUCTURE" onClick={(e) => this.handleClick(e)} name="SDG 9" value="SDG 9" color={'#e36535'}/>
          </div>
          <div className="class-wrap">
              <Card logo="SDG 10" text="REDUCED INEQUALITIES" onClick={(e) => this.handleClick(e)} name="SDG 10" value="SDG 10" color={'#c91f5e'}/>
          </div>
          <div className="class-wrap">
              <Card logo="SDG 11" text="SUSTAINABLE CITIES AND COMMUNITIES" onClick={(e) => this.handleClick(e)} name="SDG 11" value="SDG 11"  color={'#ed9a36'}/>
         </div>
         <div className="class-wrap">
             <Card logo="SDG 12" text="RESPONSIBLE CONSUMPTION AND PRODUCTION" onClick={(e) => this.handleClick(e)} name="SDG 12" value="SDG 12"  color={'#bd9234'}/>
          </div>
          <div className="class-wrap">
              <Card logo="SDG 13" text="CLIMATE ACTION" onClick={(e) => this.handleClick(e)} name="SDG 13" value="SDG 13"  color={'#385623'}/>
          </div>
          <div className="class-wrap">
              <Card logo="SDG 14" text="LIFE BELOW WATER" onClick={(e) => this.handleClick(e)} name="SDG 14" value="SDG 14"  color={'#5b9bd5'}/>
          </div>
          <div className="class-wrap">
              <Card logo="SDG 15" text="LIFE ON LAND" onClick={(e) => this.handleClick(e)} name="SDG 15" value="SDG 15"  color={'#70ad47'}/>
          </div>
          <div className="class-wrap">
              <Card logo="SDG 16" text="PEACE, JUSTICE AND STRONG INSTITUTIONS" onClick={(e) => this.handleClick(e)} name="SDG 16" value="SDG 16"  color={'#f3bf2b'}/>
          </div>
          <div className="class-wrap">
              <Card logo="SDG 17" text="PARTNERSHIPS FOR THE GOALS" onClick={(e) => this.handleClick(e)} name="SDG 17" value="SDG 17"  color={'#44546a'}/>
        </div>
        </div>
      </div>
    </div>
    );
    }
    return (   
        <div className="dashboard">
          <div className="buttons topnav">
            <Link to='/dashboard'><button className="sdg active btn">SDGs</button></Link>
            <Link to='company'><button className="sdg btn" >Fortune 1000</button></Link>
          </div>
          
        <div className="main-body">
            <h1 className="gtitle">SDG Goals</h1>
          <div className="goals">
              <div className="class-wrap">
            <Card logo="SDG 1" text="NO POVERTY" onClick={e => this.handleClick(e)} name="SDG 1" value="SDG 1" color={'#ff0000'}/>
              </div>
              <div className="class-wrap">
            <Card logo="SDG 2" text="ZERO HUNGER" onClick={(e) => this.handleClick(e)} name="SDG 2" value ="SDG 2" color={'#dbb13a'}/>
            </div>
            <div className="class-wrap">
                <Card logo="SDG 3" text="GOOD HEALTH AND WELL-BEING" onClick={(e) => this.handleClick(e)} name="SDG 3" value="SDG 3" color={'#489644'}/>
            </div>
            <div className="class-wrap">
                <Card logo="SDG 4" text="QUALITY EDUCATION" onClick={(e) => this.handleClick(e)} name="SDG 4" value="SDG 4" color={'#ab2630'}/>
            </div>
            <div className="class-wrap">
                <Card logo="SDG 5" text="GENDER EQUALITY" onClick={(e) => this.handleClick(e)} name="SDG 5" value="SDG 5" color={'#dd4030'}/>
            </div>
            <div className="class-wrap">
                <Card logo="SDG 6" text="CLEAN WATER AND SANITATION" onClick={(e) => this.handleClick(e)} name="SDG 6" value="SDG 6" color={'#35b7d2'}/>
            </div>
            <div className="class-wrap">
                <Card logo="SDG 7" text="AFFORDABLE CLEAN ENERGY" onClick={(e) => this.handleClick(e)} name="SDG 7" value="SDG 7" color={'#f3bf2b'}/>
            </div>
            <div className="class-wrap">
                <Card logo="SDG 8" text="DECENT WORK AND ECONOMIC GROWTH" onClick={(e) => this.handleClick(e)} name="SDG 8" value="SDG 8" color={'#912240'}/>
            </div>
            <div className="class-wrap">
                <Card logo="SDG 9" text="INDUSTRY, INNOVATION AND INFRACSTRUCTURE" onClick={(e) => this.handleClick(e)} name="SDG 9" value="SDG 9" color={'#e36535'}/>
            </div>
            <div className="class-wrap">
                <Card logo="SDG 10" text="REDUCED INEQUALITIES" onClick={(e) => this.handleClick(e)} name="SDG 10" value="SDG 10" color={'#c91f5e'}/>
            </div>
            <div className="class-wrap">
                <Card logo="SDG 11" text="SUSTAINABLE CITIES AND COMMUNITIES" onClick={(e) => this.handleClick(e)} name="SDG 11" value="SDG 11"  color={'#ed9a36'}/>
           </div>
           <div className="class-wrap">
               <Card logo="SDG 12" text="RESPONSIBLE CONSUMPTION AND PRODUCTION" onClick={(e) => this.handleClick(e)} name="SDG 12" value="SDG 12"  color={'#bd9234'}/>
            </div>
            <div className="class-wrap">
                <Card logo="SDG 13" text="CLIMATE ACTION" onClick={(e) => this.handleClick(e)} name="SDG 13" value="SDG 13"  color={'#385623'}/>
            </div>
            <div className="class-wrap">
                <Card logo="SDG 14" text="LIFE BELOW WATER" onClick={(e) => this.handleClick(e)} name="SDG 14" value="SDG 14"  color={'#5b9bd5'}/>
            </div>
            <div className="class-wrap">
                <Card logo="SDG 15" text="LIFE ON LAND" onClick={(e) => this.handleClick(e)} name="SDG 15" value="SDG 15"  color={'#70ad47'}/>
            </div>
            <div className="class-wrap">
                <Card logo="SDG 16" text="PEACE, JUSTICE AND STRONG INSTITUTIONS" onClick={(e) => this.handleClick(e)} name="SDG 16" value="SDG 16"  color={'#f3bf2b'}/>
            </div>
            <div className="class-wrap">
                <Card logo="SDG 17" text="PARTNERSHIPS FOR THE GOALS" onClick={(e) => this.handleClick(e)} name="SDG 17" value="SDG 17"  color={'#44546a'}/>
          </div>
          </div>
          <div className="sdg-details">
              <div className="title1">{data.name}: &nbsp; &nbsp; &nbsp;</div>
              <div className="tite2">{data.title}</div>
              <div className="wrap">
               {companies && companies.map(company => {
                return (
                    
                    <button key={company} className="cardd card9">
                    <div className="textt">{company}</div>
                </button>
                )
              })}  
                </div>
          </div>
        </div>
      </div>
      );
  }
}
export default Dashboard;