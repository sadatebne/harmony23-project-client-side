import { useQuery } from "@tanstack/react-query"

const useUser=()=>{

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/users`)
            return res.json()
        }

    })

    return [users, refetch]
}

export default useUser
