import React, { useEffect, useState } from 'react'
import s from './Study.module.scss'
import StudyOpen from './StudyOpen/StudyOpen'

interface Props {
}


export const Study = (props: Props) => {

    function getId() {
    const btn = document.getElementById('btn1');
    const el = document.getElementById('123321');
    if (el != null && btn != null) {
        btn.addEventListener('click', function handleClick() {
            if (el.style.display === "none") {
                el.style.display = 'block';
                btn.textContent = 'hide'
            }
            else {
                el.style.display = 'none';
                btn.textContent = 'show'
            }
        });
    }
    }

    useEffect(() => {
        getId()
    }, )

    

    return (
        <div className={s.container}>
            <div className={s.study}>
                <p className={s.title}> Учебные дисциплины </p>
                <p className={s.subtitle}> предметы доступные для прохождения тестов </p>
            </div>
            <div className={s.block}>
                <div className={s.wrapper}>
                    <div>
                        <p className={s.title2}> <span className={s.namediscipline}> Дисциплина </span>  </p>
                        <p className={s.subtitle2}>преподаватель: Фамилия Имя Отчество</p>
                    </div>
                    <button id='btn1' className={s.button}>show</button> </div>
            </div>
            <div id="123321" className={s.newElement}> <StudyOpen id={"open1"} /> </div>

            <div className={s.block}>
                <p className={s.title2}>Дисциплина</p>
                <p className={s.subtitle2}>преподаватель: Фамилия Имя Отчество</p>
            </div>
            <div className={s.block}>
                <p className={s.title2}>Дисциплина</p>
                <p className={s.subtitle2}>преподаватель: Фамилия Имя Отчество</p>
            </div>

        </div>
    )
}