import { getAuth } from "firebase/auth"
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage'
import { Dispatch } from "react"

export default function FileInput({className, name, setImage}: {className: string, name: string, setImage: Dispatch<any>}) {
    
    return (
        <div>
            <label
                htmlFor={`${name}-file-input`}
            >
                {name.toUpperCase()}
            </label>
            <input
                className={`${className} relative block w-full appearance-none rounded-md border border-neutral-600 px-3 py-2 text-gray-50 shadow-sm focus:z-10 shadow-white/25 focus:border-neutral-600 bg-black focus:outline-none focus:ring-black sm:text-sm peer placeholder-transparent transition-[background-color] duration-[10000000s]`}
                type='file'
                onChange={e => setImage(e.target.files![0])}
                name={`${name}-file-input`}
            />
        </div>
    )
}