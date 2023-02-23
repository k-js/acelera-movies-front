import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export const Rating = ({ rating }) => {
  const ratings = [1, 2, 3, 4, 5]
  return (
    ratings.map(element => {
      return element <= rating
        ? <FontAwesomeIcon icon={faStar} key={element} />
        : <FontAwesomeIcon icon={faStar} key={element} />
    })
  )
}

export default Rating
