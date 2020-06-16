import React from "react";
import {Link, useParams} from "react-router-dom";

export const NewPost = () => {
  let {id} = useParams();
  return (
    <>
      <button>
        <Link to='/posts'>
          Вернуться к списку постов
        </Link>
      </button>
      <p>Пост номер {id}</p>
    </>
  )
}