import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
const payload = await getPayloadHMR({ config: configPromise })

const data = await payload.find({
  collection: 'pages',
})

const About = () => {
  console.log(data)
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page</p>
      {data.docs.map((doc, index) => (
        <div key={index}>
          <h2>{doc.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default About
