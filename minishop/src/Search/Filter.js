import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
//import CatalogProduct from './CatalogProduct';
export default class Filter extends React.Component {
state = {
    query: '',
    data: [],
    searchString:[],
    responseData:[]
}
handleInputChange = (event) => {
    this.setState({
        query: event.target.value
    },()=>{
  this.filterArray();
})
}
getData = () => {
    fetch('http://localhost/MinishopApi/DataselectionApi.php')
    .then(response => response.json())
    .then(responseData => {
        // console.log(responseData)
        this.setState({
            data:responseData,
            searchString:responseData
        })
    })
}

filterArray = () => {
    let searchString = this.state.query;
    let responseData = this.state.data;
    if(searchString.length > 0){
        // console.log(responseData[i].name);
        responseData = responseData.filter(searchString=>searchString.name);
this.setState({
   responseData
})}}
componentWillMount() {
    this.getData();
}

render() {
    return (
        <div className="searchForm">
            <form>
                <input type="text" id="filter" placeholder="Search for..." 
                 onChange={this.handleInputChange}/>
                 {
                    this.state.responseData.map((i) =>
                        <p>
                         <Link to={{pathname:"Searchproduct",
                        productParam:{productDeatils:i}}}>{i.name}</Link>
                        </p>
                       
                    
                    )
                }
            </form>
            
            <div>
                
            </div>
        </div>
    )
  }
}

