import React from 'react'
import Content from './Content'
import Fester from './Fester.json'
import './ContentList.css'

function ContentList() {

    let content = [];

    let displayContent = () => {
        Fester.forEach(fest => {
            content.push(<Content name={fest.name} date={fest.fest[0].date} id={fest.id}/>);
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

export default ContentList