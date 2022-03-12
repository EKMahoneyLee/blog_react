import React from 'react';
import { withRouter } from 'react-router-dom';

const AboutPage = ()=> {
    return(
        <>
            <h1> About Me!</h1>
            <p>Truckers in Peel Region say the convoy protest that has gripped Ottawa for more than a week isn't addressing the real problems they face — and they're trying to shift the conversation away from COVID-19 vaccine mandates and toward stopping abuse and wage theft in the industry.
            </p>
            <p> Attar Sodhi, a 37-year-old Brampton resident and truck driver, says very few of the protesters in Ottawa are South Asians, who make up more than half of the truckers operating in the Greater Toronto Area, according to some estimates. The protests are sparking debate across the country, but especially in Peel, where trucking and warehousing account for a large percentage of local jobs.

            "Something else is happening behind the scenes, because the real issues are completely different," Sodhi told CBC News.
            </p>
            <p> 
            With 90 per cent of truck drivers vaccinated against COVID-19, according to the Canadian Trucking Alliance, the majority of the industry is sitting out the convoy protest, which started in response to vaccine mandates imposed on essential workers crossing the Canada-U.S. border. Another convoy protest has set up this weekend in downtown Toronto.
            </p>
        </>
    )
}
export default withRouter(AboutPage);