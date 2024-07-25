import React from 'react'
import {Container} from 'react-bootstrap'
import { FaStar } from "react-icons/fa";
export default function Image_part() {
  return (
    <>
      <Container className='my-5 text-center'>
            <p className='  para'>UNCOVER PLACE</p>
            <h1 className=' fw-bolder para-head'>POPULAR DESTINATION</h1>
            <p className='w-50 m-auto para-b fw-normal   lh-base'>Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.</p>
      </Container>
      <Container>
        <div className='row g-5 '>
          <div className='col-xl-4 col-sm-12 col-md-6 position-relative'> <img src="/asset/asset_25.jpeg" className="img-fluid rounded-5" />
            <div className='position-absolute  bottom-0 m-4  me-5  border border-1 rounded-5 bg-light '>
              <div className='icon_btn '>
                <button className='bg-primary rounded-5 text-light border-0 position-absolute end-0 me-4 px-2 pb-1'>
                  <FaStar  /><FaStar  /><FaStar  /><FaStar  /><FaStar  />
                </button>
              </div>  
              <div className='pt-4 pb-2 px-4'>
                <span className=' span_tx fw-medium'>ITALY</span>
                <h3 className='fs-4'>SAN MIGUEL</h3>
                <p className='text-secondary fs-6'>Fusce hic augue velit wisi ips quibusdam pariatur, iusto.</p>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-sm-12 col-md-6 position-relative'> <img src="/asset/asset_26.jpeg"  className="img-fluid rounded-5" />
            <div className='position-absolute bottom-0 m-4  me-5   border border-1 rounded-5 bg-light  '>
              <div className='icon_btn '>
                <button className='bg-primary rounded-5 text-light border-0 position-absolute end-0 me-4  px-2 pb-1 '>
                  <FaStar  /><FaStar  /><FaStar  /><FaStar  /><FaStar  />
                </button>
              </div>  
              <div className='pt-4 pb-2 px-4'>
                <span className='  span_tx fw-medium'>DUBAI</span>
                <h3 className='fs-4'>BURJ KHALIFA</h3>
                <p className='text-secondary fs-6'>Fusce hic augue velit wisi ips quibusdam pariatur, iusto.</p>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-sm-12 col-md-6 position-relative  '> <img src="/asset/asset_27.jpeg"  className="img-fluid rounded-5" />
            <div className='position-absolute bottom-0 m-4 me-5 border border-1 rounded-5 bg-light '>
              <div className='icon_btn '>
                <button className='bg-primary rounded-5 text-light border-0 position-absolute end-0 me-4  px-2 pb-1 '>
                  <FaStar  /><FaStar  /><FaStar  /><FaStar  /><FaStar  />
                </button>
              </div>  
              <div className='pt-4 pb-2 px-4'>
                <span className=' span_tx fw-medium'>JAPAN</span>
                <h3 className='fs-4'>KYOTO TEMPLE</h3>
                <p className='text-secondary fs-6'>Fusce hic augue velit wisi ips quibusdam pariatur, iusto.</p>
              </div>
            </div>
          </div>
          <div className="section-btn-wrap text-center">
            <button className="rounded-5 text-light border-0">More Destination</button>             
          </div>
        </div>
        </Container>
    </>
  )
}

