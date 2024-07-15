import styled from "styled-components";

export const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const UserInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(48%, 1fr));
  row-gap: 40px;
  column-gap: 4%;
  padding: 40px;
  background-color: var(--bg-light-blue);
`;

export const Info = styled.div`
  display: flex;
  gap: 1rem;
`;

export const InfoTitle = styled.p`
  width: 150px;
  font-weight: 700;
`;

export const InfoDesc = styled.p`
  width: calc(100% - 150px);
`;

export const RecruitLists = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 16px 32px;
  border: 1px solid var(--border-gray-100);
  border-radius: var(--box-radius);
`;

export const RecruitList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 1rem 0;
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 1px solid var(--border-gray-100);
  }
`;

export const LabelWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Label = styled.span`
  display: inline-block;
  width: 0.5rem;
  height: 2rem;
  background-color: #00cc21;
`;

export const Dday = styled.p``;

export const ListTitle = styled.h4`
  width: 100%;
  max-width: 450px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ListCareer = styled.p``;

export const ListStep = styled.p`
  flex-shrink: 0;
  font-weight: 700;
`;