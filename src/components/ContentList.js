import React from 'react'
import Content from './Content'
import Fester from './Fester.json'
import './ContentList.css'

export default function ContentList(props) {

    let content = [];

    let displayContent = () => {
        console.log(props.selectedDates)
        Fester.forEach(fest => {
            if(fest.fest[0].date===props.selectedDates || props.selectedDates===undefined){
                content.push(<Content name={fest.name} date={fest.fest[0].date} id={fest.id}/>);
            }
            
        });
    }
    
    return (
        displayContent(),
        <>
            <div className='contentList'>
                {content}
            </div>
        </>
    )
}