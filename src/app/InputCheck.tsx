'use client'

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const InputCheck = () => {
  const [verdict, setVerdict] = useState<VerdictType | null>();
  const [isCheckEnabled, setIsCheckEnabled] = useState(true);
  type VerdictType = {
    message: string,
    percent: number
  }

  const detect = () => {
    const ranVal = Math.random();
    if (ranVal >= 0.8) {
      setVerdict({"message":"AI Generated", "percent": (ranVal * 100)});
    } else {
      setVerdict({"message":"Not AI Generated", "percent": (ranVal * 100)});
    }
  }

  const setInput = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
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