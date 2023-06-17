// import { useQuery } from "@tanstack/react-query"
// import useAuth from "./useAuth"

// const useCart = () => {
//     const { user } = useAuth()
//     const { refetch, data: cart = [] } = useQuery({
//         queryKey: ['carts', user?.email],
//         queryFn: async () => {
//             const res = await fetch(`https://harmony23-server-side.vercel.app/carts?email=${user?.email}`)
//             return res.json()
//         }

//     })

//     return [cart, refetch]
// }

// export default useCart

import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"

const useCart = () => {
    const { user, loading } = useAuth()
    const [axiosSecure]=useAxiosSecure()
    
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled : !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            return res.data
        }
      
    })

    return [cart, refetch]
}

export default useCart