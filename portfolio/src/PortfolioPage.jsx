import React from 'react'
import Header from './Header'

const PortfolioPage = () => {
  return (
    <div className="floating-bg">
      {Array.from({ length: 15 }).map((_, i) => <span key={i} />)}
      <Header/>
      <main >
        <br/>
        <br/>
       <section id="projects">
        <div className="section-card">
        </div>
        </section>

        <section id="highlights">
        <div className="section-card">
        </div>
        </section>

        <section id="contact">
        <div className="section-card">
        </div>
        </section>
      </main>
    </div>
   
  )
}

export default PortfolioPage