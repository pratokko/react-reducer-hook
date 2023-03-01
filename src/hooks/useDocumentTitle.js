import  {useEffect} from 'react'

function useDocumentTitle(count) {
  
  useEffect(() => {
    document.title = `the count is ${count}`
   })
 
}

export default useDocumentTitle