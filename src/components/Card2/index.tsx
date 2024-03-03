import Spline from '@splinetool/react-spline';

export default function Card2() {
    return (
        <div className='card'>
            <h1 className={`font-PoppinsBold text-3xl`} style={{color: '#1140CB'}}>Advanced</h1>
            <Spline scene="https://prod.spline.design/tEMYuEldOXRTb67i/scene.splinecode" />
            <h1 className={`font-PoppinsBold text-6xl my-4`}>$5</h1>
            <ul className={`my-4`}>
                <li className={``}>• All Standard Benefits</li>
                <li>• Weather Forecast for All Citys</li>
                <li>• Full Pokedex</li>
            </ul>
            <button className={`py-5 px-4 rounded-xl text-white my-4`} style={{backgroundColor: '#1140CB'}}>Subscribe Now</button>
        </div>
    )
}
