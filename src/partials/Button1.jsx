import { Link } from "react-router-dom"

const Button1 = (props) => (
    <Link to="/checkout" {...props}
        className="btn text-white bg-red-primary hover:bg-red-light w-full mb-4 sm:w-auto sm:mb-0"
        href="#0"
      >
        بغيت نتعلم
    </Link>
)
export default Button1