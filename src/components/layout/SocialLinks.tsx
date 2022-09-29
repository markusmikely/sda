import React from 'react'
import styled from 'styled-components'

import Twitter from './../../assets/images/twitter.svg'
import Youtube from './../../assets/images/youtube.svg'
import Instagram from './../../assets/images/instagram.svg'
import Tiktok from './../../assets/images/tiktok.svg'

const Links = styled.ul`
  margin: 50px auto 0;
  padding: 0;
  li {
    list-style: none;
    display: inline-block;
    padding: 0 10px;
    a {
      display: block;
      img {
        width: 26px;
        height: 26px;
      }
    }
  }
`

function SocialLinks() {
  return (
    <Links className="social-links">
      <li><a href="https://www.twitter.com/sda-nottinghill" target="_blank"><img src={Twitter} /></a></li>
      <li><a href="https://www.youtube.com/sda-nottinghill" target="_blank"><img src={Youtube} /></a></li>
      <li><a href="https://www.instgram.com/sda-nottinghill" target="_blank"><img src={Instagram} /></a></li>
      <li><a href="https://www.tiktok.com/sda-nottinghill" target="_blank"><img src={Tiktok} /></a></li>
    </Links>
  );
}

export default SocialLinks;
