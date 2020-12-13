// 일부 공통인 것들
import React, { useState, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Menu, Input, Row, Col } from 'antd'

import UserProfile from '../componets/UserProfile'
import LoginForm from '../componets/LoginForm'
import Styled from 'styled-components'

const SearchInput = Styled(Input.Search)`
                    vertical-align : middle;
                    `

const AppLayout = ({ children }) => {
const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>

                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>

                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>

                <Menu.Item>
                    <SearchInput placeholder="검색어 입력" enterButton />
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
                </Col>

                <Col xs={24} md={12}>
                    { children }
                </Col>

                <Col xs={24} md={6}>
                    <a href="https://naver.com" target="_blank" rel="noreferrer noopener">NAVER</a>
                </Col>
            </Row>
        </div>
    )
}

AppLayout.prototype = {
    children: PropTypes.node.isRequired,
}

export default AppLayout