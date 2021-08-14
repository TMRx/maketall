import { parenthesizedExpression } from '@babel/types'
import Sprite from '../../../img/icons/icons.svg'
// import image from '../../../img/partners.jpg'
export const Client = () => {
    return <>
        <section className="clients">
            <div className="clients-container">
                <h2>Наші клієнти</h2>
                {/* <img src={image} alt="Write something here " width= '100% ' height = '100%'  /> */} 
                 <ul className="clients-list">
                    <li>
                        <svg className="clients-icon integra" width="70%">
                            <use href={Sprite + "#logo-ib"}/>
                        </svg>
                    </li>
                    <li className="clients-staromak">
                        <svg className="clients-icon staromak" width="150%">
                            <use href={Sprite + "#logo-staromak"}/>
                        </svg>
                    </li>
                    <li>
                        <svg className="clients-icon" width="100%">
                            <use href={Sprite + "#logo-privatbank"}/>
                        </svg>
                    </li>
                    <li>
                        <svg className="clients-icon" width="40%">
                            <use href={Sprite + "#logo-nb"}/>
                        </svg>
                    </li>
                    <li>
                        <svg className="clients-icon" width="50%">
                            <use href={Sprite + "#logo-uz"}/>
                        </svg>
                    </li>
                </ul>
            </div>
        </section>
        </>
}