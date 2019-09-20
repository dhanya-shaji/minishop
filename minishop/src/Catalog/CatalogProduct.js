import React from 'react'
import SideBar from './SideBar'
export default class CatalogProduct extends  React.Component{
    render()
    {
        return(
  <section class="ftco-section bg-light">
     <div class="container">
         <div class="row">
        <div class="col-md-8 col-lg-10 order-md-last">
        <div class="row">
        {this.props.data.map((product,index)=>(
                <div class="col-sm-12 col-md-12 col-lg-4 ftco-animate d-flex">
                <div class="product d-flex flex-column">
                <a href="#" class="img-prod"><img class="img-fluid" src={product.productImage} 
                alt="Colorlib Template"/>
                 <div class="overlay"></div>
                 </a>
                <div class="text py-3 pb-4 px-3">
                   <div class="d-flex">
                    <div class="cat">
                           <span>Lifestyle</span>
                        </div>
                 <div class="rating">
                 <p class="text-right mb-0">
                   <a href="#"><span class="ion-ios-star-outline"></span></a>
                    <a href="#"><span class="ion-ios-star-outline"></span></a>
                    <a href="#"><span class="ion-ios-star-outline"></span></a>
                   <a href="#"><span class="ion-ios-star-outline"></span></a>
                    <a href="#"><span class="ion-ios-star-outline"></span></a>
                  </p>
                  </div>
                 </div>
                <h3><a href="#">{product.productTitle}</a></h3>
                <div class="pricing">
                <p class="price"><span>{product.productPrize}</span></p>
                    </div>
                      <p class="bottom-area d-flex px-3">
                     <a href="#" class="add-to-cart text-center py-2 mr-1"><span>Add to cart <i class="ion-ios-add ml-1"></i></span></a>
                    <a href="#" class="buy-now text-center py-2">Buy now<span><i class="ion-ios-cart ml-1"></i></span></a>
                      </p>
                     </div>
                     </div>
                      </div>
                     ))}
      </div>
       </div>
                 
      <SideBar/>  
      </div>
        </div>
    </section>
        )
    }
}