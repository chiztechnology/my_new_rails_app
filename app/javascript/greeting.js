import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllGreetings } from './greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting, isLoading } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchAllGreetings());
  }, [dispatch]);
  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Greeting;
