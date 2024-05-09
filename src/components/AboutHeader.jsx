import '../stylesheets/build/AboutHeader.css';
// import "../stylesheets/AboutHeader.scss";
import Container from './Container';
import { useMedia } from '../hooks/useMedia';
import useVersionClass from '../hooks/useVersionClass';
import useVersionText from '../hooks/useVersionText';
import useVersionPath from '../hooks/useVersionPath';
import ClickRequest from './ClickRequest';

export default function AboutHeader() {
  const flexDirectionChange = useMedia('(max-width: 900px)');
  const flexClass = flexDirectionChange ? 'about-flex-column' : 'about-flex-row';

  const text = useVersionText();
  const baseURL = useVersionPath();

  return (
    <div className={useVersionClass('about-header')}>
      <Container classToAdd={flexClass}>
        <div className={useVersionClass('about-header-moto')}>
          <h1>{text.header_h}</h1>
          <p>{text.about_description_p_1}</p>
          <p>{text.about_description_p_2}</p>
          <ClickRequest requestAnchor={'#make-request-ab'} needToCloseMenu={false}>
            <button>Request an estimate</button>
          </ClickRequest>
        </div>
        <div className='about-header-pic'>
          <img src={`${baseURL}/about-header-pic-fs8.png`} />
        </div>
      </Container>
    </div>
  );
}
