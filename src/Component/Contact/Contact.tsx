import Sprite from '../../img/icons/icons.svg'
import {useForm} from "react-hook-form";
import {Input} from "../From/Input";
import styled from 'styled-components'
import {Map} from './Map/Map'

export const Contact = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();


    // @ts-ignore
    const onSubmit = data => {
        // console.log(`this is my fomData ${data}`)

    };

    const From = styled.form`
        margin-left: auto;
        margin-right: auto;
        max-width: 600px;
        margin-top 77px

    `


    return (
        <section className='contact'>
            <div className="contact-container">
                <From id="modal" onSubmit={handleSubmit(onSubmit)}>
                    <b className="modal-header">Введіть, будь ласка, Ваші контактні дані, ми Вам зателефонуємо</b>

                    <Input
                        type='text'
                        labelName="Ім'я"
                        label='name'
                        //            @ts-ignore
                        register={register}
                        svg={Sprite + '#user'}
                        errors={errors}
                        required
                    />
                    <Input
                        type='tel'
                        labelName='Телефон'
                        label='tel'
                        //            @ts-ignore
                        register={register}
                        svg={Sprite + '#smartphone'}
                        errors={errors}
                    />
                    <Input
                        type='email'
                        labelName='Пошта'
                        label='email'
                        //            @ts-ignore
                        register={register}
                        svg={Sprite + '#mail'}
                        errors={errors}
                        required
                    />

                    <div className="group">
                        <label htmlFor="comment">Коментар</label>
                        <textarea
                            className="form-input"
                            id="comment"
                            placeholder="Введіть текст"
                            {...register("comment")}
                        />
                    </div>
                    <button className="form-btn" type="submit">Надіслати
                    {/* <a href="mailto:projektmaket@gmail.com" >Надіслати</a> */}
                    </button>
                </From>

                <Map/>

            </div>
        </section>
    )
}