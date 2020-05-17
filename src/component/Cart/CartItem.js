import React from 'react';

export default function CartItem({item ,value}) {
    const {id, title, img, price, total, count } = item;
    const {increment, decrement, removeItem} = value;
    return (
        <div className="row my-2 text-capitalize text-center">
            < div className=" col-10 mx-auto col-lg-2">
                <img src={img} style={{width : '5rem',hight :'5rem'}} className="img-fluid" alt="product"/>

            </div>
            < div className=" col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Product : </span> {title}
            </div>
            < div className=" col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Price : </span> {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
                <div className=" d-flex justify-content-center">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-info" onClick={()=>decrement(id)}> - </button>
                        <button type="button" className="btn btn-info" >{count}</button>
                        <button type="button" className="btn btn-info" onClick={()=>increment(id)}> + </button>
                    </div>
                </div>
                </div>
                {/*               */}
                < div className=" col-10 mx-auto col-lg-2" >
                    <div onClick={()=> removeItem(id)} style={{color:'Tomato'}}>
                    <i className="fas fa-minus-circle"></i>
                    </div>
              
                </div>
                < div className=" col-10 mx-auto col-lg-2">
                <strong> Item total : $ {total}</strong> 
            </div>

            
        </div>
    ); 
}
