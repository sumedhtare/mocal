import React from 'react'
import PageWithNav from '../../components/template/pageWithNav'
import ControlPannel from '../../components/organism/controlPannel'
import Layout from '../../components/template/layout'

export default function DashboardPage () {
  return (
            <Layout>
                  <PageWithNav>
                        <ControlPannel />
                  </PageWithNav>
            </Layout>
  )
}
