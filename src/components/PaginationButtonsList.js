import React from 'react'
import Button from './Button';
const PaginationButtonsList = ({page, handlePage}) => {
    const BtnArr = [1, 2, 3, 4, 5];
    return (
        <div className="pagination-buttons-list">
            {
                BtnArr.map(btn => <Button id={`button-${btn}`} key={btn} text={btn} page={page} handlePage={handlePage}/>)
            }
        </div>
    )
}

export default PaginationButtonsList