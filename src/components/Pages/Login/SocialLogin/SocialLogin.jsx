import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import Swal from 'sweetalert2';


const SocialLogin = () => {
    const { googleLogin } = useAuth()
    const navigate = useNavigate()
    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user
                const savedUser = { name: loggedUser.displayName, email: loggedUser.email, photo:loggedUser.photoURL }
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                Swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'SuccessFully Register',
                    showConfirmButton: false,
                    timer: 1500
                  })
                console.log(loggedUser)
                //logOut()
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
            })


    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center'>
                <button onClick={handleGoogle} className="btn btn-circle btn-outline">
                    <FaGoogle color='blue'/>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;