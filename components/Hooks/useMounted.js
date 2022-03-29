// HOOK fOR Expected server HTML to contain a matching <div> in <div> ISSUE
import { useEffect, useState } from 'react';

// CHECKS TO SEE IF COMPONENT HAS MOUNTED OR NOT
export const useMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return { hasMounted }
}