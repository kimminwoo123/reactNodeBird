import React from 'react'
import Head from 'next/head'

import AppLayout from '../componets/AppLayout'
import NicknameEditForm from '../componets/NicknameEditForm'
import FollowList from '../componets/FollowList'

const Profile = () => {
    const followingList = [{nickname: '제로초'}, {nickname: '신바람'}, {nickname: '홍길동'}]
    const followerList = [{nickname: '개발자'}, {nickname: '헬창'}, {nickname: '카카오'}]

    return (
        <>
            <Head>
                <title>내 프로필</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followingList} />
                <FollowList header="팔로워 목록" data={followerList} />
            </AppLayout>
            <div>내 프로필</div>
        </>
    )
}

export default Profile