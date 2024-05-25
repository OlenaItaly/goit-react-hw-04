import toast from "react-hot-toast";

export default function ErrorMessage() {
   return toast.error('Whoops, something went wrong! Please try reloading this page!');
}