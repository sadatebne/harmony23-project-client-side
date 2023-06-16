import { useQuery } from "@tanstack/react-query"

const useClass=()=>{
    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch(`https://harmony23-server-side-sadatebne.vercel.app/classes`)
            return res.json()
        }

    })

    return [classes, refetch]
}

export default useClass