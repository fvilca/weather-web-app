import './App.scss';
import { Switch, Route, useLocation } from 'react-router-dom'
import { useTransition, a, config } from 'react-spring'
import HomePage from './HomePage/HomePage';
import MenuBar from './components/MenuBar';

function App() {

  let location = useLocation();
  const transitions = useTransition(location, {
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
      <MenuBar />

      {transitions(
        (props, item) => {
          return (
            <a.div id='main' style={props} >
              <Switch location={item}>
                <Route path='/setting' component={SettingPage} />
                <Route exact path='/hours' component={HomePage} />
                <Route exact path='/cities' component={HomePage} />
                <Route exact path='/' component={HomePage} />
              </Switch>
            </a.div>
          )
        }
      )}
      {/*<footer className="footer">footer</footer>
      */}
    </>
  );
}

export const SettingPage = () => {
  return (
    <div className='page-hours'>
      <p>Your LOCATION</p>
      <p>aUTODEFINE YES|no</p>
      <p>nOTIFICATIONS si|no</p>
      <p>nOTIFICATIONS si|no</p>
      texto  largo de warnings creo
      <p>Sistema demedicion C|F</p>
    </div>
  )
}
export default App;
