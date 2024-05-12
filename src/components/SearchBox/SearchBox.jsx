import css from './SearchBox.module.css'

export default function SearchBox({value, onFilter}) {
    return (
        <div className={css.search}>
            <p className={css.text}>Find contacts by name</p>
            <input
                className={css.field}
                type="text"
                name="text"
                value={value}
                onChange={(event) => onFilter(event.target.value)}>
            </input>
        </div>
    )
}