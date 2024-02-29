import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slices/UserSlice";
import styled from "styled-components";

const DeleteAllUsers = () => {
  const dispatch = useDispatch();

  const RemoveAllUsers = () => {
    dispatch(deleteUsers());
  };

  return (
    <Wrapper>
      <button className="clear-btn" onClick={() => RemoveAllUsers()}>Clear All</button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
    .clear-btn{
        text-transform: capitalize;
        background-color: #db338a;
    }

`;

export default DeleteAllUsers;
