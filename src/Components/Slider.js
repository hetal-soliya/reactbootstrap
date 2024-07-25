import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FiPhoneCall } from "react-icons/fi";
import { FaSearch, FaFacebookF,FaCaretDown } from "react-icons/fa";
import { FaBarsStaggered, FaTwitter, FaYoutube } from "react-icons/fa6";
import { Button } from 'bootstrap';
export default function Slider() {
    return (
        <>
            <div className='position-relative '>
                <OwlCarousel className='owl-theme banner' items={1} loop margin={10} nav>
                    <div className='item slider_img'>
                        <img src='./asset/asset_23.jpeg' />
                    </div>
                    <div class='item'>
                        <img src='./asset/asset_24.jpeg' />
                    </div>
                </OwlCarousel>
            </div>
            <div className='container'>
                <div className='position-absolute top-0 left-0 w-75 z-1 my-2 mt-3  bg-transparent'>
                    <nav>
                        <div className='header_top d-flex justify-content-between '>
                            <div className='d-flex'>
                                <div className='text-light icon_call  text-center'><FiPhoneCall /></div>
                                <div className='ms-2'>
                                    <div className='text-light fs-sm fw-semibold text_size'>
                                        For Further Inquires:
                                    </div>
                                    <div className='text-light fs-6 fw-semibold'>
                                        +01(977)259912
                                    </div>
                                </div>
                            </div>
                            <div className='logo_img '>
                                <img src='./asset/asset_2.png' />
                            </div>
                            <div className='d-flex'>
                                <div className='text-light icon_call bg-transparent  text-center'>< FaSearch /></div>
                                <div className='text-light icon_call text-center fs-4'><FaBarsStaggered /></div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <hr className='position-absolute top-0 horline w-100 z-2 border-primary border-1' /> */} 
            <div className='container '>
                <div className='position-absolute top-0 left-0 w-75 z-1   bg-transparent' >
                    <div className='d-flex justify-content-between header_bottom header_bottom_border '>
                        <div className=' d-flex justify-content-between text-light my-3  fs-6'>
                            <FaFacebookF className='mx-2  icon_part'/>
                            <FaTwitter className='mx-2  icon_part' />
                            <FaYoutube className='mx-2  icon_part' />
                        </div>
                        <div className="menu d-flex  my-3 ">
                            <ul className='d-flex text-center'>
                                <li ><a href="#">HOME</a></li>
                                <li><a href="#">ABOUT US</a></li>
                                <li><a href="#">DESTINATION</a></li>
                                <li><a href="#">PACKAGES</a><FaCaretDown className='text-light fs-5 ms-1 mb-1' />
                                    <div className="submenu ">
                                        <ul>
                                            <li><a href="#">SHOP</a></li>
                                            <li><a href="#">shop grid</a></li>
                                            <li><a href="#">shop left sidebar</a> </li>
                                            <li><a href="#">shop right sidebar</a></li>
                                            <li><a href="#">shop details</a></li>
                                            <li className="hover-me"><a href="#">other pages</a>
                                    <div className="submenu2">
                                        <ul>
                                            <li><a href="#">cart</a></li>
                                            <li><a href="#">wishlist</a> </li>
                                            <li><a href="#">checkout</a></li>
                                            <li><a href="#">order traking</a></li>
                                            <li><a href="#">my account</a></li>
                                            <li><a href="#">sign in</a></li>
                                            <li><a href="#">register</a></li>
                                        </ul>
                                    </div>
                                </li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href="#">PAGES</a><FaCaretDown className='text-light fs-5 ms-1 mb-1' />
                                <div className="submenu">
                                 <ul>
                                    <li><a href="#">SHOP</a></li>
                                    <li><a href="#">shop grid</a></li>
                                    <li><a href="#">shop left sidebar</a></li>
                                    <li><a href="#">shop right sidebar</a></li>
                                    <li><a href="#">shop details</a></li>
                                    <li className="hover-me"><a href="#">other pages</a>
                                        <div className="submenu2">
                                        <ul>
                                            <li><a href="#">cart</a></li>
                                            <li><a href="#">wishlist</a></li>
                                            <li><a href="#">checkout</a></li>
                                            <li><a href="#">order traking</a></li>
                                            <li><a href="#">my account</a></li>
                                            <li><a href="#">sign in</a></li>
                                            <li><a href="#">register</a></li>
                                        </ul>
                                        </div>
                                    </li>
                                 </ul>
                                </div>
                                </li>
                                <li><a href="#">CONTACT US</a></li>
                            </ul>
                        </div>
                        <div className='last_btn  my-3 '><button type="button" className="btn btn-primary  rounded-5">BOOK NOW</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}
