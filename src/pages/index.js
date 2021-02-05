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
  
  </Layout>
)

export default IndexPage
