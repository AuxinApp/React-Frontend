import React from "react";
import './Home.css'
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from "baseui/header-navigation";
import {
  Card,
  StyledBody,
  StyledAction,
  StyledThumbnail,
} from "baseui/card";
import {BaseProvider, LightTheme, DarkTheme} from 'baseui';
import podcastLogo from "../../media/nimbleIdeas.jpeg";
import {Block} from 'baseui/block';

import { StyledLink } from "baseui/link";
import { Button } from "baseui/button";
import {
  AreaSeries,
  VerticalBarSeries,
  LineMarkSeries,
  XAxis,
  YAxis,
  XYPlot,
} from 'react-vis';
import {useStyletron} from 'baseui';

import {
  StyledTable,
  StyledHead,
  StyledHeadCell,
  StyledRow,
  StyledCell,
} from 'baseui/table';


const Home = () => {
  const headerstyle = {
    padding: "1%"
  };

  const engagestyle = {
    marginTop: "7%"
  };

  const graphstyle = {
    marginLeft: "10%",
    marginTop: "7%"
  };

  const GraphCell = ({children}) => {
    const [css, theme] = useStyletron();
    return (
      <div className={css({display: 'flex', alignItems: 'center'})}>
        <div
          className={css({
            marginRight: theme.sizing.scale600,
          })}
        >
        </div>
        <div>
          <XYPlot
            width={250}
            height={48}
            margin={{left: 6, right: 6, top: 6, bottom: 6}}
          >
            <XAxis on0={true} />
            <YAxis on0={true} />

            {children}
          </XYPlot>
        </div>
      </div>
    );
  };
  const seriesPropsFB = {
    data: [
      {
        x: 0,
        y: 5,
      },
      {
        x: 1,
        y: 15,
      },
      {
        x: 2,
        y: 13,
      },
      {
        x: 3,
        y: 20,
      },
      {
        x: 4,
        y: 13,
      },
      {
        x: 5,
        y: 22,
      },
    ],
    opacity: 1,
    fill: '#FFFFFF',
  };
  const seriesPropsIG = {
    data: [
      {
        x: 0,
        y: 1,
      },
      {
        x: 1,
        y: 3,
      },
      {
        x: 2,
        y: 3,
      },
      {
        x: 3,
        y: 7,
      },
      {
        x: 4,
        y: 13,
      },
      {
        x: 5,
        y: 22,
      },
    ],
    opacity: 1,
    fill: '#FFFFFF',
  };

  const seriesPropsTwitter = {
    data: [
      {
        x: 0,
        y: 5,
      },
      {
        x: 1,
        y: 15,
      },
      {
        x: 2,
        y: 20,
      },
      {
        x: 3,
        y: 26,
      },
      {
        x: 4,
        y: 28,
      },
      {
        x: 5,
        y: 35,
      },
    ],
    opacity: 1,
    fill: '#FFFFFF',
  };

  return (
    <div>
        <div style={headerstyle}>
          <BaseProvider theme={LightTheme}>
          <HeaderNavigation>
            <StyledNavigationList $align={ALIGN.left}>
              <h1>Hello Sharan!</h1>
            </StyledNavigationList>
            <StyledNavigationList $align={ALIGN.center} />
            <StyledNavigationList $align={ALIGN.right}>
            </StyledNavigationList>
            <StyledNavigationList $align={ALIGN.right}>
              <StyledNavigationItem>
                <Button
                overrides={{
                  BaseButton: {
                    style: ({ $theme }) => ({
                      backgroundColor: '#3b5998'
                    })
                  }
                }}
                >Connected to Facebook</Button>
              </StyledNavigationItem>
   
              <StyledNavigationItem>
              <Button
                overrides={{
                  BaseButton: {
                    style: ({ $theme }) => ({
                      backgroundColor: '#e95950'
                    })
                  }
                }}
                >Connected to Instagram</Button>
              </StyledNavigationItem>

              <StyledNavigationItem>
              <Button
                overrides={{
                  BaseButton: {
                    style: ({ $theme }) => ({
                      backgroundColor: '#1DA1F2'
                    })
                  }
                }}
                >Connected to Twitter</Button>
              </StyledNavigationItem>

              {/* <StyledNavigationItem>
              <Button 
                overrides={{
                  BaseButton: {
                    style: ({ $theme }) => ({
                      backgroundColor: '#0e76a8'
                    })
                  }
                }}
                >Login to LinkedIn</Button>
              </StyledNavigationItem> */}

            </StyledNavigationList>
          </HeaderNavigation>
          </BaseProvider>
        </div>
        <div style={headerstyle}>
          <Card theme={DarkTheme}>
            <StyledThumbnail
              src={podcastLogo}
            />
            <StyledBody>
              We saw that you just uploaded your latest Podcast for Nimble Ideas. Let's help you get the word out!
            </StyledBody>
            

            <StyledAction>
              <Button
                overrides={{
                  BaseButton: { style: { width: "20%", marginTop: "2%"} }
                }}
              >
                Go to Creator Board
              </Button>
            </StyledAction>
          </Card>
      </div>
      
      <div style={engagestyle}> 
          <Block
            as="h1"
            overrides={{
              Block: {
                style: {color: 'white'},
              },
            }}
          >
          Engagement Analytics
        </Block>
        <div style={graphstyle}>
          <StyledBody>
            <StyledRow>
              <StyledCell>
                <GraphCell>
                  <h2>Facebook</h2>
                  <AreaSeries {...seriesPropsFB} />
                </GraphCell>
                </StyledCell>
                <StyledCell>
                  <GraphCell>
                    <h2>Twitter</h2>
                    <AreaSeries {...seriesPropsTwitter} />
                  </GraphCell>
                </StyledCell>

                <StyledCell>

                <GraphCell>
                  <h2>Instagram</h2>
                  <AreaSeries {...seriesPropsIG} />
                </GraphCell>
              </StyledCell>
            </StyledRow>
          </StyledBody>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
