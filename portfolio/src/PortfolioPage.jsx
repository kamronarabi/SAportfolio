import React from 'react'
import Header from './Header'
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

import {FaGoogle, FaGithub, FaLinkedin} from 'react-icons/fa'


const PortfolioPage = () => {
  return (
    <div className="floating-bg">
      {Array.from({ length: 15 }).map((_, i) => <span key={i} />)}
      <Header/>
      <main >
        <br/>
        <br/>
       <section>
        <div className="section-card">
        </div>
        </section>

        <section id="project">
        <div className="section-card">
        </div>
        </section>

        <section id="highlights">
        <div className="section-card">
        </div>
        </section>
      </main>
        <MDBFooter id='contact' className='text-center' color='white' bgColor='black'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>

          <MDBBtn outline color="light" floating className='m-1' href="mailto:kamronarabi@gmail.com" role='button'>
            <FaGoogle />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/kamronarabi' role='button'>
            <FaGithub />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/kamron-arabi-039520329/' role='button'>
            <FaLinkedin />
          </MDBBtn>
        </section>
        <div className='text-center p-3' style={{marginTop: '-30px',backgroundColor: 'black' }}>
         Contact Me!
        </div>
      </MDBContainer>
    </MDBFooter>
    </div>
   
  )
}

export default PortfolioPage