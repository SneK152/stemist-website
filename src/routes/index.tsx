import Card from "../components/Card"
import image from "../images/homepage.webp"

export default function Index() {
  return <>
    <Hero />
    <Body />
  </>
}

function Hero() {
  return <div className="h-[calc(100vh-56px)] object-cover bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url("${image}")` }}>
    <div className="w-full h-full flex items-center justify-center">
      <div className="overflow-hidden break-words absolute p-4 h-2/5 sm:h-2/5 sm:w-1/2 w-3/4  text-center flex flex-col justify-center gap-3 bg-gray-300 backdrop-blur-md bg-opacity-75 rounded-3xl">
        <h1 className="font-bold sm:text-7xl text-4xl">STEMzyme</h1>
        <p className="font-display sm:text-xl text-base">
          <span className="italic">"Tell me, and I will listen; Teach me, and I'll remember; Involve me, and I will learn."</span>
          -Benjamin Franklin
        </p>
      </div>
    </div>
  </div>
}

function Body() {
  return <div className="m-3 p-3">
    <Card className="space-y-3">
      <h1 className="text-center font-semibold text-xl">Who We Are</h1>
      <p className="text-center font-normal">STEMzyme is a student-led nonprofit that focuses on bringing free STEM education to kids of all ages.
        We have a variety of qualified instructors whom are very skilled in areas such as Biology, Oceanography, Web Development, Computer Science, Algebra, and more.</p>
    </Card>
  </div>
}