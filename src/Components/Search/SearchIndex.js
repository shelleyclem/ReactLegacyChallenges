import { json } from 'express';
import React from 'react';
import {Input} from 'reactstrap';
 
const SearchIndex extends Component() {
   this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
   }
 }

 function searchFunction() {
   fetch(things)
   .then(res => res.json())
   .then (json => this.setState({data: json}));
 }

  const handleSearch = (e) => {
    searchFunction();
    e.preventDefault();
  }

 render() {
     <div>
       <Input type='search' onChange={e.target.handleSearch} placeholder='Search Here' />
       <h3>Results: {}</h3>
     </div>
 }

 
export SearchIndex;
