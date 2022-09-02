import React from 'react'
import { usePortfolioContext } from '../context/PortfolioContext'

export const Filter = ({ filterFunction, projects, setFilteredProjects, technologies }) => {

    const { variables, actions } = usePortfolioContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        filterFunction();
    }

    const handleChange = (e) => {
        if (e.target.checked) {
            actions.addFilter(e.target.name);
        } else {
            actions.removeFilter(e.target.name);

        }
    }

    const handleRemove = (e) => {
        e.preventDefault();
        actions.removeAllFilters();
        setFilteredProjects(projects);
        // Retira los bordes del boton después del click
        e.target.blur();
    }


    return (

        <form className="d-flex flex-column justify-content-center" onSubmit={handleSubmit}>
            <h2 className='ms-3'>{variables.isSpanish ? "Filtros" : "Filters"}</h2>
            <fieldset>
                <legend className='ms-3 h5'>{variables.isSpanish ? "Lenguajes" : "Languages"}</legend>
                <ul>
                    {technologies.filter(x => x.inFilter === "languages").map((x, i) => {
                        return (
                            <div className='d-flex justify-content-between' key={i}>
                                <label htmlFor={x.name}>{x.name}</label>
                                <input type="checkbox" name={x.name} onChange={handleChange} checked={variables.filters.includes(x.name)} className="me-5 ms-5" />
                            </div>
                        )
                    })}
                </ul>
            </fieldset>


            <fieldset>
                <legend className='ms-3 h5'>{variables.isSpanish ? "Herramientas" : "Tools"}</legend>
                <ul>
                    {technologies.filter(x => x.inFilter === "tools").map((x, i) => {
                        return (
                            <div className='d-flex justify-content-between' key={i}>
                                <label htmlFor={x.name}>{x.name}</label>
                                <input type="checkbox" name={x.name} onChange={handleChange} checked={variables.filters.includes(x.name)} className="me-5" />
                            </div>
                        )
                    })}
                </ul>
            </fieldset>
            <div className='d-flex'>
                <button className='btn btn-primary w-50 align-self-center mt-2 mb-3 me-2 ms-2' role="submit" onClick={(e) => { e.target.blur() }}>{variables.isSpanish ? "Filtrar" : "Filter"}</button>
                <button className='btn btn-primary w-50 align-self-center mt-2 mb-3' onClick={handleRemove}>{variables.isSpanish ? "Limpiar" : "Clear"}</button>
            </div>

        </form>


    )
}

