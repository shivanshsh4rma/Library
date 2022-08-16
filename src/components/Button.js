import React from 'react'

export const Button = ({ pagenumbercallback, totalpage, pagenumber, filtereddata }) => {
    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#" onClick={() => pagenumbercallback(false)}>Previous</a></li>
                <li class="page-item"><a class="page-link" href="#" onClick={() => pagenumbercallback(true)}>Next</a></li>
                <li class="page-item"><a class="page-link">{pagenumber + 1 + " / " + Math.ceil((filtereddata) / 10) + " : "+ (filtereddata)}</a></li>
            </ul>
        </nav>
    )
}
