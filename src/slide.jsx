import React from 'react'
import "./Dofa.css";

const Slide = () => {
    return (
        <div>
            <h1>Best products and reveiws</h1>
            <div id="carousel-demo" class="carousel slide" data-ride="carousel">
	
	<div className="carousel-inner">
		<div className="carousel-item active">
			<img src="https://th.bing.com/th/id/OIP.ZnLQTkIZG1k_EH9ud09D5AHaE8?w=262&h=180&c=7&o=5&dpr=1.47&pid=1.7" alt="no"/>
		</div>
		<div className="carousel-item">
			<img src=" https://th.bing.com/th/id/OIP.15IyUFF4gS-19PEj9KR6DAHaE8?w=222&h=180&c=7&o=5&dpr=1.47&pid=1.7" alt="no"/>
		</div>			
		<div className="carousel-item">
			<img src="https://th.bing.com/th/id/OIP.owCkGl008OcbIP8_psCP2gHaD2?w=305&h=180&c=7&o=5&dpr=1.47&pid=1.7"  alt="no"/>
		</div>
	</div>
</div>
            
        </div>
    )
}

export default Slide

