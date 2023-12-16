import { RefObject, useEffect, useRef, useState } from "react";


// , isLoading: boolean, canLoad: boolean, callback: () => void
export const useObserver = (last: React.MutableRefObject<HTMLDivElement | null>) => {

  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => 
      setIntersecting(entry.isIntersecting)
    )

    if (last.current) {
      observer.observe(last.current);
    }
  })
  return isIntersecting
    // const observer = useRef()
    // useEffect(() => {
        
    //     if (isLoading) return;
    //     if (observer.current) observer.current.disconnect()
    //       // функция обратного вызова
    //     let cb = function(entries, observer){           
    //         if(entries[0].isIntersecting && canLoad) {
    //             callback()             
    //           }
    //       }
    //       // наблюдатель
    //       observer.current = new IntersectionObserver(cb);
    //       observer.current.observe(last.current)
    //   }, [isLoading])
}