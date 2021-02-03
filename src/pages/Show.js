import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { apiGet } from '../misc/config'

const Show = () => {

  const {id} = useParams()

  const [show, setShow] = useState(null)

  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(res => {
        setShow(res)
      })
  }, [id])

  return (
    <div>
      this is show page
    </div>
  )
}

export default Show