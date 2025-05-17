


import { HashLoader } from 'react-spinners'

export default function FullScreenLoader() {
  return (
    <div className=" fixed inset-0 z-50 flex items-center justify-center bg-[var(--sec)] backdrop-blur-sm rounded-lg border-1">
  
      <HashLoader 
        color="#A7B1BC"
        size={60}
        speedMultiplier={1.5}
      />
    </div>
  )
}

