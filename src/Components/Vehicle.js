import '../CSS/Vehicle.css'
import RocketBG from '../Assets/Antrik-1 BG.jpg'

function Vehicle() {
    return (
        <div>
            <div className="VehicleSec">
                <div class="card bg-dark text-white ">
                    <img class="card-img" src={RocketBG} alt="Card"></img>
                    <div class="card-img-overlay VehicleCard">
                        <h5 class="card-title VehicleName">Antrik - <span className='brandcolor'>1</span></h5>
                        <p class="card-text VehicleDescrip">Capable of taking upto 300 kg to orbits around 500 km high, Antrik - 1 can take payload to low and high inclination orbits. Designed with resusability in mind hence it can return to land. It uses LOX/CH4 based engines in all its stages and Antrik - 1 is configurable to the mission needs of the customer. It uses Advanced propulsion, materials and Purposely designed flight profile to any specific mission.</p>
                        <div className='facts'>
                            <ul className='FactsContent'>
                                <p className='Factstitle'>Facts</p>
                                <li>
                                    SSTO Reusable Launch Vehicle
                                </li>
                                <li>
                                    Mobile/ Portable launch Facility
                                </li>
                                <li>
                                    Single Window Mission Launch Control
                                </li>
                                <li>
                                    Advance Aerospike Propulsion Technology
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div className='RocketSec' data-spy="scroll" data-target="#myScrollspy" data-offset="15">
                    <body data-spy="scroll" data-target="#myScrollspy" data-offset="15">

                        <div class="container-fluid" >
                            <h1>Scrollspy & Affix Example</h1>
                            <h3>Fixed vertical sidenav on scroll</h3>
                            <p>Scroll this page to see how the navbar behaves with data-spy="affix" and data-spy="scrollspy".</p>
                            <p>The left menu sticks the page after you have scrolled a specified amount of pixels, and the links in the menu are automatically updated based on scroll position.</p>
                        </div>
                        <br></br>

                        <div class="container">
                            <div class="row">
                                <nav class="col-sm-3" id="myScrollspy">
                                    <ul class="nav nav-pills nav-stacked" data-spy="affix" data-offset-top="205">
                                        <li><a href="#section1">Section 1</a></li>
                                        <li><a href="#section2">Section 2</a></li>
                                        <li><a href="#section3">Section 3</a></li>
                                        <li class="dropdown">
                                            <a class="dropdown-toggle" data-toggle="dropdown" href="#">Section 4 <span class="caret"></span></a>
                                            <ul class="dropdown-menu">
                                                <li><a href="#section41">Section 4-1</a></li>
                                                <li><a href="#section42">Section 4-2</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                                <div class="col-sm-9">
                                    <div id="section1">
                                        <h1>Section 1</h1>
                                        <p>Try to scroll this section and look at the navigation list while scrolling!</p>
                                    </div>
                                    <div id="section2">
                                        <h1>Section 2</h1>
                                        <p>Try to scroll this section and look at the navigation list while scrolling!</p>
                                    </div>
                                    <div id="section3">
                                        <h1>Section 3</h1>
                                        <p>Try to scroll this section and look at the navigation list while scrolling!</p>
                                    </div>
                                    <div id="section41">
                                        <h1>Section 4-1</h1>
                                        <p>Try to scroll this section and look at the navigation list while scrolling!</p>
                                    </div>
                                    <div id="section42">
                                        <h1>Section 4-2</h1>
                                        <p>Try to scroll this section and look at the navigation list while scrolling!</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </body>
                </div> */}
            </div>

        </div>
    )
}

export default Vehicle
