import { useEffect, useRef } from "react";



export const useObserver = (last, isLoading, canLoad, callback) => {
    const observer = useRef()
    useEffect(() => {
        
        if (isLoading) return;
        if (observer.current) observer.current.disconnect()
          // функция обратного вызова
        let cb = function(entries, observer){           
            if(entries[0].isIntersecting && canLoad) {
                callback()             
              }
          }
          // наблюдатель
          observer.current = new IntersectionObserver(cb);
          observer.current.observe(last.current)
      }, [isLoading])
}