import { IMAGES } from "src/modules/images";
import { href } from "src/helpers/routeHelper";
import { urls } from "src/modules/urls";
import Col from "../Col";
import Div from "../Div";
import Row from "../Row";
import useIsTablet from "src/hooks/useIsTablet";

export default function Footer() {
  const handleClickGomz = () => {
    href(urls.index);
  };
  const isTablet = useIsTablet();

  return (
    <Div mxAuto maxW={1150} py30 px30={isTablet}>
      <Row textWhite itemsCenter>
        <Col auto onClick={handleClickGomz}>
          <Div imgTag src={IMAGES.logos.webeLogoProduction} h={isTablet ? 50 : 60} style={{ marginTop: isTablet ? 0 : 10 }}></Div>
        </Col>
        <Col py20>
          <Row py5>
            <Col auto>
              <Div spanTag>WeBe from </Div>
              <Div spanTag textSecondary2 aTag href={"https://soonilabs.com"}>
                SOONI Labs
              </Div>
            </Col>
            <Col></Col>
          </Row>
          <Row textSm>
            <Col auto>
              <Div spanTag>COPYRIGHT © WeBe. ALL RIGHTS RESERVED</Div>
            </Col>
            <Col></Col>
          </Row>
        </Col>
      </Row>
    </Div>
  );
}
