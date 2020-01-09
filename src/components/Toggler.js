import { useState } from 'react'
import PropTypes from 'prop-types'

export const Toggler = props => {
  const [toggled, setToggled] = useState(false)

  const onToggle = value => setToggled(value)

  return props.children({
    toggled,
    onToggle,
  })
}

Toggler.propTypes = {
  children: PropTypes.func.isRequired,
  defaultToggled: PropTypes.bool,
  onToggle: PropTypes.func,
}
