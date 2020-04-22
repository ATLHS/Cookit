import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import downloadIcon from '../../images/apple_android.png';
import '../../css/footer.css';

const Footer = () => {
    return (
        <>
            <Row as="footer" className="h-auto m-0 d-flex justify-content-around align-items-center footerContainer" style={{paddingLeft: "5%", paddingRight: "5%", backgroundColor: "rgb(126, 57, 255)"}}>
                <Col md="auto" className="h-75 p-1 footerCol" style={{backgroundColor: "rgb(126, 57, 255)"}}>
                    <ul class="d-flex footerContainerItems">
                        <li className="list-unstyled mb-1 mt-2 text-white footerItems"><Link className="text-decoration-none text-white" to="#">On the menu</Link></li>
                        <li className="list-unstyled mb-1 mt-2 text-white footerItems"><Link className="text-decoration-none text-white" to="#">Pricing</Link></li>
                        <li className="list-unstyled mb-1 mt-2 text-white footerItems"><Link className="text-decoration-none text-white" to="#">Our vision</Link></li>
                        <li className="list-unstyled mb-1 mt-2 text-white footerItems"><Link className="text-decoration-none text-white" to="#">Wine</Link></li>
                        <li className="list-unstyled mb-1 mt-2 text-white footerItems"><Link className="text-decoration-none text-white" to="#">Market</Link></li>
                        <li className="list-unstyled mb-1 mt-2 text-white footerItems"><Link className="text-decoration-none text-white" to="#">Gifts</Link></li>
                    </ul>
                </Col>
                <Col md="auto" className="h-75 p-1 footerCol" style={{backgroundColor: "rgb(126, 57, 255)"}}>
                    <ul class="d-flex footerContainerItems">
                        <li className="list-unstyled mb-1 mt-2 text-white footerItems" ><Link className="text-decoration-none text-white" to="#">Blog</Link></li>
                        <li className="list-unstyled mb-1 mt-2 text-white footerItems" ><Link className="text-decoration-none text-white" to="#">Cookbook</Link></li>
                        <li className="list-unstyled mb-1 mt-2 text-white footerItems" ><Link className="text-decoration-none text-white" to="#">Suppliers</Link></li>
                        <li className="list-unstyled mb-1 mt-2 text-white footerItems" ><Link className="text-decoration-none text-white" to="#">Affiliates</Link></li>
                        <li className="list-unstyled mb-1 mt-2 text-white footerItems" ><Link className="text-decoration-none text-white" to="#">Supplied chains act</Link></li>
                        <li className="list-unstyled mb-1 mt-2 text-white footerItems" ><Link className="text-decoration-none text-white" to="#">Food safety</Link></li>
                    </ul>
                </Col>
                <Col md="auto" className="h-75 mb-auto p-1 footerCol" style={{backgroundColor: "rgb(126, 57, 255)"}}>
                    <ul class="d-flex footerContainerItems mb-auto">
                        <li className="list-unstyled mb-1 mt-2 text-white footerItems" ><Link className="text-decoration-none text-white" to="#">Careers</Link></li>
                        <li className="list-unstyled mb-1 mt-2 text-white footerItems" ><Link className="text-decoration-none text-white" to="#">Presse</Link></li>
                        <li className="list-unstyled mb-1 mt-2 text-white footerItems" ><Link className="text-decoration-none text-white" to="#">Our team</Link></li>
                        <li className="list-unstyled mb-1 mt-2 text-white footerItems" ><Link className="text-decoration-none text-white" to="#">Investor relations</Link></li>
                    </ul>
                </Col>
                <Col md="auto" className="mr-auto h-75 mb-auto p-1 footerCol" style={{backgroundColor: "rgb(126, 57, 255)"}}>
                    <ul class="d-flex footerContainerItems mb-auto">
                        <li className="list-unstyled mb-1 mt-2 text-white footerItems" ><Link className="text-decoration-none text-white" to="#"><strong>Customer Support :</strong></Link></li>
                        <li className="list-unstyled mb-1 mt-2 text-white footerItems" ><Link className="text-decoration-none text-white" to="#">Help Center & FAQ</Link></li>
                        <li className="list-unstyled mb-1 mt-2 text-white footerItems" ><Link className="text-decoration-none text-white" to="#">contact@cookit.com</Link></li>
                        <li className="list-unstyled mb-1 mt-2 text-white footerItems" ><Link className="text-decoration-none text-white" to="#">0102030405</Link></li>
                    </ul>
                </Col>
                <Col md="auto" className=" h-75 mb-auto p-1 footerCol" style={{backgroundColor: "rgb(126, 57, 255)"}}>
                    <ul class="d-flex footerContainerItems mb-auto">
                        <li className="list-unstyled mb-1 mt-2 text-white footerItems" ><Link className="text-decoration-none text-white" to="#"><i class="far fa-copyright"></i> Cookit, LLC 2020</Link></li>
                        <li className="list-unstyled mb-1 mt-2 text-white footerItems" ><Link className="text-decoration-none text-white" to="#">Do Not "Sell" My Info</Link></li>
                        <li className="list-unstyled mb-1 mt-2 text-white footerItems" ><Link className="text-decoration-none text-white" to="#">Privacy</Link></li>
                    </ul>
                    <ul className="p-0">
                        <li xs={12} as={Col} className="list-unstyled mb-1 mt-2 text-white footerItems" ><Link className="text-decoration-none text-white" to="#"> <Image id="downloadIcon" src={downloadIcon} /></Link></li>
                    </ul>
                </Col>
                <Row className="text-left w-100">
                    <p className="text-white footerItems">If you are using a screen reader and are having problems using this website, please call 1-844-462-8299 for assistance.</p>
                </Row>
            </Row>
        </>
    );
}

export default Footer;