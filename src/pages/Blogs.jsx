import React from "react";
import NewPosts from "../components/blog/NewPosts";
import NewTech from "../components/blog/NewTech";
import NewPostNews from "../components/blog/NewPostNews";
import ReadMoreCard from "../components/blog/ReadMoreCard";

const Blogs = () => {
  return (
    <>
      <NewPosts />
      <NewPostNews />
      <NewTech />
      <ReadMoreCard />
    </>
  );
};

export default Blogs;
