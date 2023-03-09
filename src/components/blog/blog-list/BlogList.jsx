import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";

const BlogList = (props) => {
  
  const getBlogPosts = async () => {
    try {
      let response = await fetch("http://localhost:3001/blogPosts")
      if (response.ok) {
        let data = await response.json()
        console.log(data)
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {getBlogPosts()}, [])
  
  return (
    <Row>
      {posts.map((post) => (
        <Col
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem key={post.title} {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
