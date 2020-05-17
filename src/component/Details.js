import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
              {(value)=>{
                const {id,company,img,info,price,title,inCart}=
                  value.detailProduct;
                  return(
                      <div className="container py-5">
                          <div className="row">
                              <div className="col-10 mx-auto text-center text-slantred text-blue my-5">
                                  <h1>{title}</h1>
                              </div>
                          </div>
                          <div className="row">
                              <div className=" col-10 mx-auto col col-md-6 my-3 ">
                                  <img src={img} className="img-fluid" alt="product"/>
                              </div>
                              <div className=" col-10 mx-auto col col-md-6 my-3 text-capitalize">
                                <h2>model : {title}</h2>
                                <h4 className=" text-title text-uppercase text-muted mt-3 mb-2"> made by :<span className="text-uppercase">
                                    {company}</span> </h4>
                                <h4 className=" text-blue">
                                    <strong>
                                        price : <span>$</span> 
                                        {price}
                                    </strong>
                                </h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                  some info   
                                </p>
                                <p className=" text-muted lead">{info}</p>
                                <div>
                                    <Link to="/OurProducts" className="ml-auto">
                                        <button className="btn btn-outline-warning " > <i className="fab fa-app-store fa-2x"></i><h5> Back To Store</h5> </button>
                                    </Link>
                                   
                                        <button className="btn btn-outline-success " disabled={inCart?true:false} onClick={()=>{
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }
                                            
                                            }><i className="fas fa-shopping-cart fa-2x"></i> <h5>{inCart ? "inCart":"add to Cart"}   </h5> </button>
                                 
                                </div>
                              </div>
                          </div>
                      </div>
                  );
              }}
            </ProductConsumer>
        )
    }
}
