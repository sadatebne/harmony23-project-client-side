import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css'; 

const Banner = () => {
    return (
        <AwesomeSlider animation="cubeAnimation">
        <div data-src="https://img.freepik.com/free-photo/music-concept_53876-71218.jpg?w=740&t=st=1686562214~exp=1686562814~hmac=bb12b4b0df4a78899db6e82fd77a97b4467c1d0dab64c5db6bd75a2b73f99a6e">
        </div>
        <div data-src="https://img.freepik.com/free-photo/colorful-bicycle-with-guitar-meadow_1150-7721.jpg?w=740&t=st=1686561505~exp=1686562105~hmac=077f5deefde50fa3c27b64872dcca8c3d131188b4170e1dfe04c197c8777aa29">
        </div>
        <div data-src="https://img.freepik.com/free-photo/acoustic-guitar-chair-close-up-brown-guitar-black-wall_1150-21884.jpg?w=740&t=st=1686562083~exp=1686562683~hmac=4c5b9ef5ddfee845501fa96389d7d671857aab396bb1d3fb5d28fa51bedede16">    
        </div>
        <div data-src="https://img.freepik.com/free-photo/handsome-young-acoustic-guitar-blues-player-with-tattoos-arms-performing-his-musical-skills_613910-52.jpg?w=740&t=st=1686562132~exp=1686562732~hmac=890f81aec9fbf231b6d0c46e5c34484b37e2ac6f6dd829399f7c86603600f409"></div>
      </AwesomeSlider>
    
    );
};

export default Banner;