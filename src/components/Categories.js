import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import FeaturedCard from './FeaturedCard';

const Categories = () => {
    const [categories, setCategory] =  useState([])
    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/categories`);
            const data = await response.json();
            console.log(data);
            setCategory(data);
        }
        fetchCategories();
    }, [])

    if(categories.length ===0)return <div>Loading.....</div>
    return (
        <div>
            <FeaturedCard cards={categories}/>
        </div>
    )
}
export default Categories
