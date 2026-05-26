import Card from './component/card.jsx'
import nav from './component/Navbar.jsx'
import SquareCards from './component/squarecards.jsx'
import google from './component/img/google.png'
import amazon from './component/img/amazon.png'
import micro from './component/img/microsoft.png'
import meta from './component/img/meta.png'


function App() {
  const jobs = [
  {
    brandLogo: google,
    companyName: "Google",
    postedDate: "2 days ago",
    jobPost: "Graphic Designer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$120/hr"
  },

  {
    brandLogo: micro,
    companyName: "Microsoft",
    postedDate: "1 week ago",
    jobPost: "UI/UX Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    payPerHour: "$95/hr"
  },

  {
    brandLogo: amazon,
    companyName: "Amazon",
    postedDate: "5 days ago",
    jobPost: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$180/hr"
  },

  {
    brandLogo: meta,
    companyName: "Meta",
    postedDate: "3 weeks ago",
    jobPost: "React Native Developer",
    tag1: "Contract",
    tag2: "Junior Level",
    payPerHour: "$110/hr"
  },

];
  
    return <div className='parent'>
      {jobs.map(function(elem) {
        return <Card companylogo = {elem.brandLogo} companyname = {elem.companyName} posteddate = {elem.postedDate} tag_1 = {elem.tag1} tag_2 = {elem.tag2} payPerhour = {elem.payPerHour} jobpost = {elem.jobPost} />
      })    
}
        </div>

  

}
export default App
