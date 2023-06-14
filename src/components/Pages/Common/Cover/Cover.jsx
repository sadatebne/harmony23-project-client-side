import Tilt from 'react-parallax-tilt';

const Cover = ({photo}) => {
    return (
        <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={800}
            transitionSpeed={1500}
            scale={1.1}
            gyroscope={true}
        >
            <img src={photo} className="inner-element" style={{ width: '100%' }} alt="pic" />
        </Tilt>
    );
};

export default Cover;