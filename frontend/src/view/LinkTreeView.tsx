import { useState } from 'react'
import { social } from '../data/social'
import DevTreeInput from '../components/DevTreeInput'

export default function LinkTreeView() {
  const [devTreeLinks, setDevTreeLinks] = useState(social)

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('escribiendo...')
  }

  return (
    <> 
      <div className="space-x-0">
        {devTreeLinks.map(item => (
          <DevTreeInput
            key={item.name}
            item={item}
            handleUrlChange={handleUrlChange}
          />
        ))}

      </div>

    </>
    
  )
}
