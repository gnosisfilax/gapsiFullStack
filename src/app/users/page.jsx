// 'use client'
/* 'use client' convención para declar un límite entre un server component
   y un client component.
   Si no se usa use client la solicitud se hace desde el lado del servidor, la 
   salida de la consola se muestra en la terminal (dónde se levantó el servidor).
   Para ver la salida en la consola del navegador hay qu establecer en 'use client'

*/

import UserCard from "@/app/components/user-card";

// react Server component
const getUsers = async () => {  
    const res = await import("../api/users/route");   
    const usersData = await res.GET();
    return await usersData.json();
};

const Users = async () => {
  const usersData = await getUsers();
  return (
    <>
      <h1 className="mt-5">Users</h1>
      <div className="container">
        <div className="row align-items-center justify-content-center py-5">
          {usersData.map((user) => (
            <UserCard user={user} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Users;
