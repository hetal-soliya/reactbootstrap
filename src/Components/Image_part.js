import React from 'react'
import { Col, Row ,Stack,Container} from 'react-bootstrap'
import { FaStar } from "react-icons/fa";
import Image25 from '../assets/asset_25.jpeg';
import Image26 from '../assets/asset_26.jpeg';
import Image27 from '../assets/asset_27.jpeg';
export default function Image_part() {
  return (
    <>
      <Container className='my-5 text-center'>
            <p className='  para'>UNCOVER PLACE</p>
            <h1 className=' fw-bolder para-head'>POPULAR DESTINATION</h1>
            <p className='w-50 m-auto para-b fw-normal   lh-base'>Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.</p>
        </Container>
      <div className='container'>
       <div className='row g-5 w-100'>
          <div className='col-lg-4 col-sm-12 col-md-6 position-relative'> <img src={Image25}  className="img-fluid rounded-5" />
            <div className='position-absolute top-50 m-4 me-5  border border-1 rounded-5 bg-light w-auto h-auto'>
              <div className='icon_btn '>
                <button className='bg-primary rounded-5 text-light border-0  px-2 pb-1'>
                  <FaStar  /><FaStar  /><FaStar  /><FaStar  /><FaStar  />
                </button>
              </div>  
              <div className='ms-4 me-4'>
                <span className='text-primary  fw-medium'>ITALY</span>
                <h3>SAN MIGUEL</h3>
                <p className='text-secondary fs-6'>Fusce hic augue velit wisi ips quibusdam pariatur, iusto.</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-12 col-md-6 position-relative'> <img src={Image26}  className="img-fluid rounded-5" />
          <div className='position-absolute top-50 m-4 me-5  border border-1 rounded-5 bg-light w-auto h-auto'>
              <div className='icon_btn '>
                <button className='bg-primary rounded-5 text-light border-0  px-2 pb-1 '>
                  <FaStar  /><FaStar  /><FaStar  /><FaStar  /><FaStar  />
                </button>
              </div>  
              <div className='ms-4 me-4'>
                <span className='text-primary  fw-medium'>ITALY</span>
                <h3>SAN MIGUEL</h3>
                <p className='text-secondary fs-6'>Fusce hic augue velit wisi ips quibusdam pariatur, iusto.</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-12 col-md-6 position-relative '> <img src={Image27}  className="img-fluid rounded-5" />
          <div className='position-absolute top-50 m-4 me-5  border border-1 rounded-5 bg-light w-auto h-auto'>
              <div className='icon_btn '>
                <button className='bg-primary rounded-5 text-light border-0  px-2 pb-1 '>
                  <FaStar  /><FaStar  /><FaStar  /><FaStar  /><FaStar  />
                </button>
              </div>  
              <div className='ms-4 me-4'>
                <span className='text-primary  fw-medium'>ITALY</span>
                <h3>SAN MIGUEL</h3>
                <p className='text-secondary fs-6'>Fusce hic augue velit wisi ips quibusdam pariatur, iusto.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

