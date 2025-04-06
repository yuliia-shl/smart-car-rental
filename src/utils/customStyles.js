// Custom styles for react-select
export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '32px',
    borderRadius: '12px',
    padding: '0 16px',
    width: '204px',
    height: '44px',
    background: 'var(--inputs)',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '1.25',
    color: 'inherit',
    outline: 'none',
    border: state.isFocused ? 'none' : 'none',
  }),

  indicatorSeparator: () => ({ display: 'none' }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    padding: '0',
    width: '16px',
    height: '16px',
    fill: 'var(--main)',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
  }),
  menu: provided => ({
    ...provided,
    borderRadius: '12px',
    padding: '8px 0',
    background: 'var(--white)',
    width: '100%',
  }),
  menuList: (provided, state) => ({
    ...provided,
    maxHeight: state.selectProps.name === 'price' ? '188px' : '272px',
    overflowY: 'auto',
    backgroundColor: 'var(--white)',
    boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? 'transparent'
      : state.isFocused
      ? 'transparent'
      : 'transparent',
    color: 'var(--gray)',
    padding: '8px 16px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'inherit',
      color: 'var(--main)',
    },
  }),
  placeholder: provided => ({
    ...provided,
    color: 'var(--main)',
    fontSize: '16px',
  }),
  valueContainer: provided => ({
    ...provided,
    padding: '0',
  }),
};
