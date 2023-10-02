'use client'

import { useQuery } from "urql"
import { GetUsersDocument } from "@/graphql/generated"
import UserDisplay from "@/modules/UserDisplay"
import MessageDisplay from "@/modules/MessageDisplay"
import Branch from "@/modules/Branch"

export default function Home() {
  const [results] = useQuery({
    query: GetUsersDocument
  })
  
  
  return (
    <div className="bg-zinc-900 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
      {
        results.data?.users.map((user, i) => (
          <div key={i} className="flex gap-4 w-full justify-center flex-row">
            <div className="rounded-sm flex justify-center items-center drop-shadow-md w-48 h-20 p-20">
                <p className="text-xl text-gray-200 font-bold">
                    {user.name}
                </p>
            </div>
            <div>
                {user.messages.map((message, i) => (
                  <div key={i} className="group mb-2 shrink-0 rounded-lg flex items-center drop-shadow-md bg-zinc-700 w-48 h-20 relative">
                    <div
                      className={`
                      ${!(i === 0) ? `border-l-4` : ''} 
                      ${i === 0 ? 'w-24' : 'w-16'}
                      ${i === 0 ? '-translate-x-24' : '-translate-x-16'} 
                      scale-y-110
                      transition
                      ease-in-out
                      duration-300
                      group-hover:border-teal-400
                      h-full border-blue-500 border-b-4 absolute -translate-y-10`}
                    />
                    <p className="text-sm text-gray-200 font-bold px-4">
                      {message.body}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ))
      }
    </div>
  )
}
