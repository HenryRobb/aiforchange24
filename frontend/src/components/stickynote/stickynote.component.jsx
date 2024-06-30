import { useEffect, useState } from "react";

export default function StickyNote({subject, setname, problemsleft, problems, duedate}){
  const [color,setColor] = useState("");
  const [width,setWidth] = useState(0);
  const [widthString,setWidthString] = useState('');

  useEffect(() => {
    //calculate color
    switch (subject){
      case "Math":
        setColor("bg-[#CA1551]");
        break;
      case "English":
        setColor("bg-[#345995]");
        break;
      case "Spanish":
        setColor("bg-[#EAC435]");
        break;
      case "Social Studies":
        setColor("bg-[#E97018]");
        break;
      case "Science":
        setColor("bg-[#389959]");
        break;
      default :
        setColor("bg-[#000]");
        break;
    }
    //set width
    setWidth(((problems-problemsleft)/problems)*100);
    if (width >= 0 && width < 10) {
      setWidthString("w-[0%]");
    } else if (width >= 10 && width < 20) {
      console.log(width);
      setWidthString("w-[10%]");
    } else if (width >= 20 && width < 30) {
      console.log(width);
      setWidthString("w-[20%]");
    } else if (width >= 30 && width < 40) {
      console.log(width);
      setWidthString("w-[30%]");
    } else if (width >= 40 && width < 50) {
      setWidthString("w-[40%]");
    } else if (width >= 50 && width < 60) {
      setWidthString("w-[50%]");
    } else if (width >= 60 && width < 70) {
      setWidthString("w-[60%]");
    } else if (width >= 70 && width < 80) {
      setWidthString("w-[70%]");
    } else if (width >= 80 && width < 90) {
      setWidthString("w-[80%]");
    } else if (width >= 90 && width < 100) {
      setWidthString("w-[90%]");
    } else {
      setWidthString("w-full");
    }
    
  },[]);

  return (
    <div className="flex flex-col h-[220px] w-[220px] bg-[#FFDD85] shadow-[rgb(0,0,0,.25)] shadow-lg">
      <div className="flex-[10%]">
        <h4 className={`text-xl font-semibold text-white ${color} px-4 py-1`}>{subject}</h4>
      </div>
      <div className="flex-[90%] px-4 py-1 flex flex-col justify-between ">
        <div className="">
          <p className="text-lg text-center underline underline-offset-4 ">{setname}</p>
          <p className="text-center font-light">{problemsleft} problem{problemsleft == 1 ? "" : "s"} left</p>
        </div>
        <div className="mb-4">
          {duedate && (
            <>
              <p className="font-semibold">Due:</p>
              <p className="font-light">{duedate}</p>
            </>
          )}
          <div className="bg-white w-full h-[20px] rounded-lg">
            <div className={`bg-themeGreen h-[20px] ${widthString} rounded-lg`}></div>
          </div>
        </div>
      </div>
    </div>
  )
}