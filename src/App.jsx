import './App.scss';
import { NavLink, Switch, Route, useLocation } from 'react-router-dom'
import { useTransition, a, config } from 'react-spring'

function App() {

  let location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, x: -500 },
    enter: { opacity: 1, x: 0,  },
    leave: { opacity: 0, x: 500, },
    config: config.molasses,
  }
  )

  return (
    <div className="grid-container">
      <aside className="sidebar">
        <NavLink exact activeClassName='current'
          to='/hours'  >hours</NavLink>
        <NavLink exact activeClassName='current'
          to='/city'  >city</NavLink>
        <NavLink exact activeClassName='current'
          to='/'  >inicio</NavLink>
      </aside>

      <header className="header"><span> header</span></header>
      <div className="filter-bar">FilteringBar</div>
      <nav className="navbar">navbar</nav>
      {
        transitions(
          (props, item) => {
            return (
              <a.div className='main' style={props} >
                <Switch location={item} >
                  <Route path='/hours' component={HoursPage} />
                  <Route path='/city' component={CityPage} />
                  <Route path='/' component={InicioPage} />
                </Switch>
              </a.div>
            )
          }
        )
      }

      <footer className="footer">footer</footer>
    </div>
  );
}

export const InicioPage = () => {
  return (
    <div style={{ background: 'lightpink', width: '100%' }}>
      hola
      <h1>Inicio</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, deserunt adipisci porro iure quo harum eveniet sint? Ipsa, quasi distinctio. Ullam odit aperiam facere est sint sunt debitis, illum cumque voluptas corporis cupiditate quo voluptatum dolores soluta illo, error dignissimos atque id libero in temporibus! Consectetur doloremque dolorem, in beatae ipsam impedit suscipit tempore? Quam, consequuntur repudiandae, cum consectetur et sunt qui tempore ad officia dolor nisi? Minima eveniet nesciunt excepturi aliquid architecto quos iusto, officia sequi ipsum placeat. Quod officia vero laboriosam sint illum deleniti voluptatibus quibusdam enim dicta quaerat repellat culpa odit, similique repudiandae error voluptatem impedit expedita!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, deserunt adipisci porro iure quo harum eveniet sint? Ipsa, quasi distinctio. Ullam odit aperiam facere est sint sunt debitis, illum cumque voluptas corporis cupiditate quo voluptatum dolores soluta illo, error dignissimos atque id libero in temporibus! Consectetur doloremque dolorem, in beatae ipsam impedit suscipit tempore? Quam, consequuntur repudiandae, cum consectetur et sunt qui tempore ad officia dolor nisi? Minima eveniet nesciunt excepturi aliquid architecto quos iusto, officia sequi ipsum placeat. Quod officia vero laboriosam sint illum deleniti voluptatibus quibusdam enim dicta quaerat repellat culpa odit, similique repudiandae error voluptatem impedit expedita!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, deserunt adipisci porro iure quo harum eveniet sint? Ipsa, quasi distinctio. Ullam odit aperiam facere est sint sunt debitis, illum cumque voluptas corporis cupiditate quo voluptatum dolores soluta illo, error dignissimos atque id libero in temporibus! Consectetur doloremque dolorem, in beatae ipsam impedit suscipit tempore? Quam, consequuntur repudiandae, cum consectetur et sunt qui tempore ad officia dolor nisi? Minima eveniet nesciunt excepturi aliquid architecto quos iusto, officia sequi ipsum placeat. Quod officia vero laboriosam sint illum deleniti voluptatibus quibusdam enim dicta quaerat repellat culpa odit, similique repudiandae error voluptatem impedit expedita!</p>
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
    <div style={{ background: 'lightgreen', height: '100%' }}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, deserunt adipisci porro iure quo harum eveniet sint? Ipsa, quasi distinctio. Ullam odit aperiam facere est sint sunt debitis, illum cumque voluptas corporis cupiditate quo voluptatum dolores soluta illo, error dignissimos atque id libero in temporibus! Consectetur doloremque dolorem, in beatae ipsam impedit suscipit tempore? Quam, consequuntur repudiandae, cum consectetur et sunt qui tempore ad officia dolor nisi? Minima eveniet nesciunt excepturi aliquid architecto quos iusto, officia sequi ipsum placeat. Quod officia vero laboriosam sint illum deleniti voluptatibus quibusdam enim dicta quaerat repellat culpa odit, similique repudiandae error voluptatem impedit expedita!</p>
    </div>
  )
}

export default App;
