import Tilt from 'react-parallax-tilt';

const Cover = () => {
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
            <img src='https://as1.ftcdn.net/v2/jpg/06/07/42/32/1000_F_607423253_RRk3k4ENuvestlHD4jPtuItNUQSMJkhA.jpg' className="inner-element" style={{ width: '100%' }} alt="pic" />
        </Tilt>
    );
};

export default Cover;