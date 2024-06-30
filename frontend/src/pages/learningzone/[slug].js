import Assignments from "../../components/assignments/assignments.components"
import Header from "../../components/header/header.component"
import StickyNote from "../../components/stickynote/stickynote.component"


export default function Page(){
  return (
    <main className="">
      <Header />
      <div className="flex bg-[#FFF2C5] h-5/6 ">
        <Assignments />
        <div className="h-[90%] my-auto ml-8 py-8 overflow-auto">
          <h2 className="text-4xl mb-4">Welcome Back, Beatrice</h2>
          <div className="my-8">
            <h3 className="text-2xl mb-2">Continue where you left off</h3>
            <div className="grid grid-cols-4 gap-4">
              <StickyNote subject={"Math"} setname={"Trigonometry"} problemsleft={1} problems={10} duedate={'Fri Jun 28th, 11:59 PM'}/>
              <StickyNote subject={"Social Studies"} setname={"War of 1812"} problemsleft={3} problems={10} duedate={'Mon Jul 1st, 11:59 PM'}/>
              <StickyNote subject={"Spanish"} setname={"Household Items"} problemsleft={4} problems={10} duedate={'Wed Jul 3rd, 11:59 PM'}/>
              <StickyNote subject={"Science"} setname={"Avogadro's Number"} problemsleft={4} problems={10} duedate={'Fri Jul 5th, 11:59 PM'}/>
            </div>
          </div>
          <div className="my-8">
            <h3 className="text-2xl mb-2">More to practice</h3>
            <div className="grid grid-cols-4 gap-5 w-full">
              <StickyNote subject={"Social Studies"} setname={"Civil War"} problemsleft={10} problems={10}/>
              <StickyNote subject={"Science"} setname={"Stoichiometry"} problemsleft={10} problems={10}/>
              <StickyNote subject={"Math"} setname={"Advanced Arithmetic"} problemsleft={10} problems={10}/>
              <StickyNote subject={"Spanish"} setname={"Nouns"} problemsleft={10} problems={10}/>
            </div>
          </div>
        </div>
        
      </div>
    </main>
  )
}