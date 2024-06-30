import Assignments from "../../components/assignments/assignments.components"
import Header from "../../components/header/header.component"
export default function Page(){
  return (
    <main className=" h-screen">
      <Header />
      <div className="flex">
        <Assignments />
        
      </div>
    </main>
  )
}