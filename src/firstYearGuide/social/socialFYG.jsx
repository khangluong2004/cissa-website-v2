import '../assets/css/socialFYG.css'
import mobile_Alan_Gilbert from "../assets/images/mobile-Alan-Gilbert.png"
import mobile_Alan_Gilbert2x from "../assets/images/mobile-Alan-Gilbert@2x.png"


const socialFYG = (props) => {
    return (
        <div>
            {/* Text container */}
            <div className='socialHeading'>SOCIAL</div>

            <img 
                src={mobile_Alan_Gilbert} 
                alt="Alan Gilbert"
                style={{
                    marginBottom: "10%",
                    width: '100vw',
                    objectFit: 'overflow',
                    position: "absolute",
                    bottom: 0,
                }} 
            />
        </div>
    )
}

export default socialFYG;