import './App.scss';
import { NavLink, Switch, Route, useLocation } from 'react-router-dom'
import { useTransition, a, config, useSpring } from 'react-spring'
import logo from './images/logo.svg'

function App() {

  let location = useLocation();
  const transitions = useTransition(location, {
    /*from: { opacity: 0, x: -500 },
    enter: { opacity: 1, x: 0, },
    leave: { opacity: 0, x: 500, },*/
    from: { opacity: 0, },
    enter: { opacity: 1, },
    leave: { opacity: 0, },
    config: {
      config: config.molasses,
      duration: 400,
    }
  }
  )

  return (
    <>
      <nav id="menu-bar">

        <div className="menu-item">
          <NavLink exact activeClassName='current'
            to='/hours'>
            <div className="menu-icon" />
            horas
          </NavLink>
        </div>
        <div className="menu-item">
          <NavLink exact activeClassName='current'
            to='/city'>
            <div className="menu-icon" />
            mapas
          </NavLink>
        </div>
        <div className="menu-item">
          <NavLink exact activeClassName='current'
            to='/'>
            <div className="menu-icon" />
            inicio
          </NavLink>
        </div>

      </nav>

      <header id="filter-bar">
        <div className="city-filter">
          <input placeholder='Arequipa, PE' type="text" />
          <span>▼</span>
        </div>
        <div className='logo-container'>
          <img src={logo} alt="" />
          <p>Celsius</p>
        </div>

        <div className="city-filter">
          <input placeholder='13 Jul 2021' type="text" />
          <span>▼</span>
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
      {transitions(
        (props, item) => {
          return (
            <a.div id='main' style={props} >
              <Switch location={item}>
                <Route path='/hours' component={HoursPage} />
                <Route path='/city' component={CityPage} />
                <Route path='/' component={InicioPage} />
              </Switch>
            </a.div>
          )
        }
      )}
      <footer className="footer">footer</footer>
    </>
  );
}

export const InicioPage = () => {

  const spring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 400,
  })
  const spring2 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  })
  return (
    <div className='home-page'>
      <a.div className="widget" style={spring}>widget 1</a.div>
      <a.div className="widget" style={spring2}>widget 2</a.div>
      <div className="widget">widget 3</div>
      <div className="widget">widget a </div>
      <div className="widget">widget b </div>
      <div className="widget">widget c </div>
    </div>
  )
}

export const HoursPage = () => {
  return (
    <div className='page-hours'>
      <p>Lorem ip!</p>
    </div>
  )
}

export const CityPage = () => {
  return (
    <div style={{ background: 'lightgreen', width: '100%' }}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, deserunt adipisci porro iure quo harum eveniet sint? Ipsa, quasi distinctio. Ullam odit aperiam facere est sint sunt debitis, illum cumque voluptas corporis cupiditate quo voluptatum dolores soluta illo, error dignissimos atque id libero in temporibus! Consectetur doloremque dolorem, in beatae ipsam impedit suscipit tempore? Quam, consequuntur repudiandae, cum consectetur et sunt qui tempore ad officia dolor nisi? Minima eveniet nesciunt excepturi aliquid architecto quos iusto, officia sequi ipsum placeat. Quod officia vero laboriosam sint illum deleniti voluptatibus quibusdam enim dicta quaerat repellat culpa odit, similique repudiandae error voluptatem impedit expedita!</p>
    </div>
  )
}

export default App;
