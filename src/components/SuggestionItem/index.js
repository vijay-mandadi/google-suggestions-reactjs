// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestion, fill} = props

  const onFill = () => {
    fill(suggestion)
  }

  return (
    <li className="list">
      <p>{suggestion}</p>
      <button type="button" onClick={onFill}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
