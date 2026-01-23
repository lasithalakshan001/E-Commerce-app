import SportImage from '../../assets/images/banner.png';
import Button from '../Atoms/Button.jsx';
const HeroSection = () => {
    return (
        <div className='position-relative overflow-hidden' style={{background: 'linear-gradient(135deg, #667eea 0%, #000851 100%)', minHeight: '600px'}}>
            <div className='container'>
                <div className='row align-items-center min-vh-50'>
                    <div className='col-lg-6 text-white py-5'>
                        <h1 className='display-3 fw-bold mb-4'>Sport gear for Champions</h1>
                        <p className='lead mb-4'>
                            Elevate your game with our premium sports gear. Whether you're a professional athlete or a weekend warrior, we have everything you need to perform at your best. From high-performance apparel to top-of-the-line equipment, our products are designed to help you reach your full potential.
                        </p>
                        <div className='d-flex gap-3'>
                            <Button text="Shop Now" className="btn-outline-light btn-lg px-5" />
                            <Button text="View Collection" className="btn-outline-light btn-lg px-5" />
                        </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg d-lg-block">
                        <div className='text-center'>
                            <img src={SportImage} alt="banner" style={{maxWidth:'100%' }} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default HeroSection;