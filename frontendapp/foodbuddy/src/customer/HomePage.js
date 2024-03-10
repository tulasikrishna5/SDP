import React, { useEffect, useReducer } from 'react'
import { getAll, getAllByTag, getAllTags, search } from './foodService';
import Thumbnails from './Thumbnails';
import { useParams } from 'react-router-dom';
import Search from './Search';
import Tags from './Tags';
const intialState = {foods:[],tags:[]};
const reducer = (state, action)=>
{
    switch(action.type)
    {
        case 'FOODS_LOADED':
            return {...state,foods:action.payload};
            case 'TAGS_LOADED':
                return {...state,tags:action.payload};
        default:
            return state;

    }
}
export default function HomePage() {
  const [state,dispatch] = useReducer(reducer,intialState);
  const{ foods , tags } = state;
  const { searchTerm , tag } = useParams();




  useEffect(() =>{
        
    getAllTags().then(tags=> dispatch({type:'TAGS_LOADED',payload: tags}))
  
    const loadFoods = tag
    ? getAllByTag(tag)
    : searchTerm
    ? search(searchTerm)
    : getAll();
    loadFoods.then(foods=>dispatch({type:'FOODS_LOADED',payload: foods}))

  },[searchTerm,tag]);


  return (
   <div>
    <Search/>
    <Tags tags={tags}/>
     <Thumbnails foods={foods}/>
   </div>
  )
}
