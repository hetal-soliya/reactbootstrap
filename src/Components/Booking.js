import React from 'react'
import { Container } from 'react-bootstrap'
import { FaStar } from "react-icons/fa";
import { FaClock, FaLocationDot } from "react-icons/fa6";
import { IoMdContacts } from "react-icons/io";
import { Button } from 'bootstrap';
export default function Booking() {
    return (
        <>
            <Container className='mt-5 text-center mb-5'>
                <p className='  para_book   fw-medium'>POPULAR PACKAGES</p>
                <h1 className=' fw-bolder para-head'>CHECKOUT OUR PACKAGES</h1>
                <p className='w-75 m-auto para-b fw-normal   lh-base'>Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.</p>
            </Container>
            <Container className=''>
                <div className='d-flex justify-content-between mb-5'>
                    <div>
                        <img src='./asset/asset_28.jpeg' className=' card_part' />
                    </div>
                    <div className='m-3 p-4 '>
                        <h4 className='headtext fw-bold fs-4'>EXPERIENCE THE GREAT HOLIDAY ON BEACH</h4>
                        <p className='para-b  fw-medium   lh-base'>Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.</p>
                        <button className='btn btn-light rounded-pill'>
                            <ul className='d-flex contact_name my-2 me-5'>
                                <li><a href='#'></a><FaClock className='contact_icon mx-1' /> 7D/6N</li>
                                <li><a href='#'></a><IoMdContacts className='contact_icon mx-1' /> Pax:10</li>
                                <li><a href='#'></a><FaLocationDot className='contact_icon mx-1' /> Malaysia</li>
                            </ul>
                        </button>

                    </div>
                    <div className='p-5 text-light btn_price text-center '>
                        <p className='fw-bold'>25(reviews)  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        <h1 className='fw-bold'>$750</h1>
                        <span className='fs-6'>/per person</span><br />
                        <button className='btn_price p-0 rounded-5 text-white m-2 border-1 border-light'>BOOK NOW</button>
                    </div>
                </div>
                <div className='d-flex justify-content-between mb-5 '>
                    <div>
                        <img src='./asset/asset_29.jpeg' className=' card_part' />
                    </div>
                    <div className='m-3 p-4'>
                        <h4 className='headtext fw-bold fs-4'>SUMMER HOLIDAY TO THE OXOLOTAN RIVER</h4>
                        <p className='para-b  fw-medium   lh-base'>Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.</p>
                        <button className='btn btn-light rounded-pill'>
                            <ul className='d-flex contact_name my-2 me-5'>
                                <li><a href='#'></a><FaClock className='contact_icon mx-1' /> 5D/7N</li>
                                <li><a href='#'></a><IoMdContacts className='contact_icon mx-1' /> Pax:10</li>
                                <li><a href='#'></a><FaLocationDot className='contact_icon mx-1' /> Malaysia</li>
                            </ul>
                        </button>

                    </div>
                    <div className='p-5 text-light btn_price text-center'>
                        <p className='fw-bold'>25(reviews)  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        <h1 className='fw-bold'>$750</h1>
                        <span className='fs-6'>/per person</span><br />
                        <button className='btn_price p-0 rounded-5 text-white m-2 border-1 border-light'>BOOK NOW</button>
                    </div>
                </div>
                <div className='d-flex justify-content-between mb-5 '>
                    <div>
                        <img src='./asset/asset_30.jpeg'className=' card_part' />
                    </div>
                    <div className='m-3 p-4'>
                        <h4 className='headtext fw-bold fs-4'>SANTORINI ISLAND'S WEEKEND VACATION</h4>
                        <p className='para-b  fw-medium   lh-base'>Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.</p>
                        <button className='btn btn-light rounded-pill'>
                            <ul className='d-flex contact_name my-2 me-5'>
                                <li><a href='#'></a><FaClock className='contact_icon mx-1' /> 6D/5N</li>
                                <li><a href='#'></a><IoMdContacts className='contact_icon mx-1' /> Pax:10</li>
                                <li><a href='#'></a><FaLocationDot className='contact_icon mx-1' /> Malaysia</li>
                            </ul>
                        </button>

                    </div>
                    <div className='p-5 text-light btn_price text-center'>
                        <p className='fw-bold'>25(reviews)  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        <h1 className='fw-bold'>$750</h1>
                        <span className='fs-6'>/per person</span><br />
                        <button className='btn_price p-0 rounded-5 text-white m-2 border-1 border-light'>BOOK NOW</button>
                    </div>
                </div>

            </Container>
            <Container className=' d-flex justify-content-center mb-5'>
                <button className='btn btn-primary rounded-5 px-4 py-3 fw-semibold'>VIEW ALL PACKAGES</button>
            </Container>
        </>
    )
}

