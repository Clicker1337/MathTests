import React from 'react'
import s from './Study.module.scss'

interface Props {
}

export const Study = (props: Props) => {
    return (
        <div className={s.container}>
            <div className={s.study}>
                <p className={s.title}> Учебные дисциплины </p>
                <p className={s.subtitle}> предметы доступные для прохождения тестов </p>
            </div>
            <div className={s.block}>
                <div>
                    <p className={s.title2}>Дисциплина</p>
                    <p className={s.subtitle2}>преподаватель: Фамилия Имя Отчество</p>
                </div>
            </div>
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