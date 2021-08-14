import {useData} from "../../../Context/DataContext";

export const Hero = () => {

    const {setValues}: any = useData()

    return <>
        <section className="hero">
            <div className="hero-container">
                <h1>АРХІТЕКТУРНЕ МАКЕТУВАННЯ</h1>
                <a
                    className="modal-open"
                    onClick={()=> {
                        setValues(true)
                    }}

                >Замовити послугу</a>
            </div>
        </section>
        </>
}