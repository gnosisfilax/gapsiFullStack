'use client';
// hook para cambir de páginas
import {useRouter} from 'next/navigation';

const UserCard = ( {user:{id, first_name, last_name, email, avatar}}) => {

  // declarar el hook
  const router = useRouter();
  return (
    <>
      <div className='col-12 col-sm-6 col-md-4' id={id} onClick={ ()=> { router.push(`/users/${id}`)}} style={{cursor: 'pointer'}}>
        <img className='rounded' src={avatar} />
        <h3>
          {id}: {first_name} {last_name}
        </h3>        
        <p>
          {email}
        </p>
      </div>            
    </>
  )
}

export default UserCard