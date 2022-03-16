import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 4rem auto 0 auto;
  padding: 2.5rem 1rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
  }

  th {
    color: var(--text-body);
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5em;
  }

  td { 
    padding: 1rem 2rem;
    border: 0;
    background-color: var(--shape);
    color: var(--text-body);
    border-radius: 0.25rem;

    &:first-child {
      color: var(--text-title);
    }

    &.deposit {
      color: var(--green);
    }

    &.withdraw {
      color: var(--red);
    }
  }
`;