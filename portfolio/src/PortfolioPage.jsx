import React from 'react'
import Header from './Header'
import {
  MDBFooter,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';
import {FaGoogle, FaGithub, FaLinkedin} from 'react-icons/fa'


const PortfolioPage = () => {
  return (
    <div style={{backgroundColor:'black'}}>
    <div className="floating-bg">
      {Array.from({ length: 20 }).map((_, i) => <span key={i} />)}
    </div>
      <Header/>
      <main >
        <br/>
        <br/>
       <section>
        <div className="section-card">
            <h2 className="section-title">The Experience</h2>

            <div className="section-body">
                <p className="section-copy">
                <br/>
                <ul>
                  <li><b>Hi I'm Kamron</b> and this page is a digital log of my time as a Study Abroad Student and a Software Engineering intern in Cape Town, South Africa!</li>
                  <br/>
                  <li><b>The Goal: </b> Work hand in hand with local community organizations in order to build software tailored to their needs in order to make a real impact within underprivileged communities.</li>
                  <br/>
                  <li><b>What I gained: </b>Not only did I gain valuable technical experience, but I also gained insight on issues people in other countires face, and how I as a Global Citizen can help affect change</li>
                </ul>
                </p>

                {/* Swap the `src` for your real image */}
                <figure className="section-photo">
                <img
                    src="/KamMountainPic2.jpg"
                    alt="Memorable moment"
                    loading="lazy"
                />
                </figure>
            </div>
        </div>
        </section>
        <section>
        <div id="project" className="section-card">
            <h2 className="section-title">The Project</h2>

            <div className="section-body">
                <p className="section-copy">
                <br/>
              
                <ul>
                  <li>During my trip I interned with the Cape Town Housing Assembly, a grassroots community movement with the sole purpose of fighting for the imporvement of housing conditions in the townships of the Western Cape.</li>
                  <br/>
                  <li><b>The Goal: </b> In order to promote communication between communities and give the voiceless a voice, my team was tasked with creating an interactive mapping tool that allows users to upload issues they are facing within their community whether it be electricity outages or evictions. The purpose of this is not only to alert the Housing Assembly of what issues are where, but provide a platform to direct users to relevant government and emergency contact information, as well as nearby homeless shelters all from one place.</li>
                  <br/>
                  <li><b>What I gained: </b>Through this project I obviously became a far better Software Engineer, but beyond that it was the first time I was really able to not only work within a team, but lead one giving me practice in executing a vision for an impactful project I could be proud of.</li>
                </ul>
                </p>

                {/* Swap the `src` for your real image */}
                    <figure className="section-photo" style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                        <img
                            src="/HAgrouppic.JPG"
                            alt="Memorable moment"
                            loading="lazy"
                            style={{marginBottom:'5px'}}
                        />
                        <span>View our project <a href='https://housingassemblymap.vercel.app/' target= "_blank" style={{textDecoration:'underline'}}>here!</a></span>
                    </figure>
            </div>
        </div>
        </section>

        <section id="highlights">
        <div className="section-card">
            <h2 className="section-title">The Highlights</h2>

            <div className="section-body">
                <p className="section-copy">
                <ul>
                  <li>q</li>
                  <li></li>
                  <li></li>
                </ul>
                </p>

                <figure className="section-photo">
                <img
                    src="https://placehold.co/400x250"
                    alt="Memorable moment"
                    loading="lazy"
                />
                </figure>
            </div>
        </div>
        </section>
      </main>
        <MDBFooter id='contact' className='text-center' color='white' bgColor='black'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>

          <MDBBtn outline color="light" floating className='m-1' href="mailto:kamronarabi@gmail.com" role='button' target= "_blank">
            <FaGoogle />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/kamronarabi' role='button' target= "_blank">
            <FaGithub />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/kamron-arabi-039520329/' role='button' target= "_blank" >
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