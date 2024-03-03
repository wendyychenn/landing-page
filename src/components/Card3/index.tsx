import Spline from '@splinetool/react-spline';

export default function Card3() {
    return (
        <div className={`bg-white border-2 border-black text-black w-80 rounded-2xl h-auto flex flex-col justify-center text-center py-8 px-8`}>
            <h1 className={`font-PoppinsBold text-3xl`} style={{color: '#4A06B8'}}>Premium</h1>
            <Spline scene="https://prod.spline.design/l5GPRxLtKWI8zEE0/scene.splinecode" />
            <h1 className={`font-PoppinsBold text-6xl my-4`} >$15</h1>
            <ul className={`my-4`}>
                <li className={``}>• All Advanced Benefits</li>
                <li>• Additional Backgrounds</li>
                <li>• Favourite Pokemon Feature</li>
                <li>• Pokemon Collecting Feature</li>
            </ul>
            <button className={`py-5 px-4 rounded-xl bg-black text-white my-4`} style={{backgroundColor: '#4A06B8'}}>Subscribe Now</button>
        </div>
    )
}
