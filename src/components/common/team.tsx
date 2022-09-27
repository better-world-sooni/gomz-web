import Div from "src/components/Div";
import Col from "src/components/Col";


export const Teams = ({team, locale, isTablet}) => {
    if (isTablet) {
        return (
            <TeamsMobile team={team} locale={locale}/>
        )
    }
    return (
        <TeamsDesktop team={team} locale={locale}/>
    )
}

const TeamsMobile = ({team, locale}) => {
    return (
        team(locale).map((member, index) => {
            return (
                <Div key={index} inlineBlock>
                    <Div flex mt20 itemsCenter>
                        <Div mx15 w150 imgTag src={member.imageUri} roundedXl shadowLg></Div>
                        <Div flexCol mr15>
                            <Div textSecondary2 textLeft textMd balooB fontBold>
                                {member.name} {"  "}
                                <Div textSecondary2 textLeft fontSize8 balooR italic spanTag>
                                    {member.position}
                                </Div>
                            </Div>
                            <Div mt5 textSecondary2 textLeft fontSize10 balooR>
                                {member.specialty}
                            </Div>
                        </Div>
                    </Div>
                </Div>
            );
        })
    )
}

const TeamsDesktop = ({team, locale}) => {
    return (
        <Div grid gridCols2 gapX={30} gapY={30}>
        {team(locale).map((member, index) => {
            return (
                <Div key={index} inlineBlock mx30>
                    <Div flex mt20 maxW500>
                        <Col itemsCenter justifyCenter><Div maxH180 imgTag src={member.imageUri} roundedXl shadowLg/></Col>
                        <Col ml30>
                            <Div textSecondary2 textLeft textLg balooB fontBold>
                                {member.name}
                            </Div>
                            <Div textSecondary2 textLeft fontSize11 balooR italic>
                                {member.position}
                            </Div>
                            <Div mt5 textSecondary2 textLeft fontSize12 balooR>
                                {member.specialty}
                            </Div>
                        </Col>
                    </Div>
                </Div>
            );
        })}
        </Div>
    )
}
export default Teams