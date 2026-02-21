import './Users.css'
const Users = ({fullName, age, role, client, isPresent}) => {
  return (
    <div>
        <div className="cards">
            <div className="info">
                <p>Name - {fullName}</p>
                <p>Age - {age}</p>
                <p>Role - {role}</p>
                <p>Client - {client}</p>
                <p>Presently Working - {isPresent ? "Yes" : 'No'} </p>
                {/*     true  ?    'Yes' : 'No' */}
            </div>
        </div>
    </div>
  )
}

export default Users