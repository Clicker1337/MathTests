import React from 'react'
import s from './StudyOpen.module.scss'

interface Props {
    id: string
}

const StudyOpen = (props: Props) => {
    return (
        <div className={s.container}>
            <div className={s.content}>
            </div>
        </div>
    )
}

export default StudyOpen;