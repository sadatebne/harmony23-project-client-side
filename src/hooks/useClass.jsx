import { useQuery } from "@tanstack/react-query"

const useClass=()=>{
    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/classes`)
            return res.json()
        }

    })

    return [classes, refetch]
}

export default useClass