import React from 'react'
import {Container} from 'react-bootstrap'
import Image28 from '../assets/asset_28.jpeg';
export default function Booking() {
  return (
    <>
        <Container className='mt-5 text-center mb-5'>
            <p className='  para_book   fw-medium'>POPULAR PACKAGES</p>
            <h1 className=' fw-bolder para-head'>CHECKOUT OUR PACKAGES</h1>
            <p className='w-75 m-auto para-b fw-normal   lh-base'>Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.</p>
        </Container>
        <Container>
            <div className='d-flex justify-content-between'>
                <div>
                    <img src={Image28}/>
                </div>
                <div>
1
                </div>
                <div>
1
                </div>
            </div>
        </Container>
    </> 
  )
}
