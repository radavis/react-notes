import React from "react"
import moment from "moment"

const BlogEntry = ({ author, content, title, createdAt }) => {
  let subtitle = ""
  if (!!author) subtitle += `Posted by ${author} `
  if (!!createdAt) subtitle += `${moment(createdAt).fromNow()} `
  return (
    <div className="blog-entry">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{content}</p>
    </div>
  )
}

export default BlogEntry
