import React from 'react';
import { withRouter } from 'react-router-dom';

const HomePage = ()=> {
    return(
        <>
            <h1> Hello, welcome to EK's blog!</h1>
            <p>Hello, everyone! I am currently studying web programming at NSCC. I am responsible and strong at time management.
                As I enjoy nature, I have biked and camped all over my country, 
                especially through spring to fall. I also practice yoga and calligraphy on a regular basis.
    
                I have traveled to Australia, India, Nepal, Vietnam, Taiwan, China, Myanmar,
                Laos, Cambodia, Indonesia, Japan, Malaysia and Thailand.
                Travelling for me was not just seeing other country's nature or historical sites. 
                It was and obviously much more than that. 
                I've met so many people from all over the world. 
                I listened to their stories and learned about their cultures. Also, I have learned how to 
                collaborate with people who have different backgrounds. 
                I have developed my patience a lot through travelling. There were so many situations which
                required my patience, like waiting for hours for a train to come. Can you believe that there were signs that read 
                "As it arrives" for the train schedule?
                It drove me crazy the first time. However, I've learned that sometimes I need to adapt to a given environment.
            </p>
        </>
    )
}
export default withRouter(HomePage);