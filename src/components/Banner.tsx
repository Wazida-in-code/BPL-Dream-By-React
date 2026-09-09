import BannerImg from '../assets/Banner.png'
import BannerImg2 from '../assets/rb_2148971570 2.png'

const Banner = () => {
    return (
        <div className="h-100 bg-no-repeat bg-center bg-cover w-full" style={{ backgroundImage: `url(${BannerImg}), url(${BannerImg2})`}}>
        
            {/* style={{ */}
        {/* // backgroundImage: `url(${BannerImg1}), url(${BannerImg2})`, */}
    {/* //   }} */}
        </div>
    );
};

export default Banner;