import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
     <h1>This is a list of links to services on this website</h1>
    
<a href="http://dvwa.abdullah.cloud">Damn Vulnerable Web Application - https://github.com/digininja/DVWA</a>
<p> </p>
<a href="https://message.abdullah.cloud">Send a custom notification to my phone</a>
<p> </p>
<a href="http://etherpad.abdullah.cloud">Etherpad - https://github.com/ether/etherpad-lite</a>
<p> </p>
<a href="https://spiderfoot.abdullah.cloud">Spiderfoot - https://github.com/smicallef/spiderfoot</a>
<p> </p>
<a href="https://upload.abdullah.cloud">Simple File Upload - https://www.simplefileupload.com/</a>
<p> </p>
<a href="https://steganography.abdullah.cloud">Encode / Decode message in image</a>
<p> </p>
<a href="https://shortener.abdullah.cloud">Link shortener</a>
<p> </p>
<a href="https://mindmaps.abdullah.cloud">Mindmaps - https://github.com/drichard/mindmaps</a>
<p> </p>
<a href="https://cyberchef.abdullah.cloud">CyberChef - https://github.com/gchq/CyberChef</a>
<p> </p>
<a href="http://whoogle.abdullah.cloud">Whoogle - https://github.com/benbusby/whoogle-search</a>
<p> </p>
<a href="https://atheos.abdullah.cloud">Atheos - https://github.com/Atheos/Atheos</a>
<p> </p>
<a href="http://code.abdullah.cloud">code-server - https://github.com/cdr/code-server</a>
<p> </p>
<a href="https://chat.abdullah.cloud">Live chat</a>
<p> </p>
<a href="https://af15.abdullah.cloud">AF15</a>
<p> </p>
<a href="http://portfolio.abdullah.cloud">My portfolio</a>
<p> </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
