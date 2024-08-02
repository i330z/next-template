"use client"
import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react"
function LoginBox() {

    const { data: session, status } = useSession();
  return (
    <div>
        Status : {status}
        {
            session ? (
                <div>
                   <h1>You are login: {JSON.stringify(session.user?.name)}</h1> 
                    
                    <button className='bg-red-500 p-2 rounded-sm' onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })}>Sign Out</button>    
                </div>
            ) : (
                <>
                Not Login
                <button className='bg-green-500 text-white p-2 rounded-md' onClick={() => signIn("google")}>Login with Google</button>
                </>
            )
        }
    </div>
  )
}

export default LoginBox