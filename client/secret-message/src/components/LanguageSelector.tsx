import { useState } from 'react'

const LanguageSelector = () => {
  const [active,setActive] = useState(false);
    const[currentLanguage] = useState("en")
  return (
    <div>
        <button onClick={()=>{setActive(!active);}}></button>
    </div>
  )
}

export default LanguageSelector