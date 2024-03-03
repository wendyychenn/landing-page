import Spline from '@splinetool/react-spline';

export default function Card1() {
    return (
        <div className='card'>
            <h1 className={`font-PoppinsBold text-3xl`} style={{color: 'red'}}>Standard</h1>
            <Spline scene="https://prod.spline.design/YuFoNNd9yIZZjgTd/scene.splinecode" />
            <h1 className={`font-PoppinsBold text-6xl my-4`} >$0</h1>
            <ul className={`my-4`}>
                <li className={``}>• Live Weather Updates for Vancouver</li>
                <li>• 7-Day and Hourly Forecast</li>
                <li>• Pokedex up to Generation 5</li>
            </ul>
            <button className={`py-5 px-4 rounded-xl bg-black text-white my-4`} style={{backgroundColor: 'red'}}>Subscribe Now</button>
        </div>
    )
}
