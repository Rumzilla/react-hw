import React from "react"
import styles from './style.module.css'

const Post = (props) => {
        return (
          <div className={styles.post_item}>
            <h2 className="title">{props.title}</h2>
            <p className="text">{props.body}</p>
          </div>
        )
      }

export default Post