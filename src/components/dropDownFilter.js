import React from 'react'
import { Filter } from './filter'


import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const DropDownFilter = ({ filterFunction, projects, setFilteredProjects }) => {
    return (
        <div className="dropdown ">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <FontAwesomeIcon icon={faFilter} className="h2 mt-2 ms-1" />
            </button>
            <ul className="dropdown-menu bg-dark text-white" aria-labelledby="dropdownMenuButton1">
                <Filter filterFunction={filterFunction} projects={projects} setFilteredProjects={setFilteredProjects}/>
            </ul>
        </div>

    )
}

