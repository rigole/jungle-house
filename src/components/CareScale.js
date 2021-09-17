import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'
function CareScale({ scaleValue, careType }) {

    const range = [1, 2, 3]
    const scaleType =
        careType === 'light ' ? (
            <img src={Sun} alt="sun-icon"/>
        ) : (
            <img src={Water} alt="water-icon"/>
        )
}

export default CareScale

