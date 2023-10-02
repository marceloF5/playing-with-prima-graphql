import { User } from '../types'
import MessageDisplay from './MessageDisplay'

type UserProps = {
    user: User
}

function UserDisplay({ user }: UserProps) {
    return (
        <div className="flex gap-4 w-full justify-center flex-row">
            <h1>teste</h1>
            <h1>teste</h1>
            {/* <div className="rounded-sm flex justify-center items-center drop-shadow-md bg-green-700 w-48 h-20 p-20">
                <p className="text-xl text-gray-200 font-bold">
                    {user.name}
                </p>
            </div>
            <div>
                {user.messages.map((message, i) => <MessageDisplay key={i} index={i} message={message} />)}
            </div> */}
        </div>
    )
}

export default UserDisplay