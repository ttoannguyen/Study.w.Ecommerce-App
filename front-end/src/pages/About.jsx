import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iure
            natus nam laboriosam eveniet delectus quos cupiditate rerum. Soluta
            iure eius suscipit molestias explicabo harum distinctio error
            impedit sequi placeat!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            consectetur dolorum, fuga eaque cum debitis, similique quas totam
            exercitationem laborum rerum. Cupiditate perspiciatis corrupti
            tenetur veritatis omnis eligendi quo perferendis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
