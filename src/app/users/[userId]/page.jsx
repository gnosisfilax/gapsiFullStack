'use client'
import {useParams} from 'next/navigation';
import UserDetails from './user-details';


const UserData = () => {

const params = useParams();

  return (
    <>
    <h1>ID: { params.userId }</h1>
    <UserDetails id = {params.userId} />
    </>

  )
}

export default UserData