import React, { useCallback, useState } from 'react'
import Head from 'next/head'
import { Form, Input } from 'antd'

import AppLayout from '../componets/AppLayout'

const Signup = () => {

    const [id, setId] = useState('')

    const onChangeId = useCallback((e) => {
        setId(e.target.value)
    }, [])

    const onSubmit = useCallback(() => {

    }, [])

    return (
        <>
            <AppLayout>
                <Head>
                    <title>회원가입</title>
                </Head>
                <Form onFinish={onSubmit}>
                        <div>
                            <label htmlFor="user-id">아이디</label>
                        <br />
                            <Input name="user-id" value={id} required onChange={onChangeId} />
                        </div>
                        <div>
                            <label htmlFor="user-nick">닉네임</label>
                        <br />
                            <Input name="user-nick" value={nickname} required onChange={onChangeNickname} />
                        </div>
                        <div>
                            <label htmlFor="user-password">비밀번호</label>
                        <br />
                            <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
                        </div>
                        <div>
                            <label htmlFor="user-password-check">비밀번호체크</label>
                        <br />
                            <Input
                            name="user-password-check"
                            type="password"
                            value={passwordCheck}
                            required
                            onChange={onChangePasswordCheck}
                        />
                          {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
                        </div>
                </Form>
            </AppLayout>
        </>
    )
}

export default Signup