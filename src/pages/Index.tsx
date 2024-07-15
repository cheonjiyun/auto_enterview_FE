import styled from "styled-components";
import { Wrapper } from "../assets/style/Common";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authUserState } from "../recoil/store";
import { getJobPostings, postJobPostingApply } from "../axios/http/jobPosting";
import { useEffect, useState } from "react";
import { JobInfo } from "../type/jobPosting";
import { getDday } from "../utils/Format";

const Index = () => {
  const authUser = useRecoilValue(authUserState);
  const navigate = useNavigate();

  const [jobInfos, setJobInfos] = useState<JobInfo[]>([]);

  useEffect(() => {
    (async () => {
      // Mock 데이터
      setJobInfos([
        {
          jobPostingKey: "keykeyeeaf",
          companyName: "(주)회사이름",
          title: "채용공고 제목",
          techStack: ["React", "Java"],
          endDate: "2024-07-16",
        },
        {
          jobPostingKey: "keykeyeeaf",
          companyName: "(주)아이비릭스",
          title: "솔루션개발 및 구출 PL 경력",
          techStack: ["Java"],
          endDate: "2024-07-08",
        },
        {
          jobPostingKey: "keykeydeaf",
          companyName: "(주)안드로메다",
          title: "채용공고가 정말정말 긴 경우 짤리는지 확인하기 위한 제목",
          techStack: ["Java", "Springboot", "Mariadb", "C++", "Android"],
          endDate: "2024-07-12",
        },
        {
          jobPostingKey: "kykeyedeaf",
          companyName: "(주)선어양원",
          title: "사람구해요",
          techStack: ["Springboot", "C++", "Android"],
          endDate: "2024-07-19",
        },
        {
          jobPostingKey: "kyeyedeaf",
          companyName: "(주)벤치링크",
          title: "모바일앱 React 프론트엔드 개발자 채용",
          techStack: ["Android", "iOS", "Kotlin", "React"],
          endDate: "2024-08-02",
        },
      ]);

      const response = await getJobPostings();
      setJobInfos(response);
    })();
  }, []);

  const goDetail = (jobPostingKey: string) => {
    navigate(`/jobpost-detail/${jobPostingKey}`);
  };

  const apply = async (jobPostingKey: string) => {
    if (confirm("정말 지원하시겠습니까?")) {
      await postJobPostingApply(jobPostingKey);
    }
  };

  return (
    <Wrapper className="inner-1200">
      {!authUser && (
        <InfoMessage>
          아직 이력서를 작성하지 않았습니다. 아직 회사정보를 작성하지 않았습니다. 마이페이지에서
          작성해주세요.
        </InfoMessage>
      )}
      <JobsContainer>
        {jobInfos.map(jobInfo => {
          return (
            <JobContainer
              onClick={() => goDetail(jobInfo.jobPostingKey)}
              key={`${jobInfo.jobPostingKey} ${jobInfo.title}`}
            >
              <CompanyName>{jobInfo.companyName}</CompanyName>
              <JogTitle>{jobInfo.title}</JogTitle>
              <TeckStack>{jobInfo.techStack.map(stack => `#${stack} `)}</TeckStack>
              <ApplyButton
                onClick={event => {
                  event.stopPropagation();
                  apply(jobInfo.jobPostingKey);
                }}
              >
                지원하기
              </ApplyButton>
              <Dday>{getDday(jobInfo.endDate)}</Dday>
            </JobContainer>
          );
        })}
      </JobsContainer>
    </Wrapper>
  );
};

const InfoMessage = styled.p`
  margin-bottom: 100px;
  text-align: center;
  color: var(--color-red);
`;

const JobsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 16px;
`;

const JobContainer = styled.div`
  position: relative;
  min-width: 270px;
  display: flex;
  align-items: start;
  flex-direction: column;
  padding: 16px;
  background-color: var(--bg-light-blue);
  border-radius: var(--button-radius);
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(98%);
  }
`;

const CompanyName = styled.p`
  width: calc(100% - 40px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const JogTitle = styled.p`
  width: 100%;
  margin-top: 14px;
  font-size: 1.3rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TeckStack = styled.p`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 16px;
  color: #969696;
  font-size: 0.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Dday = styled.p`
  right: 16px;
  position: absolute;
  font-size: 0.8rem;
  color: var(--color-red);
`;

const ApplyButton = styled.button`
  align-self: flex-end;
  color: #ffffff;
  padding: 8px 16px;
  background-color: var(--primary-color);
  border-radius: var(--button-radius);
  font-family: "Pretendard";
  font-weight: 400;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    transform: scale(99%);
  }
`;

export default Index;