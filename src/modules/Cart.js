// import React from 'react';
// import { Link } from 'react-router-dom';
// Link

// const Cart = () => {
//     return (
//         <div className="container mx-auto mt-10">
//             <div className="flex shadow-md my-10">
//                 <div className="w-3/4 bg-white px-10 py-10">
//                     <div className="flex justify-between border-b pb-8">
//                         <h1 className="font-semibold text-2xl">Shoping Cart</h1>
//                         <h2 className="font-semibold text-2xl">3 Items</h2>
//                     </div>
//                     <div className="flex mt-10 mb-5">
//                         <h3 className="font-semiblold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
//                         <h3 className="font-semiblold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
//                         <h3 className="font-semiblold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
//                         <h3 className="font-semiblold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
//                     </div>
//                     <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
//                         <div className="flex w-2/5">
//                             <div className="w-20">
//                                 <img className="h-24" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z" alt="" />
//                             </div>
//                             <div className="flex flex-col justify-between ml-4 flex-grow">
//                                 <span className="font-bold text-sm">Iphone 65</span>
//                                 <span className="text-red-500 text-sm">Apple</span>
//                                 <Link to='#' className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</Link>
//                             </div>
//                         </div>
//                         <div className="flex justify-center w-1/5">
//                             <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
//                                 <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
//                             </svg>
//                             <input className="mx-2 border text-center w-8" type="text" value="1" />
//                             <svg class="fill-current text-gray-680 w-3" viewBox="0 0 448 512">
//                                 <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
//                             </svg>
//                         </div>
//                         <span className="text-center w-1/5 font-semibold text-sm">$40.00</span>
//                         <span className="text-center w-1/5 font-semibold text-sm">$40.00</span>
//                     </div>
//                     <Link to={'/products'} class="flex font-semibold text-orange-600 text-sm mt-10">
//                         <svg class="fill-current mr-2 Utext-orange-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941186.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
//                         Continue Shopping
//                     </Link>
//                 </div>
//                 <div id="summary" class="w-1/4 px-8 py-10">
//                     <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
//                     <div class="flex justify-between mt-10 mb-5">
//                         <span class="font-semibold text-sm uppercase">Items 3</span>
//                         <span class="font-semibold text-sm">590$</span>
//                     </div>
//                     <div>
//                         <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
//                         <select class="block p-2 text-gray-600 w-full text-sm">
//                             <option>Standard shipping - $10.00</option>
//                         </select>
//                     </div>
//                     <div class="py-10">
//                         <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
//                         <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full" />
//                     </div>
//                     <button class="bg-red-500 Ohover: bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
//                     <div className="border-t mt-8">
//                         <div className="flex font-semibold justify-between py-6 text-sm uppercase">
//                             <span>Total cost</span>
//                             <span>$600</span>
//                         </div>
//                         <button className="bg-orange-500 font-semibold hover:bg-orange-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Cart


import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <div className="container mx-auto mt-10">
            <div className="flex flex-wrap w-full shadow-md my-10">
                <div className="lg:w-3/4 md:w-3/4 w-full bg-white px-10 py-10 ">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                        <h2 className="font-semibold text-2xl">3 Items</h2>
                    </div>
                    <div className="flex mt-10 mb-5">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
                    </div>
                    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                        <div className="flex w-2/5">
                            <div className="w-20">
                                <img className="h-24" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z" alt="" />
                            </div>
                            <div className="flex flex-col justify-between ml-4 flex-grow">
                                <span className="font-bold text-sm">Iphone 65</span>
                                <span className="text-red-500 text-sm">Apple</span>
                                <Link to="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</Link>
                            </div>
                        </div>
                        <div className="flex justify-center w-1/5">
                            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                            </svg>
                            <input className="mx-2 border text-center w-8" type="text" value="1" />
                            <svg className="fill-current text-gray-680 w-3" viewBox="0 0 448 512">
                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                            </svg>
                        </div>
                        <span className="text-center w-1/5 font-semibold text-sm">$40.00</span>
                        <span className="text-center w-1/5 font-semibold text-sm">$40.00</span>
                    </div>
                    <Link to={'/products'} className="flex font-semibold text-orange-600 text-sm mt-10">
                        {/* <svg className="fill-current mr-2 text-orange-600 w-4" viewBox="0 0 448 512">
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941186.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg> */} <span>&larr;</span>Continue Shopping
                    </Link>
                </div>
                <div id="summary" className="lg:w-1/4 md:w-1/4 w-full px-8 py-10 md:px-0 md:pr-2">
                    <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                    <div className="flex justify-between mt-10 mb-5">
                        <span className="font-semibold text-sm uppercase">Items 3</span>
                        <span className="font-semibold text-sm">590$</span>
                    </div>
                    <div>
                        <span className="font-medium inline-block text-left mb-3 text-sm uppercase">Shipping Charges</span>
                        <select className="block p-2 text-gray-600 w-full text-sm">
                            <option>Standard shipping - $10.00</option>
                        </select>
                    </div>
                    <div className="py-10">
                        <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                        <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                    </div>
                    <button className="bg-orange-500 hover:bg-gray-200 hover:text-orange-500 transition-all duration-300 px-5 py-2 text-sm text-white uppercase rounded">Apply</button>
                    <div className="border-t mt-8">
                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Total cost</span>
                            <span>$600</span>
                        </div>
                        <button className="bg-orange-500 font-semibold hover:bg-gray-200 hover:text-orange-500 transition-all duration-300 py-3 text-sm text-white uppercase w-full rounded">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

