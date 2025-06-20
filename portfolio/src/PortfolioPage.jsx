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
        <div className="section-card" id='experience'>
            <h2 className="section-title">The Experience</h2>

            <div className="section-body">
                <p className="section-copy">
                <br/>
                <ul>
                  <li><b>Hi I'm Kamron</b> and this page is a digital log of my time as a Study Abroad Student and a Software Engineering intern in Cape Town, South Africa!</li>
                  <br/>
                  <li><b>The Goal: </b> Work hand in hand with local community organizations in order to build software tailored to their needs and make a real impact within underprivileged communities.</li>
                  <br/>
                  <li><b>What I gained: </b>Not only did I learn valuable technical skills, I also gained insight on issues people in other countires face, and how I, as a global citizen, can help affect change.</li>
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
                <br/>
                <ul>
                  <li>This trip was no doubt a great learning experience, but what really made it memorable was the time spent off the computer. Safaris, experiential learning excursions, and group dinners helped form bonds and connections as well as an immersive cultural experience.</li>
                  <br/>
                  <li>From exploring the streets of Cape Town to the nature of St. Lucia this trip was filled with so many memories in such a short time. One that stood out was our day at Cape Vidal Beach, one of the most beautiful places I've ever been to, surrounded by ocean, mountains, and monkeys. </li>
                  <br/>
                  <li><b>What I gained: </b> This trip gave me a once in a lifetime oppurtunity to explore a new country on a continent I've never been to, as well as gaining lifelong friendships.</li>
                </ul>
                </p>

                <figure className="section-photo">
                <img
                    src="/Beachgrouppic.jpg"
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
         <div className='text-center p-3' style={{marginBottom: '20px', marginTop:'-40px',backgroundColor: 'black' }}>
        Special thanks to Dr. Sanethia Thomas, Ping Neo, Naomi Harrell, EDU Africa, and the Housing Assembly for making this oppurtunity possible. 
        </div>
    
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
      </MDBContainer>
        <div className='text-center p-3' style={{marginTop: '-45px',backgroundColor: 'black' }}>
            Contact Me!
        </div>
    </MDBFooter>
   </div>
  )
}

export default PortfolioPage