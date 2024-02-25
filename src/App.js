import React from 'react';
import { Parallax } from 'react-parallax';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

const App = () => {
  const parallaxImage1 = 'https://th.bing.com/th/id/R.4f36fd95d65c62d540bebe5af04cd19b?rik=dMG36mCtUTQcZg&riu=http%3a%2f%2fpublicdomainpictures.net%2fpictures%2f30000%2fvelka%2fassortment-of-sea-shells.jpg&ehk=5nPPnbsqBggVli6bQd0aV9I7263DH61RFS6tHArYaXg%3d&risl=&pid=ImgRaw&r=0';
  const parallaxImage2 = 'https://th.bing.com/th/id/OIP.nC9B31CabhA6zplpWY6YSwHaE9?rs=1&pid=ImgDetMain';
  const parallaxImage3 ='https://www.americanoceans.org/wp-content/uploads/2021/04/nautilus.jpg'
  const sliderImages = [
    'https://thumbs.dreamstime.com/b/seashell-collection-showcases-beauty-nature-patterns-generated-ai-seashell-collection-showcases-beauty-nature-patterns-274950026.jpg',
    'https://www.nhm.ac.uk/content/dam/nhmwww/discover/ct-scanning-deep-sea-snails/deep-sea-snail-ONE-two-column.jpg.thumb.768.768.jpg',
    'https://www.poppe-images.com/wp-content/uploads/947137.jpg',
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='hh'>Carrier Shells</h1>
      </header>
     <div className='p1'>
     <Parallax bgImage={parallaxImage3} strength={500}>
        <div className="parallax-content">
          <h2 className='hd'>The planet has
                        one global ocean carrier shells</h2>
          <p className=''>The carrier shells of the The ocean is a huge body of saltwater that covers about 71 percent of Earth’s surface. The planet has
                        one global ocean, though oceanographers and the countries of the world have traditionally divided it
                        into four distinct regions: the Pacific, Atlantic, Indian, and Arctic oceans. Beginning in the 20th
                        century, some oceanographers labeled the seas around Antarctica the Southern Ocean, and in 2021
                        National Geographic officially recognized this fifth ocean family Xenophoridae are the most remarkable bunch of snails.  Both their common name and their Latin name give away their uniqueness.  Xenophoridae in Latin actually translates to foreign carrying.  A carrier shell will cement stones, other shells, sponges, and other debris to its shell..</p>
        </div>
      </Parallax>
     </div>
      <div className='para'>
      <p>The carrier shells of the family Xenophoridae are the most remarkable bunch of snails.This shellfish has become a symbol of New Zealand. The natural habitat of these creatures is found in deep water. They live in colonies and feed off of tiny crustaceans called krill  Both their common name and their Latin name give away their uniqueness.  Xenophoridae in Latin actually translates to foreign carrying.  A carrier shell will cement stones, other shells, sponges, and other debris to its shell..</p>

      </div>

      <Parallax bgImage={parallaxImage1} strength={500}>
        <div className="parallax-content">
          <h2 className='hed'>carrier shells of the family Xenophoridae are the most remarkable bunch of snails</h2>
          <p>The carrier shells of the family Xenophoridae are the most remarkable bunch of snails.  Both their common name and their Latin name give away their uniqueness.  Xenophoridae in Latin actually translates to foreign carrying.  A carrier shell will cement stones, other shells, sponges, and other debris to its shell..</p>
        </div>
      </Parallax>
      <div className='para'>
      <p>The carrier shells of the family Xenophoridae are the most remarkable bunch of snails.This shellfish has become a symbol of New Zealand. The natural habitat of these creatures is found in deep water. They live in colonies and feed off of tiny crustaceans called krill  Both their common name and their Latin name give away their uniqueness.  Xenophoridae in Latin actually translates to foreign carrying.  A carrier shell will cement stones, other shells, sponges, and other debris to its shell..</p>

      </div>
     <div className='jj'>
     <div className="slider-container">
        <Slider {...sliderSettings}>
          {sliderImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
     </div>

      <Parallax bgImage={parallaxImage2} strength={500}>
        <div className="parallax-content">
          <h2>DEEP SEA</h2>
          <p>The carrier shells of the family Xenophoridae are the most remarkable bunch of snails.  Both their common name and their Latin name give away their uniqueness.  Xenophoridae in Latin actually translates to foreign carrying.  A carrier shell will cement stones, other shells, sponges, and other debris to its shell..</p>
        </div>
      </Parallax>
      
    </div>
  );
};

export default App;
