import React from 'react'
export default class SideBar extends React.Component{
    render(){
        return(
            <div className="col-md-4 col-lg-2">
            <div className="sidebar">
                    <div className="sidebar-box-2">
                        <h2 className="heading">Categories</h2>
                        <div className="fancy-collapse-panel">
          <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
             <div className="panel panel-default">
                 <div className="panel-heading" role="tab" id="headingOne">
                     <h4 className="panel-title">
                         <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Men's Shoes
                         </a>
                     </h4>
                 </div>
                 <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                     <div className="panel-body">
                         <ul>
                             <li><a href="#">Sport</a></li>
                             <li><a href="#">Casual</a></li>
                             <li><a href="#">Running</a></li>
                             <li><a href="#">Jordan</a></li>
                             <li><a href="#">Soccer</a></li>
                             <li><a href="#">Football</a></li>
                             <li><a href="#">Lifestyle</a></li>
                         </ul>
                     </div>
                 </div>
             </div>
             <div className="panel panel-default">
                 <div className="panel-heading" role="tab" id="headingTwo">
                     <h4 className="panel-title">
                         <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Women's Shoes
                         </a>
                     </h4>
                 </div>
                 <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                     <div className="panel-body">
                        <ul>
                             <li><a href="#">Sport</a></li>
                             <li><a href="#">Casual</a></li>
                             <li><a href="#">Running</a></li>
                             <li><a href="#">Jordan</a></li>
                             <li><a href="#">Soccer</a></li>
                             <li><a href="#">Football</a></li>
                             <li><a href="#">Lifestyle</a></li>
                        </ul>
                     </div>
                 </div>
             </div>
             <div className="panel panel-default">
                 <div className="panel-heading" role="tab" id="headingThree">
                     <h4 className="panel-title">
                         <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Accessories
                         </a>
                     </h4>
                 </div>
                 <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                     <div className="panel-body">
                        <ul>
                             <li><a href="#">Jeans</a></li>
                             <li><a href="#">T-Shirt</a></li>
                             <li><a href="#">Jacket</a></li>
                             <li><a href="#">Shoes</a></li>
                         </ul>
                     </div>
                 </div>
             </div>
             <div className="panel panel-default">
                 <div className="panel-heading" role="tab" id="headingFour">
                     <h4 className="panel-title">
                         <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseThree">Clothing
                         </a>
                     </h4>
                 </div>
                 <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                     <div className="panel-body">
                        <ul>
                             <li><a href="#">Jeans</a></li>
                             <li><a href="#">T-Shirt</a></li>
                             <li><a href="#">Jacket</a></li>
                             <li><a href="#">Shoes</a></li>
                         </ul>
                     </div>
                 </div>
             </div>
          </div>
       </div>
                    </div>
                    <div className="sidebar-box-2">
                        <h2 className="heading">Price Range</h2>
                        <form method="post" className="colorlib-form-2">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label for="guests">Price from:</label>
                    <div className="form-field">
                      <i className="icon icon-arrow-down3"></i>
                      <select name="people" id="people" className="form-control">
                        <option value="#">1</option>
                        <option value="#">200</option>
                        <option value="#">300</option>
                        <option value="#">400</option>
                        <option value="#">1000</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label for="guests">Price to:</label>
                    <div className="form-field">
                      <i className="icon icon-arrow-down3"></i>
                      <select name="people" id="people" className="form-control">
                        <option value="#">2000</option>
                        <option value="#">4000</option>
                        <option value="#">6000</option>
                        <option value="#">8000</option>
                        <option value="#">10000</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </form>
                    </div>
                </div>
        </div>
        )
    }
}