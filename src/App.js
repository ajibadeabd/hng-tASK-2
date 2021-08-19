// import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useState } from 'react';
function App() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [response, setResponse] = useState('')
    
    const onchangename = (e)=>{
        setName( e.target.value)
            }
            const onchangeemail = (e)=>{
        setEmail( e.target.value)
            }
            const onchangemessage = (e)=>{
        setMessage(e.target.value)
            }
  const submit = (e)=>{
      e.preventDefault()
      console.log(email,name,message)
axios.post('https://task-2-hng.herokuapp.com/api/v1/vote/feedback',{email,name,message})
.then((auth)=>{
    setResponse(auth.data)
    console.log(auth.data)
})
.catch((error)=>{
    setResponse(error.response.data)
    console.log(error.response.data)

})
  }
  return (
       <div class="body">
         <div class="nav-container">
            <h1>AJIBADE ABDULLAH</h1>
            <p>BACKEND DEVELOPER</p>
        </div>
        <div class="container">
        <div class="nav-top">
                <h2>Contact Info</h2>
                <div class="contact">
                    <p>ajibadeabd@gmil.com</p>
                    <p>+2348090903620</p>
                    <p>47, awayewaserere street, ayetoro Ogun State, Nigeria</p>
                </div>
                





                <hr></hr>

<main>
    <h2>Objective</h2>
    <p>Quality-oriented Back-end engineer offering three years of experience and proven knowledge in demanding environments focused on developing cutting-edge products.
    </p>
</main>

<div class="about">
                <h2>WORK EXPERIENCES</h2>
                <section>
                    <div class="exp">
                        <div class="exp-container">
                            <h4 class="exp-name">HNG Intenship :</h4>
                            <div class="exp-date">May 2020 - August 2020</div>
                        </div>
                        <div class="exp-info">
                            <h4>Backend Developer Intern</h4>
                            <p>I worked with other developers on building web and mobile applications for three month using diffrent stack,also on production. 

                            </p>
                            <ul>
                                <li>i was a finalist. </li>
                                <li>Worked closely with diverse category of people with 
                                    different technology stack to establish and deliver to 
                                    highly performant services.</li>
                                <li>Worked on products during development until it was 
                                    deployed for production.</li>
                                <li>Made it to the final stage of the internship</li>
                            </ul>
                        </div>

                           
                    </div>
                    <div class="tech">
                        <h2>Technologies</h2>
                        <ul>
                            <li>Node.js</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Git</li>
                            <li>MongoDB</li>
                            <li>PostgreSQl</li>
                            <li>GraphQL</li>
                            <li>AWS</li>
                        </ul>
                    </div>
                    <div class="lang">
                        <h2>Human Language</h2>
                        <ul>
                            <li>Yoruba</li>
                            <li>English</li>
                            <li>Arabic</li>
                        </ul>
                    </div>
                </section>
            

            </div>




<p
class='pop'
> {response.toLocaleUpperCase()}</p>
            <form onSubmit={submit}>
                <div class="form">
                    <h2>Contact Me</h2>
                    <input type="text" onChange={onchangename} required placeholder="please enter your name"/>
                    <input type="email" onChange={onchangeemail} required placeholder="please enter your E-mail"/>
                    <textarea name="message"onChange={onchangemessage} required placeholder="Please enter your message"></textarea>
                    <div class="btn">
                        <button type="submit" name="submit">submit</button>
                    </div>
                </div>
            </form>



            </div>
        </div>
        {/* <div class="nav-container">
            <h1>AJIBADE ABDULLAH</h1>
            <P>BACKEND DEVELOPER</P>
        </div>
        <div class="container">
            <div class="nav-top">
                <h2>Contact Info</h2>
                <div class="contact">
                    <p>ajibadeabd@gmil.com</p>
                    <p>+2348090903620</p>
                    <p>47, awayewaserere street, ayetoro Ogun State, Nigeria</p>
                </div>
            </div>

            <hr>

            <main>
                <h2>Objective</h2>
                <p>I am a passionate and experienced young 
                    software developer trained to build highly 
                    scalable and performant applications seeking
                    employment with a fast-growing startup. I bring
                    three years experience writing Node.js and more 
                    than five years experience in the technology industry
                </p>
            </main>
            <div class="about">
                <h2>WORK EXPERIENCES</h2>
                <section>
                    <div class="exp">
                        <div class="exp-container">
                            <h4 class="exp-name">HNG Intenship :</h4>
                            <div class="exp-date">May 2020 - August 2020</div>
                        </div>
                        <div class="exp-info">
                            <h4>Backend Developer Intern</h4>
                            <p>I worked with different category of people on a number 
                                of products within three months of the internship below 
                                are some of my achievements during the internship:
                            </p>
                            <ul>
                                <li>Carried out day-to-day tasks accurately and efficiently. </li>
                                <li>Worked closely with diverse category of people with 
                                    different technology stack to establish and deliver to 
                                    highly performant services.</li>
                                <li>Worked on products during development until it was 
                                    deployed for production.</li>
                                <li>Made it to the final stage of the internship</li>
                            </ul>
                        </div>

                           
                    </div>
                    <div class="tech">
                        <h2>Technologies</h2>
                        <ul>
                            <li>Node.js</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Git</li>
                            <li>MongoDB</li>
                            <li>PostgreSQl</li>
                            <li>GraphQL</li>
                            <li>AWS</li>
                        </ul>
                    </div>
                    <div class="lang">
                        <h2>Human Language</h2>
                        <ul>
                            <li>Yoruba</li>
                            <li>English</li>
                            <li>Arabic</li>
                        </ul>
                    </div>
                </section>
            

            </div>

            <form action="#">
                <div class="form">
                    <h2>Contact Me</h2>
                    <input type="text" placeholder="please enter your name">
                    <input type="email" placeholder="please enter your E-mail">
                    <textarea name="message" placeholder="Please enter your message"></textarea>
                    <div class="btn">
                        <button type="submit" name="submit">submit</button>
                    </div>
                </div>
            </form>
        </div> */}
    </div>
      
  );
}

export default App;
