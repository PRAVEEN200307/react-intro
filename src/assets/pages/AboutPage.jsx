import { useParams } from "react-router-dom";
import Accordian from "../components/Accordian";

function AboutPage() {
  const { name } = useParams();

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="bg-white w-3/4 mx-auto p-10 ">
        <h1 className="font-semibold text-xl">About</h1>
        <div>
          <h4 className="pt-3">
            Welocome {name ?? "Guest"} , You are About page
          </h4>
        </div>

        <h1 className="mt-4 text-2xl">FAQ</h1>
        <Accordian
          title="where are you from"
          desc="i am in my Home "
        />
        <Accordian
          title="What is your skills"
          desc="i have skill frontend developement html and css ,boostrap and tailwindcss an javascript and react js and figma and seo"
        />
        
        <Accordian
          title="why am i hire you"
          desc="i have skill matching your organization and execute my help for our Organizaition"
        />
        <Accordian title="what salary are you expect">
           <p> I have excepted 1 core salary and  have rich skills and execute and my skills and remove the knowledge 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam natus beatae praesentium et voluptatem nulla similique omnis minus. Tenetur cumque possimus architecto eligendi repellendus deserunt voluptatibus porro fuga facere optio.
           </p>
           <img src="https://github.com/praveen200307.png" alt="mr.praveenKumar"  className=" rounded-full w-28 mt-4"/>
        </Accordian>
      </div>
    </div>
  );
}

export default AboutPage;
