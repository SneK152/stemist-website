import { useEffect } from "react"
import image from "../images/homepage.jpg"

export default function Index() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains("card-animate")) {
          setTimeout(() => entry.target.classList.add("card-animate"), 250)
        }
      })
    }, {
      threshold: 0.5
    })
    observer.observe(document.querySelector(".card")!)
    const unsubscribe = observer.disconnect
    return unsubscribe
  }, [])
  return <div>
    <div className="h-[calc(100vh-56px)] object-cover bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("${image}")` }}>
      <div className="w-full h-full flex items-center justify-center">
        <div className="overflow-hidden break-words absolute p-4 md:h-2/5 h-3/5 w-1/2 text-center flex flex-col justify-center gap-3 bg-gray-300 backdrop-blur-md bg-opacity-75 rounded-3xl">
          <h1 className="font-bold text-7xl">STEMzyme</h1>
          <p className="font-display text-xl">
            <span className="italic">"Tell me, and I will listen; Teach me, and I'll remember; Involve me, and I will learn."</span>
            -Benjamin Franklin
          </p>
        </div>
      </div>
    </div>
    <div>
      <div className="card">Hi</div>
    </div>
  </div>
}