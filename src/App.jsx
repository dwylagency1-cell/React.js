import Card from './component/card.jsx'
import nav from './component/Navbar.jsx'
import SquareCards from './component/squarecards.jsx'

function App() {
  const jobs = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    postedDate: "2 days ago",
    jobPost: "Frontend React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$120/hr"
  },

  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    postedDate: "1 week ago",
    jobPost: "UI/UX Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    payPerHour: "$95/hr"
  },

  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    postedDate: "5 days ago",
    jobPost: "Backend Python Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$180/hr"
  },

  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    postedDate: "3 weeks ago",
    jobPost: "React Native Developer",
    tag1: "Contract",
    tag2: "Junior Level",
    payPerHour: "$110/hr"
  },

  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    postedDate: "4 days ago",
    jobPost: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$220/hr"
  },

  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    postedDate: "6 days ago",
    jobPost: "Streaming Platform Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    payPerHour: "$250/hr"
  },

  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    companyName: "Spotify",
    postedDate: "2 weeks ago",
    jobPost: "Frontend Web Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    payPerHour: "$85/hr"
  },

  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    postedDate: "10 days ago",
    jobPost: "Automation Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$170/hr"
  },

  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    postedDate: "1 month ago",
    jobPost: "Creative Cloud Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    payPerHour: "$190/hr"
  },

  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    postedDate: "3 days ago",
    jobPost: "AI Product Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$300/hr"
  }
];
  
    return <div className='parent'>
      {jobs.map(function(elem) {
        return <Card companylogo = {elem.brandLogo} companyName = {elem.companyName}/>
      })    
}
        </div>

  

}
export default App
