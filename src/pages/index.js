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
<a href="https://ostr.io/protected/abdullah.cloud" target="_blank" rel="noopener noreferrer"><img src="https://ostr.io/images/obc.png" height="32" /></a>
  <!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "1a7debb524eb4cf19151f39a981b0612"}'></script><!-- End Cloudflare Web Analytics -->
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
