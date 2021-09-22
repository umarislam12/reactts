import React from 'react'
import { useHistory,useLocation,useParams } from 'react-router'

export default function NotFound() {
  const location=useLocation();
  console.log(location);
  const params=useParams()
  console.log(params);
//   const history=useHistory();
// history.push("/hello")
  return (
    <div>
      <h1>Not found 404</h1>
    </div>
  )
}
