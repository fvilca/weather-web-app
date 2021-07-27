import './home_page.scss'
import TempWidget from '../components/WidgetTemp';
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import CityFilter from './../components/CityFilter';
import DateFilter from '../components/DateFilter';
import { RatioWidget1, RatioWidget2 } from '../components/RatioWidget';

export default function HomePage() {

  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    else {
      //setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
      //}, 0);*/

    }
  }, [hash, pathname]); // do this on route change


  return (
    <div className='home-page'>

      <div className="weather-day-bar">
        weather slider
      </div>

      <TempWidget />
      <CityFilter />
      <DateFilter />
      <RatioWidget1 />,
      <RatioWidget2 />

      <section id="sectionhours">
        24 Horas del dia
      </section>

      <section id="sectioncities">
        Ciudades
      </section>

    </div>
  )
}


/*<header id="filter-bar">


        <div className="filter">
          <svg
            width="17.967"
            height="17.967"
            viewBox="0 0 20 20"
            style={{ 'display': 'inline-block', 'verticalAlign': 'middle' }} >
            <path id="Icon_map-search" data-name="Icon map-search" d="M14.587,12.2a7.105,7.105,0,1,0-2.392,2.39l4.821,4.821,2.391-2.392Zm-6.058.719a4.383,4.383,0,1,1,4.385-4.381,4.39,4.39,0,0,1-4.385,4.381Z" transform="translate(-1.44 -1.44)" fill="#939482" />
          </svg>
          <input placeholder='Arequipa, PE' type="text" />
          <button><svg
            fill="currentColor"
            height="24" width="24"
            viewBox="0 0 20 20"
            style={{ 'display': 'inline-block', 'verticalAlign': 'middle' }} >
            <path
              d="M13.418,7.859c0.271-0.268,0.709-0.268,0.978,0c0.27,0.268,0.272,0.701,0,0.969l-3.908,3.83	c-0.27,0.268-0.707,0.268-0.979,0l-3.908-3.83c-0.27-0.267-0.27-0.701,0-0.969c0.271-0.268,0.709-0.268,0.978,0L10,11L13.418,7.859z	">
            </path>
          </svg>
          </button>
        </div>
        <div className='logo-container'>
          <img src={logo} alt="" />
          <p>Celsius</p>
        </div>

        <div className="filter">
          <svg
            width="17.97"
            height="19.967"
            viewBox="0 0 20 20">
            <path id="Icon_material-date-range" data-name="Icon material-date-range" d="M10.49,11.985h-2v2h2Zm3.993,0h-2v2h2Zm3.993,0h-2v2h2Zm2-6.988h-1V3h-2V5H9.492V3h-2V5h-1a1.988,1.988,0,0,0-1.987,2L4.5,20.97a2,2,0,0,0,2,2H20.473a2,2,0,0,0,2-2V6.993A2,2,0,0,0,20.473,5Zm0,15.973H6.5V9.988H20.473Z" transform="translate(-4.5 -3)" fill="#939482" />
          </svg>

          <input placeholder='13 Jul 2021' type="text" />
          <div className='icon-down'>
            <svg
              fill="currentColor"
              height="24" width="24"
              viewBox="0 0 20 20"
              style={{ 'display': 'inline-block', 'verticalAlign': 'middle' }} >
              <path
                d="M13.418,7.859c0.271-0.268,0.709-0.268,0.978,0c0.27,0.268,0.272,0.701,0,0.969l-3.908,3.83	c-0.27,0.268-0.707,0.268-0.979,0l-3.908-3.83c-0.27-0.267-0.27-0.701,0-0.969c0.271-0.268,0.709-0.268,0.978,0L10,11L13.418,7.859z	">
              </path>
            </svg>
          </div>
        </div>
      </header>

      <nav id="weather-bar">
        <div className="weather-icon">
          <div className="icon"></div>
          <div className="label-icon">label</div>
        </div>
        <div className="weather-icon">
          <div className="icon"></div>
          <div className="label-icon">label</div>
        </div>
        <div className="weather-icon">
          <div className="icon"></div>
          <div className="label-icon">label</div>
        </div>
        <div className="weather-icon">
          <div className="icon"></div>
          <div className="label-icon">label</div>
        </div>
        <div className="weather-icon">
          <div className="icon"></div>
          <div className="label-icon">label</div>
        </div>

      </nav>
      */