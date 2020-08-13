import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      
    }
  }
  render() {
    return (
      <div style={{background:"linear-gradient(90deg, #d53369 0%, #daae51 100%)",padding:"30px"}}>
        <h1 style={{paddingLeft:"30px"}}>Kuragayala Rishitha</h1>
        <h5 style={{paddingLeft:"30px"}}>To be a Web Devoloper</h5>
        <div class="row">
        <div class="col-sm-4">
            <img src="img.png" height="500" width="auto" style={{padding:"10px 20px 0px 0px", marginLeft:"40px"}}/>
          </div>

          <div class="col-sm-7" style={{background:"linear-gradient(90deg, #daae51 0%, #d53369 100%)",marginLeft: "0px",marginTop: "10px",width: "100%"}}>
                      <p>
              <br/><br/><br/><br/><br />I’m Kuragayala Rishitha, but people call me “Rishi”. I’m a frontend developer at in a start up called "Kleen Secutity", and I specialize in HTML and CSS that just work across all platforms and browsers. I care deeply about building interfaces that are usable and pleasant for the most number of people possible.
My professional life has been mostly driven by my passion for design. I was sketching crazy detailed 3d models for fun when I was a kid, started building promo websites for small businesses then developed an app as an assignment given by my faculty. For two years, I’ve worked for an e-learning platform which is located in Hyderabad. I'm currently brushing my skills in JavaScript and Learning ReactJS from Coding Blocks. By some time I hope I would become a professional level devoloper and work as a Web Devoloper in a good company.
 In the following years, I also plan to explore the “server-side” more and become a better-rounded full-stack dev.</p>
          </div>
          <div class="col-sm-1">
          <br/><br/><br/><br/><br/><br/><br/>
          <a href="www.facebook.com" ><i aria-hidden="true" class="fa fa-facebook" data-toggle="tooltip" title="Facebook">_Facebook</i></a><br/>
          <a href="www.twitter.com" ><i aria-hidden="true" class="fa fa-twitter" data-toggle="tooltip" title="twitter">_Twitter</i></a><br/>
          <a href="www.instagram.com" ><i aria-hidden="true" class="fa fa-instagram" data-toggle="tooltip" title="instagram">_Instagram</i></a><br/>
          <a href="www.linkedin.com" ><i aria-hidden="true" class="fa fa-linkedin" data-toggle="tooltip" title="linkedin">_LinkedIn</i></a><br/>
          </div>

        </div>
      </div>
    );
  } 
}


export default App;
