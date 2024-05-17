import '../CSS/Technology.css'
import ContactCard from './ContactCard'
import TechUsedBG from '../Assets/TechUsedBG.webp'
function Technology() {
    return (
        <div>
            <div className='Technology'>
                <div className='TechnologyTitle'>About the Technology <span className='brandcolor'>We</span> use</div>
                <div className='Tech1'>
                    <div className="card bg-dark text-white TechCard">
                        <img className="card-imgTC" src={TechUsedBG} alt="Card "></img>
                        <div className="card-img-overlay">
                            <h5 className="card-titleTC">1<span className='brandcolor'>.</span>STAGE ROCKET</h5>
                            <p className="card-textTC">A reusable 1.5 stage to orbit rocket uses a main stage to reach a high altitude and provide most of the delta-V needed for the mission. The orbital stage completes the delta-V and takes a Hohmann transfer approach to deliver multiple payloads to low Earth orbit. The main stage comes back to , and after maintanence, gets ready for the next launch in a short time.</p>
                        </div>
                    </div>
                </div>
                <div className='Tech2'>
                    <div className="card bg-dark text-white TechCard">
                        <img className="card-imgTC" src={TechUsedBG} alt="Card "></img>
                        <div className="card-img-overlay">
                            <h5 className="card-titleTC">2<span className='brandcolor'>.</span>AEROSPIKE NOZZLE</h5>
                            <p className="card-textTC">Our main stage uses a combination of a bell nozzle and a linear aerospike engine for increased efficiency. The aerospike provides higher efficiency at lower altitudes, while the bell nozzles are vacuum optimized for higher altitudes. This enables us to get up to 90% of our delta-V from the first stage.</p>
                        </div>
                    </div>
                </div>
                <ContactCard></ContactCard>
            </div>
        </div>
    )
}

export default Technology
