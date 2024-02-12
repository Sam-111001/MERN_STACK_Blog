import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai"
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth"
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
    const auth = getAuth(app)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleGoogleClick = async () => {
        let responseData = {}
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({ prompt: "select_account" })
        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider)
            await fetch("http://localhost:3000/api/auth/google", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: resultsFromGoogle.user.displayName,
                    email: resultsFromGoogle.user.email,
                    googlePhotoUrl: resultsFromGoogle.user.photoURL
                })
            }).then((resp) => resp.json()).then((data) => responseData = data)
            if (responseData.success) {
                dispatch(signInSuccess(responseData))
                navigate("/")
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Button type="button" gradientDuoTone="pinkToOrange" onClick={handleGoogleClick}>
            <AiFillGoogleCircle className="w-6 h-6 mr-2" />
            Continue with Google
        </Button>
    )
}
