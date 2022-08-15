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


    return (
        
        <form className="d-flex flex-column justify-content-center" onSubmit={handleSubmit}>
            <h2 className='ms-3'>Filtros</h2>
            <fieldset>
                <legend className='ms-3'>Lenguajes</legend>
                <ul>
                    {tags.languages.map((x, i) => {
                        return (
                            <div className='d-flex justify-content-between' key={i}>
                                <label htmlFor={x}>{x}</label>
                                <input type="checkbox" name={x} onChange={handleChange} className="me-5 ms-5" />
                            </div>
                        )
                    })}
                </ul>
            </fieldset>


            <fieldset>
                <legend className='ms-3'>Herramientas</legend>
                <ul>
                    {tags.tools.map((x, i) => {
                        return (
                            <div className='d-flex justify-content-between' key={i}>
                                <label htmlFor={x}>{x}</label>
                                <input type="checkbox" name={x} onChange={handleChange} className="me-5" />
                            </div>
                        )
                    })}
                </ul>
            </fieldset>
            <button className='btn btn-primary w-50 align-self-center' role="submit">Filtrar</button>
        </form>


    )
}

