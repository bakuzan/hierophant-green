export default function getVisibleProps(isVisible, commonStyles = {}) {
  const styles = { transition: `all 0.2s ease-in-out`, ...commonStyles };

  return isVisible
    ? {
        'aria-hidden': false,
        style: { ...styles, visibility: 'visible', opacity: 1 }
      }
    : {
        'aria-hidden': true,
        style: { ...styles, visibility: 'hidden', opacity: 0 }
      };
}
