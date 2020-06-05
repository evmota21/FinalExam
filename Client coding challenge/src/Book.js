import React from 'react';

function Book( props ){
    return(
        <div>
            <div className="results">
                <p>
                    {props.bookTitle} , {props.bookAuthor}
                </p>
                <img src={props.bookThumb} />
                <p>
                    {props.bookSnippet}
                </p>
            </div>
        </div>
    );
}

export default Book;