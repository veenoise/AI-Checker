'use client'

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const InputCheck = () => {
  const [verdict, setVerdict] = useState<VerdictType | null>();
  const [textInput, setTextInput] = useState<string>('');
  const [isCheckEnabled, setIsCheckEnabled] = useState(true);
  type VerdictType = {
    message: string,
    percent: number
  }

  const detect = () => {
    let ranVal = Math.random();
    ranVal >= 0.8 ? 
    setVerdict({"message":"AI Generated", "percent": (ranVal * 100)}) : 
    setVerdict({"message":"Not AI Generated", "percent": (ranVal * 100)});
  }

  const setInput = (event:any) => {
    setTextInput(event.target.value);
    if (event.target.value === "") {
      setIsCheckEnabled(true);
    } else {
      setIsCheckEnabled(false);
    }
  }

  return (
    <div className="flex justify-center">
      <div className=" container">
        <textarea 
          name="text-input" 
          id="text-input" 
          className="resize-none text-black w-[100%] border border-black rounded p-3" 
          rows={10} 
          onChange={setInput}
        >
        </textarea>
        <div className="flex justify-center">
          <Button onClick={detect} disabled={isCheckEnabled}>Check</Button>
        </div>
        {
          verdict ? 
          <div className="flex items-center flex-col p-4">
            <p>{verdict.message}</p>
            <p className="font-bold pb-3">{Number(verdict.percent).toFixed(2)}%</p>
            <Progress className="sm:w-[20%]" value={verdict.percent} />
          </div> :
          <></>
        }
        
      </div>
    </div>
  )
}

export default InputCheck