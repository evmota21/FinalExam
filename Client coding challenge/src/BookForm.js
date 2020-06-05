import React from 'react';

function BookForm( props ){
    return(
        <div>
            <form onSubmit={props.submitTest}>
                <label htmlFor="BookName">
                    Book Name :
                </label>
                <input id="BookName" />
                <button type="submit">
                    Search!
                </button>
            </form>
        </div>
    );
}

export default BookForm;