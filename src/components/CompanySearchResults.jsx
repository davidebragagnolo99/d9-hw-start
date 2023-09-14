import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { searchCompanyAction } from "../redux/actions";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const CompanySearchResults = () => {
  const jobs = useSelector((state) => state.companySearch.content);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchCompanyAction(params.companyName));
  }, []);

  console.log("test" + jobs);

  return (
    <Container>
      <Row>
        <Col>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
