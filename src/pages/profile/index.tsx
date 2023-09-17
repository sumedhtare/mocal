import React from 'react'
import PageWithNav from '../../components/template/pageWithNav'
import ProfilePannel from '../../components/organism/profilePannel'
import Layout from '../../components/template/layout'

export default function ProfilePage () {
  return (
    <Layout>
      <PageWithNav>
        <ProfilePannel />
      </PageWithNav>
    </Layout>
  )
}
