import { AboutContainer, InfoContainer, StyledImage } from './About.style'
import codingSvg from '../../assets/coding.svg';
const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={codingSvg}/>
      <div>
        <h1>About Software Developer: <span>Joseph Alisan Akar</span></h1>
      </div>
      <InfoContainer>
        <h2>Hi, I am Joseph Alisan</h2>
        <h3>I am a Full Stack Developer</h3>
        <h4>I know JS, ReactJS, ReactNative, NodeJS, MangoDB, SQL, Python, AWS Services          
        </h4>
        <h2>
          <a href='mailto:alisanakar1@gmail.com'>Send email to</a>:
          Joseph Alisan
        </h2>
      </InfoContainer>
    </AboutContainer>
  )
}

export default About