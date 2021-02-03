import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { apiGet } from '../misc/config'

const Show = () => {

  const {id} = useParams()

  const [show, setShow] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true
    setIsLoading(true)
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(res => {
        if (isMounted) {
          setShow(res)
          setIsLoading(false)
        }
      })
      .catch(err => {
        if (isMounted) {
          setError(err.message)
          setIsLoading(false)
        }
      })

      return () => {
        isMounted = false
      }
  }, [id])

  if (isLoading) {
    return <div>Date is beeing loaded</div>
  }

  if (error) {
    return <div>Error occured: {error}</div>
  }

  return (
    <div>
      this is show page
    </div>
  )
}

export default Show
