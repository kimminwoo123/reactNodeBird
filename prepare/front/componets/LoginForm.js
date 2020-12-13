import { Form, Input } from 'antd'
import Link from 'next/link'
import React, { useCallback, useState, useMemo } from 'react'
import Styled from 'styled-components'

const ButtonWrapper = Styled.div`
                       margin-top : 10px;`

const FormWrapper = Styled(Form)`
                        padding : 20px;`

const LoginForm = ({ setIsLoggedIn }) => {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')

    const onchangeId = useCallback((e) => {
        setId(e.target.value)
    }, [])

    const onchangePassword = useCallback((e) => {
        setPassword(e.target.value)
    }, [])

    const onSubmitForm = useCallback(() => {
        console.log(id, password)
        setIsLoggedIn(true)
        
    }, [id, password])

    

    return (
    <>
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onchangeId} required />
            </div>

            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input name="user-password" type="password" value={password} onChange={onchangePassword} required />
            </div>

            <ButtonWrapper>
                <button type="primary" htmltype="submit" loading={false}>로그인</button>
                <Link href="/signup"><a><button>회원가입</button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    </>
    )
}

export default LoginForm