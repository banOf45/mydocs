
import Tabs from './components/Tabs'

function App() {
const data = [
  {
    lable: "profile",
    content: <div>your profile</div>
  },
  {
    lable: "Home",
    content: <div>Home page</div>
  },
  {
    lable: "Billing Total",
    content: <div>Billing Section</div>
  },
  {
    lable: "CheckOut",
    content: <div>Payment section</div>
  },
  {
    lable: "Details",
    content: <div>Item Details</div>
  },
]  

  return (
    <>
     <div><Tabs data = {data}/></div>
    </>
  )
}

export default App
