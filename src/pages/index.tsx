import Image from 'next/image'
import Spline from '@splinetool/react-spline';
import Card1 from '@/components/Card1';
import Card2 from '@/components/Card2';
import Card3 from '@/components/Card3';

export default function Home() {
  return (
    <>
      <header style={{ width: '100vw', display: 'flex', flexDirection: 'row', padding: '1em', justifyContent: 'space-between', backgroundColor: 'white' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
          <img src='/images/logo_1.png' style={{ height: '2.5em' }} />
          <p>Pocket Forecast</p>
        </div>
        <button className={`text-white bg-black py-3 px-6 rounded `}>Subscribe</button>
      </header>

      <main className={`flex flex-col`}>

        <div className='banner'>
          <div>
            <h1 className={`font-PoppinsBold text-6xl mb-4 text-white`}>What's the Weather Like Today?</h1>
            <p className={`text-white text-2xl`}>With our Pocket Forecast weather app, let Pikachu, or hundreds of other Pokemon tell you!</p>
            <button className={`text-white py-5 px-8 rounded-xl my-10 text-xl`} style={{backgroundColor: '#006a90'}}>Check It Out!</button>
          </div>
          <div>
            <Spline className='pika' scene="https://prod.spline.design/Q76bwQTMDOdRSF5Y/scene.splinecode" style={{paddingRight: '2em', marginLeft: '2em'}}/>
          </div>
        </div>

        <div className='cards'>
          <Card1 />
          <Card2 />
          <Card3 />
        </div>

        <div className='info-banner'>
        <Spline className='question-mark' style={{width: '20vw'}} scene="https://prod.spline.design/A7dSn13xI-ZrcYh8/scene.splinecode" />
          <div>
          <h1 className={`font-PoppinsBold text-4xl mb-4`}>What Pokemon will you Meet?</h1>
          <p>Is it rainy? Is it snowing? Depending on the weather, you'll have the chance of encountering different types of Pokemon! If it's raining, maybe you'll run into some water types, like Squirtle, Vaporeon, Psyduck, or more! If it's a thunderstorm, maybe you can run into electric types like Mareep, Luxray, Emolga, or more!</p>
          </div>
        </div>

        <div className='newsletter'>
          <h1 className={`text-3xl font-PoppinsBold`}>Subscribe to Our Newsletter</h1>
          <p>Stay connected and updated on new future updates.</p>
          <div className='sign-up'>
            <input className={`py-2 px-4 rounded-xl`} placeholder='Your Email Address' />
            <button className={`py-2 px-4 rounded-xl bg-black`}>Submit</button>
          </div>
        </div>
      </main>

      <footer className={`flex flex-row justify-between bg-white p-4 text-black w-screen`}>
        <p>©Wendy</p>
        <a href='https://github.com/Civic86/Adv-final-Project'>Repository</a>
      </footer>
    </>
  )
}
