import image from "../images/homepage.jpg"

export default function Index() {
  return <div>
    <div className="h-[calc(100vh-56px)] object-cover bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("${image}")` }}>
      <div className="w-full h-full flex items-center justify-center">
        <div className="overflow-hidden break-words absolute p-4 md:h-2/5 h-3/5 w-1/2 text-center flex flex-col justify-center gap-3 bg-gray-300 backdrop-blur-md bg-opacity-75 rounded-3xl">
          <h1 className="font-bold text-7xl">STEMzyme</h1>
          <p className="font-display text-xl">
            <blockquote className="italic">"Tell me, and I will listen; Teach me, and I'll remember; Involve me, and I will learn."</blockquote>
            -Benjamin Franklin
          </p>
        </div>
      </div>
    </div>
  </div>
}