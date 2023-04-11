import * as React from "react"
import {  graphql } from "gatsby"
import Seo from "../components/seo"
import { Link} from "gatsby"
import RichText from '../components/richText/richText'
import Layout from "../components/layout"

const IndexPage =({data}) => {
  const sectionData ={...data.contentfulContentMainModel.sectionBlocks[0]}
  const supportData ={...data.contentfulIconLink}
  console.log(supportData)
    return (
      <Layout>
        <section className='section-about section-indent'  style={{backgroundColor: sectionData.sectionColor? sectionData.sectionColor : '' }}>
          <div className="container"> 
            
            <div className="description">
                {sectionData.title &&  <h2 className="title" style={{color: sectionData.textColor ? sectionData.textColor : '#0000' }}>{sectionData.title}</h2> }
                {sectionData?.description &&  <RichText data={sectionData?.description} colorText={ sectionData.textColor}/>}
            </div>
          
            {sectionData?.buttonURl   && <div className="btn-wrap">
                <Link to={sectionData.buttonURl} className="link" style={{color: sectionData.textColor ? sectionData.textColor: '#0000' }}>{sectionData.buttonText}</Link>
              </div>}
              <div className="support-us">
                    <h5  style={{color: sectionData.textColor ? sectionData.textColor : '#0000' }}>
                      <span>{supportData.text}</span>
                      <a href={supportData.iconLinkUrl}>
                        <img  src={supportData.imageIcon.url} alt={supportData.imageIcon.title}/>
                      </a>
                    </h5>
              </div>
          </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />
export default IndexPage

export const query = graphql`
{
  contentfulIconLink(nameIcon: {eq: "Patreon"}) {
    id
    imageIcon {
      url
      title
      publicUrl
    }
    nameLink
    nameIcon
    text
    iconLinkUrl
  }
  contentfulContentMainModel(nameBlock: {eq: "ModelAboutUS"}) {
    id
    sectionBlocks {
      ... on ContentfulBlockDescription {
        id
        title
        textColor
        sectionColor
        node_locale
        nameBlock
        buttonText
        button
        internal {
          content
          description
          contentFilePath
        }
        description {
          raw
        }
      }
    }
    textUrl
  }
}
`