import React, { useEffect, useState } from "react"

export default function Home() {
  const [data, setData] = useState({ message: "" })
  useEffect(() => {
    ;(async () => {
      const response = await fetch(".netlify/functions/hello")
      const tempData = await response.json()
      setData(tempData)
    })()
  }, [])
  return (
    <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
        <div>Data coming from Server:</div>
        <div style={{background:"orange", padding:"3px",width:"fit-content", borderRadius:"2px"}}>
        Hello <b style={{color: "purple"}}>{data.message},</b> Welcome
        </div>
    </div>
  )
}
