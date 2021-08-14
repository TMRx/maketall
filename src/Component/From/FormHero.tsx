import {useData} from '../../Context/DataContext'
import Sprite from '../../img/icons/icons.svg'
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {Input} from "./Input";


export const FormHero = () => {
    const {data, setValues}: any = useData()
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    console.log(errors)

    // @ts-ignore
    const onSubmit = data => {
        // console.log(`this is my fomData ${data}`)
        formClose()
    };




    useEffect(() => {
        console.log(data)
        if (data) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "";
        }

    }, [data])

    const formClose = () => {
        setValues(false)
    }

    return (
        <div
            className={data ? "backdrop" : "backdrop is-hidden"}
        >
            <div className="modal">
                <div className="modal-wrapper">
                    <button
                        className="btn-close"
                        onClick={() => {
                            formClose()
                        }}
                    >&#9932;</button>
                    <form id="modal" onSubmit={handleSubmit(onSubmit)}>
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
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )


}