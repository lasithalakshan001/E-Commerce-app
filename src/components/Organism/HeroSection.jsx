import SportImages from '../../assets/images/banner.png'
import '../Atoms/Button'

const HeroSection = () => {

    return (
        <div className='position-relative overflow-hidden' style={{backgroung:'linear-gradient(135deg),#667eea 0%, #764ba2 100%',minheight:'400px'}}>
            <div className="row align items-center min-vh-50">
                <div className="col-lg-6 text-white py-5">
                    <h1 className="display-3 fw-bold md-4">Sports gear </h1>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;