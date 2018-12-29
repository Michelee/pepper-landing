import React from 'react'

import Layout from '../components/layout'
import MoonImg from '../images/moonImg.png'
import MakingMoves from '../components/icons/makingMoves'
import NextArrow from '../components/icons/next-arrow'
import OntraportForm from '../components/ontraport-form'
import '../styles/_index.scss'

const IndexPage = () => (
  <Layout>
    <div className="container">
      <img src={MoonImg} alt="moon" />
      <h1>
        Play. <br />
        Explore.<br />
        Connect.
      </h1>
      <MakingMoves />
      <span className="opening">opening 2019</span>
      <OntraportForm />
    </div>
  </Layout>
)

export default IndexPage
