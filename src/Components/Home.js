import '../CSS/Home.css'
import VidBG from '../Assets/HomeBGVid.mp4'
import DescripBG from '../Assets/DescripBG.png'
import BlogBG from '../Assets/BlogBG.jpeg'
import ContactCard from './ContactCard'
function Home() {
    return (
        <div className='Home'>
            <div className='Intro'>
                <div className="card bg-dark text-white">
                    <video src={VidBG} autoPlay muted loop className='VidBG'></video>

                    <div className="card-img-overlay IntroContent">
                        <h5 className="card-title">#Aero2Astro<span className='brandcolor'>SPACE</span></h5>
                        <p className="card-text">Space Logistic Company</p>
                        <br className='breaker'></br>
                        <br></br>
                        <a href="/" className="btn btn-primary btn-lg button1 " role="button" aria-pressed="true">Know more about Us</a>

                    </div>
                </div>
            </div>
            <div className='Descrip'>
                <div className="card bg-dark text-white">
                    <img className="card-img" src={DescripBG} alt="BG"></img>
                    <div className="card-img-overlay AboutContent">
                        <h5 className="card-title ">About <span className='brandcolor'>Aero2Astro</span> Space</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>                    </div>
                </div>
            </div>
            <div className='Timeline'>
                <div className="timeline">
                    <div className="containerHM left">
                        <p>
                            <i className="fa fa-code-fork" aria-hidden="true"></i>
                            <div className="content">
                                <h2>Vision</h2>
                                <p>To Build User Friendly Access To Space Exploration Technologies And Solutions For All</p>
                            </div>
                        </p>
                    </div>
                    <div className="containerHM right">
                        <div className="content">
                            <h2>Mission</h2>
                            <p>Our Mission Is To Make Simpler, Affortable ,Reliable,Anytime Anywhere,Resuable Launch Solutions To Explore Space</p>
                        </div>
                    </div>
                    <div className="containerHM left">
                        <div className="content">
                            <h2>Values</h2>
                            <p>Credtiablity, Intergrity, Responsibility

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='BlogSec'>
                <h1 className='blog-title'>Our Blogs</h1>
                <div className='blogcards'>
                    <div className="card-deck">
                        <div className="card">
                            <img className="card-img-top" src={BlogBG} alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">AERODYNAMICS OF A ROCKET</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.Talks about the aerodynamics of rockets.</p>
                                <p className="card-text"><a className="text-muted" href='https://aero2astro.com/home/blog/aerodynamics-of-a-rocket'> Read More</a></p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={BlogBG} alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">AERODYNAMICS OF A ROCKET</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.Talks about the aerodynamics of rockets.</p>
                                <p className="card-text"><a className="text-muted" href='https://aero2astro.com/home/blog/aerodynamics-of-a-rocket'> Read More</a></p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={BlogBG} alt="Card  cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">AERODYNAMICS OF A ROCKET</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.Talks about the aerodynamics of rockets.</p>
                                <p className="card-text"><a className="text-muted" href='https://aero2astro.com/home/blog/aerodynamics-of-a-rocket'> Read More</a></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <ContactCard></ContactCard>
        </div >
    )
}

export default Home
