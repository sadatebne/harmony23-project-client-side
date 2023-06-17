import { useQuery } from "@tanstack/react-query"

const useUser=()=>{

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch(`https://harmony23-server-side.vercel.app/users`)
            return res.json()
        }

    })

    return [users, refetch]
}

export default useUser
