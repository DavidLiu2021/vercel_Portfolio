import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Majiaqi from "../../Assets/Graphic/Majiaqi.png"
import Yangmi from "../../Assets/Graphic/Yangmi.png"
import Yangyang from "../../Assets/Graphic/Yangyang.png"
import Warmpp from "../../Assets/Graphic/Warmpp.png"
import Dengxiaoci from "../../Assets/Graphic/Dengxiaoci.png"
import Warmbk from "../../Assets/Graphic/Warmbk.png"
import Christ1 from "../../Assets/Graphic/Christ1.png"
import Christ2 from "../../Assets/Graphic/Christ2.png"
import Christ3 from "../../Assets/Graphic/Christ3.png"
import Christ4 from "../../Assets/Graphic/Christ4.png"
import Christ5 from "../../Assets/Graphic/Christ5.png"
import Guitar1 from "../../Assets/Graphic/Guitar1.png"
import Guitar2 from "../../Assets/Graphic/Guitar2.png"
import Guitar3 from "../../Assets/Graphic/Guitar3.png"
import Guitar4 from "../../Assets/Graphic/Guitar4.png"
import Guitar5 from "../../Assets/Graphic/Guitar5.png"
import HolW1 from "../../Assets/Graphic/HolW1.png"
import HolW2 from "../../Assets/Graphic/HolW2.png"
import HolW3 from "../../Assets/Graphic/HolW3.png"
import HolW4 from "../../Assets/Graphic/HolW4.png"
import HolW5 from "../../Assets/Graphic/HolW5.png"
import Huiyin1 from "../../Assets/Graphic/Huiyin1.PNG"
import Huiyin2 from "../../Assets/Graphic/Huiyin2.PNG"
import Huiyin3 from "../../Assets/Graphic/Huiyin3.PNG"
import Huiyin4 from "../../Assets/Graphic/Huiyin4.PNG"
import Huiyin5 from "../../Assets/Graphic/Huiyin5.PNG"
import Love1 from "../../Assets/Graphic/Love1.png"
import Love2 from "../../Assets/Graphic/Love2.png"
import Love3 from "../../Assets/Graphic/Love3.png"
import Love4 from "../../Assets/Graphic/Love4.png"
import Love5 from "../../Assets/Graphic/Love5.png"




function Graphic() {
    return (
        <Container fluid className="graphic-section">
        <Particle />
        <Container>
            <h1 className="graphic-heading">
                <strong className="purple">Photography & Graphic Design</strong>
            </h1>
            <br/>
            <br/>

            
            {/* Graphic Design */}
            <Row>
                <Col md={12} className="home-about-social">
                <h1>GRAPHIC DESIGN</h1>
                <p>
                Weibo @ <span className="purple"> Super Topic </span> 
                </p>
                </Col>
            </Row>

            <Row>
                <Col md={2} style={{ paddingBottom: 5 }}>
                <img
                    src={Yangmi}
                    alt="Yangmi"
                    className="img-fluid"
                    style={{ maxHeight: "400px" }}
                />
                </Col>
                <Col md={2} style={{ paddingBottom: 5 }}>
                <img
                    src={Yangyang}
                    alt="Yangyang"
                    className="img-fluid"
                    style={{ maxHeight: "400px" }}
                />
                </Col>
                <Col md={3} style={{ paddingBottom: 5 }}>
                <img
                    src={Warmpp}
                    alt="Majiaqi"
                    className="img-fluid"
                    style={{ maxHeight: "400px" }}
                />
                </Col>
                <Col md={3} style={{ paddingBottom: 5 }}>
                <img
                    src={Warmpp}
                    alt="Warmpp"
                    className="img-fluid"
                    style={{ maxHeight: "400px" }}
                />
                </Col>
                <Col md={2} style={{ paddingBottom: 5 }}>
                <img
                    src={Dengxiaoci}
                    alt="Warmpp"
                    className="img-fluid"
                    style={{ maxHeight: "400px" }}
                />
                </Col>
            </Row>

            <br/>
            <br/>

            {/* Huiyin */}
            <Row>
                <Col md={12} className="home-about-social">
                <h1>SYMPOSIUM COFFEE</h1>
                <p>
                CUHKSZ @ <span className="purple"> Student Start-up </span>
                </p>
                </Col>
            </Row>

            <Row>
                <Col md={3} style={{ paddingBottom: 5 }}>
                <img
                    src={Huiyin1}
                    alt="Huiyin1"
                    className="img-fluid"
                    style={{ maxHeight: "400px" }}
                />
                </Col>
                <Col md={3} style={{ paddingBottom: 5 }}>
                <img
                    src={Huiyin5}
                    alt="Huiyin5"
                    className="img-fluid"
                    style={{ maxHeight: "400px" }}
                />
                </Col>
                <Col md={3} style={{ paddingBottom: 5 }}>
                <img
                    src={Huiyin3}
                    alt="Huiyin3"
                    className="img-fluid"
                    style={{ maxHeight: "400px" }}
                />
                </Col>
                <Col md={3} style={{ paddingBottom: 5 }}>
                <img
                    src={Huiyin2}
                    alt="Huiyin2"
                    className="img-fluid"
                    style={{ maxHeight: "400px" }}
                />
                </Col>
            </Row>

            <br/>
            <br/>


            {/* Love */}
            <Row>
                <Col md={12} className="home-about-social">
                <h1>LOVE SONG</h1>
                <p>
                Music Union @ <span className="purple"> Love Song Concert </span>
                </p>
                </Col>
            </Row>

            <Row>
                <Col md={3} style={{ paddingBottom: 5 }}>
                <img
                    src={Love1}
                    alt="Love1"
                    className="img-fluid"
                    style={{ maxHeight: "400px" }}
                />
                </Col>
                <Col md={3} style={{ paddingBottom: 5 }}>
                <img
                    src={Love2}
                    alt="Love2"
                    className="img-fluid"
                    style={{ maxHeight: "400px" }}
                />
                </Col>
                <Col md={3} style={{ paddingBottom: 5 }}>
                <img
                    src={Love3}
                    alt="Love3"
                    className="img-fluid"
                    style={{ maxHeight: "400px" }}
                />
                </Col>
                <Col md={3} style={{ paddingBottom: 5 }}>
                <img
                    src={Love4}
                    alt="Love4"
                    className="img-fluid"
                    style={{ maxHeight: "400px" }}
                />
                </Col>
            </Row>

            <br/>
            <br/>


            {/* Guitar */}
            <Row>
                <Col md={12} className="home-about-social">
                <h1>GUITAR NIGHT</h1>
                <p>
                Music Union @ <span className="purple"> Guitar Night Concert </span>
                </p>
                </Col>
            </Row>

            <Row>
                <Col md={3} style={{ paddingBottom: 5 }}>
                <img
                    src={Guitar1}
                    alt="Guitar1"
                    className="img-fluid"
                    style={{ maxHeight: "400px" }}
                />
                </Col>
                <Col md={3} style={{ paddingBottom: 5 }}>
                <img
                    src={Guitar2}
                    alt="Guitar2"
                    className="img-fluid"
                    style={{ maxHeight: "400px" }}
                />
                </Col>
                <Col md={3} style={{ paddingBottom: 5 }}>
                <img
                    src={Guitar3}
                    alt="Guitar3"
                    className="img-fluid"
                    style={{ maxHeight: "400px" }}
                />
                </Col>
                <Col md={3} style={{ paddingBottom: 5 }}>
                <img
                    src={Guitar4}
                    alt="Guitar4"
                    className="img-fluid"
                    style={{ maxHeight: "400px" }}
                />
                </Col>
            </Row>

            <br/>
            <br/>


            {/* Christmas */}
            <Row>
                <Col md={12} className="home-about-social">
                <h1>HALLOWEEN</h1>
                <p>
                CUHKSZ @ <span className="purple"> Halloween Parade </span>
                </p>
                </Col>
            </Row>

            <Row>
                <Col md={3} style={{ paddingBottom: 5 }}>
                <img
                    src={HolW1}
                    alt="HolW1"
                    className="img-fluid"
                    style={{ maxHeight: "400px" }}
                />
                </Col>
                <Col md={3} style={{ paddingBottom: 5 }}>
                <img
                    src={HolW2}
                    alt="HolW2"
                    className="img-fluid"
                    style={{ maxHeight: "400px" }}
                />
                </Col>
                <Col md={3} style={{ paddingBottom: 5 }}>
                <img
                    src={HolW3}
                    alt="HolW3"
                    className="img-fluid"
                    style={{ maxHeight: "400px" }}
                />
                </Col>
                <Col md={3} style={{ paddingBottom: 5 }}>
                <img
                    src={HolW4}
                    alt="HolW4"
                    className="img-fluid"
                    style={{ maxHeight: "400px" }}
                />
                </Col>
            </Row>

            <br/>
            <br/>
            <br/>


        </Container>
        </Container>
    );
}

export default Graphic;