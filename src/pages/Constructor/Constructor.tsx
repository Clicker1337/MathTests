import s from './Constructor.module.scss'

type Props = {}

export const Constructor = (props: Props) => {
  return (
    <div className={s.constr}>
      <div className={s.wrapper}>
        <div className={s.block}>
          <p className={s.title1}> Тест: неопределенные интегралы </p>

          <div className={s.container}>

            <div className={s.zadanie}>
              <p className={s.title2}> Задание 1. Решите интеграл </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}