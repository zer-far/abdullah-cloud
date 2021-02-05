import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello</h1>
    <p>Welcome abdullah.cloud</p>
    <p>Go to page 2 to see services on this website.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
  
  <form action="https://send.pageclip.co/CP0PWPlRaxnTvzjfPtNxKXAvRhpAasYC/contact" class="pageclip-form" method="post">
  <input type="email" name="email" value="roscoe@example.com" />
  <input type="text" name="subject" value="A contact subject" />
  <button type="submit" class="pageclip-form__submit">
    <span>Send</span>
  </button>
</form>
  
  <link rel="stylesheet" href="formstyle.css">
  <h1>Contact Abdullah Farid</h1>
  <form action="https://send.pageclip.co/CP0PWPlRaxnTvzjfPtNxKXAvRhpAasYC" class="pageclip-form" method="post">
<form class="cf">
  <div class="half left cf">
    <input type="text" id="input-name" placeholder="Name">
    <input type="email" id="input-email" placeholder="Email address">
    <input type="text" id="input-subject" placeholder="Subject">
  </div>
  <div class="half right cf">
    <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
  </div>  
  <input type="submit" value="Submit" id="input-submit">
</form>
  
  </Layout>
)

export default IndexPage
