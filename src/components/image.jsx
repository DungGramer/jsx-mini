import img from '../../public/images/319225.jpg';
let img2 = require('~/public/images/319225.jpg');
import Svg from '~/public/images/Starsinthesky_origin.svg';

const p = `Hello`;

const Image = () => {
  return (
    <>
      {/* <img src={img} /> */}
      {/* <img src={img2} /> */}
      {/* <img src={require('~/public/images/319225.jpg')} /> */}
      {/* <Svg /> */}
      <Svg />
      <span dangerouslySetInnerHTML={p} />
    </>
  );
};

export default Image;
