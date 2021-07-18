import { a, config, useSprings } from 'react-spring'
import './home_page.scss'
import Card from './../components/Card';


export default function HomePage() {

  //const springs = useSprings(6, [].map((_, i) => ({
  const [springs,] = useSprings(6, (i) => ({
    from: { opacity: 0, scale: 0.9,},
    //to:{ opacity: 1, scale: 1 },
    to: async (next) => {
      await next({ opacity: 1, scale: 1.1,})
      await next({ opacity: 1, scale: 1 })
    },
    delay: 200 * i,
    config: {
      config: config.molasses,
      duration: 200
    }
  })
  );

  return (
    <div className='home-page'>
      {springs.map(
        (styles, index) =>
          <WidgetContainer anim={a} style={styles} number={index}></WidgetContainer>)}
    </div>
  )
}

export const WidgetContainer = ({ anim, number, style }) => {
  let widgets = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />];
  return (
    <anim.div className="widget" style={style}>
      {widgets[number]}
    </anim.div>
  )
}
