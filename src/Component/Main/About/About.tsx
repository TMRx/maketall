import about1 from '../../../img/about1.jpg'
import about2 from '../../../img/about2.jpg'
import about3 from '../../../img/about3.jpg'
import about4 from '../../../img/about4.jpg'
import {AboutItem} from "./AboutItem";


export const About = () => {
    return (
        <section className="about">
            <div className="about-container">
                <ul className="about-list">
                    <AboutItem src={about1} header={"Макети архітектурних споруд"}/>
                    <AboutItem src={about2} header={"Іміджеві макети"}/>
                    <AboutItem src={about3} header={"Макети моделей транспорту"}/>
                    <AboutItem src={about4} header={"Презентаційні макети"}/>
                </ul>

            </div>
        </section>
    )
}