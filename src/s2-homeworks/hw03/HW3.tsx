import React, { useState } from 'react'
import { v1 } from 'uuid'
import s2 from '../../s1-main/App.module.css'
import GreetingContainer from './GreetingContainer'

/*
* 1 - DONE описать тип UserType
* 2 - DONE указать нужный тип в useState с users
* 3 - DONE дописать типы и логику функции pureAddUserCallback и проверить её тестами
* 4 - DONE в файле GreetingContainer.tsx дописать типизацию пропсов
* 5 - DONE в файле GreetingContainer.tsx указать нужные типы в useState с name и error
* 6 - DONE в файле GreetingContainer.tsx дописать тип и логику функции setNameCallback
* 7 - DONE в файле GreetingContainer.tsx дописать логику функций pureAddUser, pureOnBlur, pureOnEnter и проверить их
*  тестами
* 8 - DONE?? в файле GreetingContainer.tsx вычислить количество добавленных и имя последнего (totalUsers, lastUserName)
* 9 - DONE в файле Greeting.tsx дописать типизацию пропсов
* 10 - DONE в файле Greeting.tsx вычислить inputClass в зависимости от наличия ошибки
* 11 - сделать стили в соответствии с дизайном
* */

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

export const pureAddUserCallback = (name: string, setUsers: ([]) => void, users: UserType[]) => { // need to fix any
    const user: UserType = {
        _id: v1(),
        name
    }
    setUsers([...users, user])
}

const HW3 = () => {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        pureAddUserCallback(name, setUsers, users)
    }

    return (
        <div id={'hw3'}>
            <div className={s2.hwTitle}>Homework #3</div>
            {/*для автоматической проверки дз (не менять)*/}

            <div className={s2.hw}>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>
        </div>
    )
}

export default HW3
