import image from "../images/homepage.jpg"

export default function Index() {
  return <div>
    <div className="h-[calc(100vh-56px)] object-cover bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("${image}")` }}>
      <div className="w-full h-full flex items-center justify-center">
        <div className="overflow-hidden break-words absolute h-2/5 w-1/2 text-center flex flex-col justify-center gap-3 bg-gray-300 backdrop-blur-md bg-opacity-75">
          <h1 className="font-bold text-7xl">STEMzyme</h1>
          <p className="font-display text-3xl">Filler content here..........</p>
        </div>
      </div>
    </div>
  </div>
}