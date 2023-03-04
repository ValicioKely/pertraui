import React from "react";

import "./App.css"

const PRODUCTS = [
    { category : "sporting and goods" , price : "45$" , stocked : true , name : "Football"},
    { category : "sporting and goods" , price : "95$" , stocked : false , name : "Basketball"},
    { category : "sporting and goods" , price : "15$" , stocked : true , name : "Baseball"},
    { category : "Electronics" , price : "5$" , stocked : true , name : "Iphone"},
    { category : "Electronics" , price : "50$" , stocked : true , name : "Aquos"},
    { category : "Electronics" , price : "5$" , stocked : true , name : "Gp"},
];

class FilterableProductTable extends React.Component{

    constructor(props) {
        super(props);
    }
    render() {
        const {search , table} = this.props;
        return (
            <div className="App-header">
                <div>
                    {search}
                </div>

                <div>
                    {table}
                </div>
            </div>
        )
    }

}

class Searchbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filter : ''
        }
    }

    handleSearch = (e) => {
        this.setState(
            {
                filter : e.target.value
            }
        )
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.filter} onChange={this.handleSearch}  placeholder="Search"/>
            </div>
        )
    }
}





function ProductTable ({products ,row}) {
    return (
        <div>
            <table className= "table">
                <thead >
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody >
                {products.forEach(product => {
                    if(product.category === "Electronics"){

                    }
                })}
                </tbody>
            </table>
        </div>
    );
}


function ProductRow ({product}) {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    )
}


class ProductCategoryRow extends React.Component{

    render() {
        return (
            <div>
                row of categorised product
            </div>
        );
    }
}






class App extends React.Component {

    render() {
        return (
            <FilterableProductTable
                search ={<Searchbar/>}
                table ={<ProductTable products = {PRODUCTS} row={<ProductRow/>}/>}
            />
        )
    }
}

export default App;