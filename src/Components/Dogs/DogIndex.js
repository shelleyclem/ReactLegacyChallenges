import { render } from '@testing-library/react';
import { response } from 'express';
import { div } from 'prelude-ls';
import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';

const baseURL = 'https://dog.ceo/api/breeds/image/random';


const DogIndex = () => {
    const [image, setImage] = useState('');


    const fetchDog = () => {
        fetch(baseURL)
        .then((res) => {
            this.setImage({
                imageLink: res.data.message
            });
        })
        .catch(err => {
            console.log('Fetch failed. Throw the bone again!', err);
        })
    }
    
    return(
        <div class='mainDiv'>
            <img src="{imageLink}" alt="Random Dog Image" />
            <div>
                <button onClick={this.fetchDog}>
                    Fetch another Dog
                </button>
            </div>
        </div>
    );
};

export default DogIndex;