import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import logos from "~/assets/logos.png"
import Logos from "~/mycomponents/logo"
function Login(){
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 w-[320px]">
           <img src={logos} alt="Logo" className="mx-auto w-xl h-xl rounded-4xl" />
            <Input placeholder="Email" />
            <Input placeholder="Password" type="password" />
            <Button>Login</Button>
        </div>
    )
}
export default Login;
