import Title from './ui/Title';
import Slider from 'react-slick';

const CarouselItem = ({paragraph, title}) => {
  return (
    <div>
      <div className='px-5 mt-48 mx-auto text-white flex flex-col items-start gap-y-8'>
        <Title addClass='text-5xl'>{ title }</Title>
        <p className='text-sm sm:w-2/5 w-full'>{ paragraph }</p>
        <button className='btn-primary'>Order Now</button>
      </div>
    </div>
  );
};

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 30000,
    appendDots: (dots) => (
      <div>
        <ul className='px-5 w-full text-center md:text-start'>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className='dots'></div>
    ),
  };

  return (
    <div className='h-screen w-full'>
      <div className='absolute top-0 left-0 w-full h-full'>
        <div className='relative h-full w-full'>
          <img className='object-cover h-full w-full' src='/images/carousel-bg.jpeg' alt='' priority='true' />
        </div>
      </div>
      <Slider {...settings}>
        <CarouselItem title='Fast Food Restaurant' paragraph='Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.'/>
        <CarouselItem title='Fast Food Restaurant' paragraph='Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.'/>
      </Slider>
    </div>
  );
};

export default Carousel;