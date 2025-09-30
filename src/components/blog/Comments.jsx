import React from "react";
import { commentsData } from "../common/Helper";

const Comments = () => {
  return (
    <div className="pt-12 lg:ps-5">
      <h2 className="font-bold text-2xl lg:text-[32px] text-black text-center uppercase">
        Comments
      </h2>
      {commentsData.map((comment, index) => (
        <div key={index} className="flex gap-3 py-5 border-b-2 border-black/20">
          <img className="w-[40px]" src={comment.img} alt="comment-profile" />
          <div>
            <h2 className="font-bold text-base text-black capitalize">
              {comment.title}
            </h2>
            <p className="font-normal text-sm text-gray_light capitalize">
              {comment.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
