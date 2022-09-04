import styled from 'styled-components';

function Pagination({ total, page, setPage }) {
  const numPages = Math.ceil(total / 10);

  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? 'page' : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </Button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 30px;
  padding: 8px;
  margin: 0;
  background: #6495ed;
  color: white;
  font-size: 1rem;
  width: 40px;
  height: 40px;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    display: none;
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #00ffff;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;
