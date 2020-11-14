import React, { useEffect, useState } from "react"

export default function Home() {
  const [data, setData] = useState("")
  useEffect(() => {
    (async () => {
      const response = await fetch(".netlify/functions/hello")
      const tempData = await response.json()
      setData(tempData)
    })()
  }, [])
  return (
    <div>
      <div>Data from Server: <em>{data.message}</em></div>
    </div>
  )
}
