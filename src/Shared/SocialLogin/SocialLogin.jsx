import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Components/Hooks/useAuth";
import googleLogo from '../../assets/googleLogo.png'
import Swal from "sweetalert2";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(res => {
                const user = res.user;
                console.log(user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User Log in Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="space-y-3">
            <button onClick={handleGoogleLogIn} className="flex items-center gap-3 w-3/4 rounded-3xl p-2 outline outline-1 outline-slate-800 mx-auto"><img src={googleLogo} className="w-6" alt="" /> Continue With Google</button>
        </div>
    );
};

export default SocialLogin;