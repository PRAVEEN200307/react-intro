import { useParams } from "react-router-dom";

function AboutPage(){
    const {name} =useParams()

    return(
        <div className="bg-gray-200 min-h-screen">
             <div className="bg-white w-3/4 mx-auto p-10 ">
                <h1 className="font-semibold text-xl">About</h1>
                <div>
                    <h4 className="pt-3">Welocome {name??'Guest'} , You are About page</h4>
                </div>
             </div>        
          </div>
        //   1:03:29
    )
}

export default AboutPage;