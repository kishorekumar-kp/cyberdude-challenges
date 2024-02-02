import movie from "../../public/image/movie.png";
import gpay from "../../public/image/gpay.png";
import json from "../../public/image/json-card.png";
import instagram from "../../public/image/instagaram.png";
function ProjectPage() {
  return (
    <div className="px-52">
      <div className="py-5">
        <h1 className="text-2xl text-gray-700 underline font-semibold text-center py-5">
          View all my Projects{" "}
        </h1>
        <div className="grid grid-cols-3 gap-5">
          <div className="space-y-1 bg-dark text-white p-2">
            <p className="text-center  font-medium">CSS-Flex box</p>
            <img
              className="h-64 w-80 p-3"
              src="https://github.com/kishorekumar-kp/css-flexbox/raw/main/assets/preview.png"
            ></img>
            <p className="text-center  font-medium bg-medium hover:bg-normal">
              <a href="https://kishorekpcssflexbox.netlify.app/" target="_blank " className="">
                View Demo
              </a>
            </p>
          </div>

          <div className="space-y-1 bg-dark text-white p-2">
            <p className="text-center  font-medium">Youtube-thumbnail-viewer</p>
            <img
              className="h-64 w-80 p-3"
              src="https://github.com/kishorekumar-kp/cyberdude-challenges/raw/main/javaScript-dom/05-youtube-thumbnail-viewer/assets/snip.png"
            ></img>
            <p className="text-center  font-medium bg-medium hover:bg-normal">
              <a href="https://kishorekumar-kp.github.io/cyberdude-challenges/javaScript-dom/youtube-thumbnail-viewer/dist/" target="_blank " className="">
                View Demo
              </a>
            </p>
          </div>

          <div className="space-y-1 bg-dark text-white p-2">
            <p className="text-center  font-medium">Movie-Flex</p>
            <img
              className="h-64 w-80 p-3"
              src={movie}
            ></img>
            <p className="text-center  font-medium bg-medium hover:bg-normal">
              <a href="https://kishorekumar-kp.github.io/Task-movie-listing/" target="_blank " className="">
                View Demo
              </a>
            </p>
          </div>
          <div className="space-y-1 bg-dark text-white p-2">
            <p className="text-center  font-medium">Instagram UI </p>
            <img
              className="h-64 w-80 p-3"
              src={instagram}
            ></img>
            <p className="text-center  font-medium bg-medium hover:bg-normal">
              <a href="https://kishorekumar-kp.github.io/instagram-ui/" target="_blank " className="">
                View Demo
              </a>
            </p>
          </div>

          <div className="space-y-1 bg-dark text-white p-2">
            <p className="text-center  font-medium">Json-member-card </p>
            <img
              className="h-64 w-80 p-3"
              src={json}
            ></img>
            <p className="text-center  font-medium bg-medium hover:bg-normal">
              <a href="https://kishorekumar-kp.github.io/JSON-member-card/dist/" target="_blank " className="">
                View Demo
              </a>
            </p>
          </div>

          <div className="space-y-1 bg-dark text-white p-2">
            <p className="text-center  font-medium">Gpay UI</p>
            <img
              className="h-64 w-80 p-3"
              src={gpay}
            ></img>
            <p className="text-center  font-medium bg-medium hover:bg-normal">
              <a href="https://kishorekp-gpay-ui.netlify.app/" target="_blank " className="">
                View Demo
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
