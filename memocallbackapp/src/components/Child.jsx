import React from 'react'

const Child = ({appname, userdata, myfun}) => {
    console.log(appname);
    console.log(userdata)
    console.log(myfun())
  return (
    <div>
        <h2>I am Child Comp</h2>
        <h3>Application Name - {appname}</h3>
        <h3>My Fav Player - {userdata.name} - {userdata.age}</h3>
    </div>
  )
}

export default React.memo(Child)
//prevProp - React
//currentProp - React
//prevProp === currentProp - skip render