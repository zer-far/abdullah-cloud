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
  <!-- Replace these inputs with your own. Make sure they have a "name" attribute! -->

  <!-- It looks like you are creating a contact form. These email and subject fields are special -->
  <!-- See https://pageclip.co/docs#special-fields for more info -->
  <input type="email" name="email" value="roscoe@example.com" />
  <input type="text" name="subject" value="A contact subject" />

  <!-- This button will have a loading spinner. Keep the inner span for best results. -->
  <button type="submit" class="pageclip-form__submit">
    <span>Send</span>
  </button>
</form>
  
  </Layout>
)

export default IndexPage
