import React from "react";
import {Link, useParams} from "react-router-dom";

export const User = () => {
  let {id} = useParams();
  return (
    <>
      <button>
        <Link to='/users'>
          Вернуться к списку юзеров
        </Link>
      </button>
      <p>Юзер номер {id}</p>
    </>
  )
}