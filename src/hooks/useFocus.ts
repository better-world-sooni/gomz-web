import { useState, useEffect } from 'react'

export default function useFocus() {
  const [focused, setFocused] = useState(false)
  
  useEffect(() => {
    setFocused(true)
    return () => setFocused(false)
  }, [])
  return focused
}
