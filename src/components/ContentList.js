import React from 'react'
import Content from './Content'
import Fester from './Fester.json'
import './ContentList.css'

export default function ContentList(props) {

    let content = [];

    let displayContent = () => {
        Fester.forEach(fest => {
            for(let i = 0; i<fest.fest.length; i++){
                if(fest.fest[i].date===props.selectedDates || props.selectedDates===undefined){
                    content.push(<Content name={fest.name} date={fest.fest[i].date} id={fest.id}/>);
                }
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