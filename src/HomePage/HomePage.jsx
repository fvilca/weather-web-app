import { a, config, useSprings } from 'react-spring'
import './home_page.scss'
import Card from './../components/Card';
import WidgetTemp from '../components/WidgetTemp';
import WidgetDate from './../components/WidgetDate';
import SmallCard from './../components/SmallCard';

const data = [
  { id: 1, name: 'Visibility', value: '5.4', unit: 'km', icon: 'visibility.svg', arrow:'arrow-up' },
  { id: 2, name: 'Air quality ', value: '147', unit: '', icon: 'air_quality.svg', arrow:'arrow-down'},
  { id: 3, name: 'Precipitation', value: '3.00', unit: 'mm', icon: 'precipitation.svg', arrow:'circle'},
  { id: 4, name: 'UV', value: '5.4', unit: 'km', icon: 'uv.svg', arrow:'arrow-down'},
  { id: 5, name: 'Pressure', value: '147', unit: '', icon: 'pressure.svg', arrow:'arrow-down'},
  { id: 6, name: 'Wind', value: '3.01', unit: 'mm', icon: 'wind.svg', arrow:'arrow-down'},
]


export default function HomePage() {

  //const springs = useSprings(6, [].map((_, i) => ({
  const [springs,] = useSprings(6, (i) => ({
    from: { opacity: 0, scale: 0.9, },
    //to:{ opacity: 1, scale: 1 },
    to: async (next) => {
      await next({ opacity: 1, scale: 1.1, })
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
          <WidgetContainer
            anim={a}
            style={styles}
            number={index} />)}
    </div>
  )
}

const RatioWidget = ({ index, data }) => {

  return (
    <div className='ratio-widget'>
      <SmallCard {...data[index]} />
      <SmallCard {...data[index+1]} />
      <SmallCard {...data[index+2]} />
    </div>
  )
}


export const WidgetContainer = ({ anim, number, style }) => {
  let widgets = [
    <WidgetTemp />,
    <Card />,
    <WidgetDate />,
    <RatioWidget index={0} data={data} />,
    <Card />,
    <RatioWidget index={3} data={data} />
  ];
  return (
    <anim.div className="widget" style={style}>
      {widgets[number]}
    </anim.div>
  )
}
