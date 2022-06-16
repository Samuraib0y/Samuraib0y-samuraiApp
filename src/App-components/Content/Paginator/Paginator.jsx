import pG from "../Paginator/Paginator.module.css";
import React, {useState} from "react";

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionSize = 10;

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;


    return (
        <div>
            <div className={pG.paginator}>
                {console.log(portionSize)}
                {portionNumber > 1 &&
                    <button onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}> Prev</button>}

                {pages
                    .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                    .map((p) => {
                        return <span onClick={() => {
                            props.onPageChanged(p);
                        }} className={props.currentPage === p && pG.selectedPage}>{p}</span>
                    })}
                {portionCount > portionNumber &&
                    <button onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}>Next</button>}
            </div>

        </div>
    )
}

export default Paginator;