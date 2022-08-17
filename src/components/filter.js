import React from 'react'
import { tags } from '../utils/tags'
import { usePortfolioContext } from '../context/PortfolioContext'

export const Filter = ({ filterFunction }) => {

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
    }


    return (

        <form className="d-flex flex-column justify-content-center" onSubmit={handleSubmit}>
            <h2 className='ms-3'>{variables.isSpanish ? "Filtros" : "Filters"}</h2>
            <fieldset>
                <legend className='ms-3 h5'>{variables.isSpanish ? "Lenguajes" : "Languages"}</legend>
                <ul>
                    {tags.languages.map((x, i) => {
                        return (
                            <div className='d-flex justify-content-between' key={i}>
                                <label htmlFor={x}>{x}</label>
                                <input type="checkbox" name={x} onChange={handleChange} checked={variables.filters.includes(x)} className="me-5 ms-5" />
                            </div>
                        )
                    })}
                </ul>
            </fieldset>


            <fieldset>
                <legend className='ms-3 h5'>{variables.isSpanish ? "Herramientas" : "Tools"}</legend>
                <ul>
                    {tags.tools.map((x, i) => {
                        return (
                            <div className='d-flex justify-content-between' key={i}>
                                <label htmlFor={x}>{x}</label>
                                <input type="checkbox" name={x} onChange={handleChange} checked={variables.filters.includes(x)} className="me-5" />
                            </div>
                        )
                    })}
                </ul>
            </fieldset>
            <div className='d-flex'>
                <button className='btn btn-primary w-50 align-self-center mt-2 mb-3 me-2 ms-2' role="submit">{variables.isSpanish ? "Filtrar" : "Filter"}</button>
                <button className='btn btn-primary w-50 align-self-center mt-2 mb-3' onClick={handleRemove}>{variables.isSpanish ? "Limpiar" : "Clear"}</button>
            </div>

        </form>


    )
}

